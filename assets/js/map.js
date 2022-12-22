mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdGxhYnlvIiwiYSI6ImNsYnlrMGNqdjA3aGgzd3A5YndzNHhocXMifQ.HK7dygdnhb1KEyK37aJWqw';
		var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v12',
		center: [105.815950, 21.022150],
		zoom: 5,
		customAttribution: 'Nhóm 2 - Anh Không Ăn mừng'
	});
	map.addControl(new mapboxgl.NavigationControl());
	//   add location
let lct = {
	"type": "FeatureCollection",
	"features": [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [105.815950, 21.022150]
			},
			properties: {
				name: 'Cơ sở Thành Công Hà Nội',
				"text":"Địa chỉ: Tầng 6, Tòa nhà Chigamex 22C Thành Công, Phường Thành Công, Quận Ba Đình, Hà Nội",
				hotline: "02477705666",
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [105.81121682612, 21.02437647802429]
			},
			properties: {
				name: 'Cơ sở Nguyễn Chí Thanh Hà Nội',
				"text": "Địa chỉ: Tầng 5, 71 Nguyễn Chí Thanh, Phường Láng Hạ, Quận Đống Đa, Hà Nội",
				hotline: "02477717888",
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [106.67938892597988, 10.827318849139573]
			},
			properties: {
				name: 'Cơ sở 01 Quang Trung TP HCM',
				"text": "Địa chỉ: Lầu 1, số 1 Quang Trung, phường 10, Quận Gò Vấp (ngã 6 Gò Vấp), TP HCM",
				hotline: "02877717789",
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [106.65256180691634, 10.804139798091798]
			},
			properties: {
				name: 'Cơ sở 20 Cộng Hòa TP HCM',
				"text": "Địa chỉ: Lầu 2, (Chung cư Cộng Hoà garden) 20 Cộng Hòa, Phường 12, Quận Tân Bình, TP HCM",
				hotline: "02877717789",
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [108.214940, 16.060620]
			},
			properties: {
				name: 'Cơ sở Đà Nẵng',
				"text": "K80/10, Nguyễn Văn Linh, Phường Nam Dương, Quận Hải Châu, Thành Phố Đà Nẵng, Nam Dương, Hải Châu, Đà Nẵng",
				hotline: "02877717789",
			}
		}
	]
}


	//function get data to list branch
function getDtToHTML (data, elmID, fielddVisible) {
	let content = "";
	let elm = document.getElementById(elmID);
	if(elm) {
		for (const feature of data.features) {
			content += `<div class="leaderboard__branch"><span class="leaderboard__branch-name">${feature.properties[fielddVisible]}</span></div>`
		}
		elm.innerHTML = content;
	}
}

getDtToHTML(lct,'listBranchMap','name');



let getBtnClb = document.querySelector('.btn__close-listBranch');
let getBtnOlb = document.querySelector('.open__list_branch');
//close list branch
let getListB = document.querySelector('.list_branch');
getBtnClb.onclick = () => {
	if(getListB) {
		getListB.style.left = '-100%';
	}
	getBtnOlb.style.display = 'flex';
}

	//open list branch
	getBtnOlb.onclick = () => {
		if(getListB) {
			getListB.style.left = '2rem';
		}
		getBtnOlb.style.display = 'none'
	}

	//get elementBranch
	let getBranch = document.querySelectorAll('.leaderboard__branch');
	let getQuanBranch;
	console.log(getBranch);
	for (let gbstt = 0; gbstt < getBranch.length ;gbstt++) {
		getBranch[gbstt].onclick = () =>{
			if(getBranch[gbstt]){
				getListB.style.left = '-100%';
				getBtnOlb.style.display = 'flex';
				map.flyTo({
					center: lct.features[gbstt].geometry.coordinates,
					essential: true, // this animation is considered essential with respect to prefers-reduced-motion
					zoom: 15
				});		
			}
		} 
	}
	
	//get element Detail Branch
	let getDetlBranch = document.querySelector('.branch__Info-detail');

	//load map and data
	map.on('load', (e) => {
		// Load an image from an external URL.
		map.loadImage(
			'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
			(error, image) => {
				if (error) throw error;

				// Add the image to the map style.
				map.addImage('cat', image);

				// Add a data source containing one point feature.
				map.addSource('pont', {
					'type': 'geojson',
					data: lct,
				});



				// Add a layer to use the image to represent the data.
				map.addLayer({
					'id': 'pont',
					'type': 'symbol',
					'source': 'pont', // reference the data source
					'layout': {
						'icon-image': 'cat', // reference the image
						'icon-size': 0.23
					}
				});

				// When a click event occurs on a feature in the places layer, open a popup at the
				// location of the feature, with description HTML from its properties.
				map.on('click', 'pont', (e) => {
					// Copy coordinates array.
					const coordinates = e.features[0].geometry.coordinates.slice();
					const description = e.features[0].properties.name;
					const contentPlace = e.features[0].properties.text;
					const hotlineBranch = e.features[0].properties.hotline;
					// getBranch = coordinates;
					
					// Ensure that if the map is zoomed out such that multiple
					// copies of the feature are visible, the popup appears
					// over the copy being pointed to.
					while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
						coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
					}


					if (map.flyTo({
						center: coordinates,
						essential: true, // this animation is considered essential with respect to prefers-reduced-motion
						zoom: 15
						})) 
						{
							getListB.style.left = '-100%';
							getBtnOlb.style.display = 'flex';
							getDetlBranch.innerHTML = 
							`<div class="branch__detail animation__open__branch__detail">
								<div class="branch__img"></div>
								<div class="branch__detail-content">
									<div class="branch__info-location">
										<span class="info-location-NameBranch">${description}</span>
										<div class="info__underline"></div>
										<h2 class="info-location-headingFont">Địa chỉ</h2>
										<p class="info-location-paragFont">${contentPlace}</p>
									</div>
									<div class="info__underline"></div>
										<div class="branch__info-hotline">
										<h2 class="info-location-headingFont">Hotline</h2>
										<p class="info-location-paragFont">${hotlineBranch}</p>
									</div>
								</div>
								<i class="fa-sharp fa-solid fa-circle-xmark btn__close-DetailBranch"></i>
							</div>`;

							let getBtnCloseDetailBranch = document.querySelector('.btn__close-DetailBranch');
							let getBrDtl = document.querySelector('.branch__detail');
							getBtnCloseDetailBranch.onclick = () => {
								/* when open */
								getBrDtl.setAttribute('style', 'opacity: 0')
							}

					};
				});

				// Change the cursor to a pointer when the mouse is over the places layer.
				map.on('mouseenter', 'pont', () => {
				map.getCanvas().style.cursor = 'pointer';
				});

				// Change it back to a pointer when it leaves.
				map.on('mouseleave', 'pont', () => {
				map.getCanvas().style.cursor = '';
				});


			}
		);
	});
 
