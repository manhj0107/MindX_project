const LIST_USER = 'LIST_USER';
let users = [];
let getName = document.querySelector('.get_name');
let getNumber = document.querySelector('.get_number');
let getContact = document.querySelector('.contact__name__select');
let getDate = document.getElementById('date');
let getNote = document.querySelector('.get_note');
let getSend = document.querySelector('.get_send');
let getBranchLoca = document.querySelector('.contact__name__branch')
getSend.onclick = () => {
    
    let NewUser = {
        fullname:getName.value,
        phonenumber:getNumber.value,
        contact:getContact.value,
        date:getDate.value,
        note:getNote.value,
        locationBranch: getBranchLoca.value,
    }
    users.push(NewUser);
    localStorage.setItem('LIST_USER', JSON.stringify(users));
    alert('Đăng ký thành công');
    data = JSON.parse(localStorage.getItem(LIST_USER));
    // location.reload(); 
    getName.value = '';
    getNumber.value = '';
    getContact.value = '';
    getDate.value = '';
    getNote.value = ''; 
}

// localStorage.clear();

let checkForm = document.getElementById('btnSearchSDT');
let getNumSearch = document.getElementById('check');
let showResultUser = document.getElementById('result');
checkForm.onclick = () => {
    data = JSON.parse(localStorage.getItem(LIST_USER));
    for (let i = 0; i < data.length; i++) {
            if(getNumSearch.value == data[i].phonenumber){
                showResultUser.innerHTML = 
                    `
                    <div class="booking__login">
                    <div class="booking__login__inner">
                        <div class="space1"></div>
                        <header class="booking__headline">
                            <h3 class="booking__headline__tag">
                                <span class="booking__headline__content">
                                    <span>Đơn đặt khám</span>
                                </span>
                            </h3>                                
                        </header>
                        <div class="booking__contact__form">
                            <div class="wpcf7" id="wpcf7-f4-p13-o1" lang="en-US" dir="ltr">
                                <div class="contact__form">
                                    <div class="NameUUser">
                                        <p>Họ tên: ${data[i].fullname}</p>
                                    </div>
                                    <div class="PhoneUUser">
                                        <p>Số điện thoại: ${data[i].phonenumber}</p>
                                    </div>
                                    <div class="ProductUUser">
                                        <p>Chuyên khoa khám: ${data[i].contact}</p>
                                    </div>
                                    <div class="DateUUser">
                                        <p>Ngày đặt khám: ${data[i].date}</p>
                                    </div>
                                    <div class="BranchUUser">
                                        <p>Cơ sở: ${data[i].locationBranch}</p>
                                    </div>
                                    <div class="NoteUUser">
                                        <p>Ghi chú: ${data[i].note}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
                // <p>${data[i].fullname}</p>
                // <p>${data[i].phonenumber}</p>
                // <p>${data[i].contact}</p>
                // <p>${data[i].date}</p>
                // <p>${data[i].note}</p>
                console.log(data[i]);
            } else {
                showResultUser.innerHTML = `<p>Không tìm thấy kết quả</p>`;
            }
            
    }

    // checkForm = users.filter((item) => {return item.phonenumber === 0})
}

let getBtnDelResult = document.getElementById('btnDelResult');
getBtnDelResult.onclick = () => {
    showResultUser.innerHTML = ``;
}