// CALC BMI
let getWeightB1 = document.getElementById('cacl_frame-input-weight__box1');
let getBtnWeightB1 = document.getElementById('cacl_frame-btn-weight__box1');
let getBox1 = document.getElementById('box_calc_1');
let ErrorCalc = document.querySelectorAll('.error-calc_bmi');  
let getHeightB2 = document.getElementById('cacl_frame-input-weight__box2');
let getBtnHeightB2 = document.getElementById('cacl_frame-btn-weight__box2');
let getBox2 = document.getElementById('box_calc_2');
let getBox3 = document.getElementById('box_calc_3');

getBtnWeightB1.onclick = () => {
  if (getWeightB1.value == '' || getWeightB1.value < 1) {
    ErrorCalc[0].setAttribute('style', 'opacity:1');
  } else {
    getBox1.setAttribute('style','display: none');
    getBox2.setAttribute('style', 'display: block');
    return parseInt(getWeightB1.value);
  }
}


getBtnHeightB2.onclick = () => {
  if (getHeightB2.value == ''|| getHeightB2.value < 1) {
    ErrorCalc[1].setAttribute('style', 'opacity:1');
  } else {

    getBox2.setAttribute('style', 'display: none');
    getBox3.setAttribute('style', 'display: block');
    let totalBMI = parseInt(getWeightB1.value)/(parseInt(getHeightB2.value)*parseInt(getHeightB2.value)/100);
    console.log(totalBMI);
  }   
}

