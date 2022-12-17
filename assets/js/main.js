// CALC BMIrating_bmi
let getWeightB1 = document.getElementById('cacl_frame-input-weight__box1');
let getBtnWeightB1 = document.getElementById('cacl_frame-btn-weight__box1');
let getBox1 = document.getElementById('box_calc_1');
let ErrorCalc = document.querySelectorAll('.error-calc_bmi');  
let getHeightB2 = document.getElementById('cacl_frame-input-weight__box2');
let getBtnHeightB2 = document.getElementById('cacl_frame-btn-weight__box2');
let getBox2 = document.getElementById('box_calc_2');
let getBox3 = document.getElementById('box_calc_3');
let getBtnCaclAgain = document.querySelectorAll('.btn__calc__again');
let getResultBMI = document.getElementById('resutl__total__BMI');
let rating_Bmi = document.getElementById('rating_Bmi');

// get box resutl
let getBoxResult = document.querySelectorAll('.box_resul__frame');

//get suggets
let getSuggetBox = document.querySelectorAll('.suggets');


getBtnWeightB1.onclick = () => {
  if (getWeightB1.value == '' || getWeightB1.value < 1) {
    ErrorCalc[0].setAttribute('style', 'opacity:1');
  } else {
    getBox1.setAttribute('style','display: none');
    getBox2.setAttribute('style', 'display: block');
  }
}


getBtnHeightB2.onclick = () => {
  if (getHeightB2.value == ''|| getHeightB2.value < 1) {
    ErrorCalc[1].setAttribute('style', 'opacity:1');
  } else {
    getBox2.setAttribute('style', 'display: none');
    getBox3.setAttribute('style', 'display: block');
    HeighUser = getHeightB2.value/100;
    let totalBMI = getWeightB1.value/(HeighUser*HeighUser);
    totalBMI = totalBMI.toFixed(2);
    getResultBMI.textContent = `${totalBMI}`;

    if(totalBMI < 18.5) resultBmiId = 1;
    if(totalBMI >= 18.5 && totalBMI <= 24.9) resultBmiId = 2;
    if(totalBMI >= 25 && totalBMI <= 29.9) resultBmiId = 3;
    if(totalBMI > 29) resultBmiId = 4;

    switch(resultBmiId) {
      case 1:
        getBoxResult[0].setAttribute('style', 'display:block');
        getSuggetBox[0].setAttribute('style', 'display:block');
        break;
      case 2:
        getBoxResult[1].setAttribute('style', 'display:block');
        getSuggetBox[1].setAttribute('style', 'display:block');
        break;
      case 3:
        getBoxResult[2].setAttribute('style', 'display:block');
        getSuggetBox[2].setAttribute('style', 'display:block');
        break;
      case 4:
        getBoxResult[3].setAttribute('style', 'display:block');
        getSuggetBox[3].setAttribute('style', 'display:block');
        break;
    }
  }   
}

for (let i = 0; i < getBtnCaclAgain.length; i++) {
  getBtnCaclAgain[i].onclick = () => {
    getBox1.setAttribute('style','display: none');
    getBox2.setAttribute('style', 'display: none');
    getBox3.setAttribute('style', 'display: none');
    if (getBox1.classList.contains('display') == false && getBox2.classList.contains('display') == false && getBox3.classList.contains('display') == false) {
      getBox1.setAttribute('style','display: block');
    }
    for (let k = 0; k < getBoxResult.length; k++) {
      getBoxResult[k].setAttribute('style', 'display: none');
    }
    for (let j = 0; j < getSuggetBox.length; j++) {
      getSuggetBox[i].setAttribute('style', 'display: none');
    }
  }
}

// get button question
//suggestbox 1
// get button question
let ques1 = document.querySelectorAll('.quesb1');
let moveques1 = document.querySelectorAll('.answer_b1');
let btnApart1 = document.querySelectorAll('.btnQ_bmi1');
ques1[0].onclick = () => {  
  moveques1[0].classList.toggle('showques');
  ques1[0].classList.toggle('question__detail__heading-bold');
  if (btnApart1[0].classList.contains('addbtnQ')) {
    btnApart1[0].classList.toggle('addbtnQ');
    btnApart1[0].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart1[0].classList.toggle('addbtnQ');
    btnApart1[0].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}
ques1[1].onclick = () => {  
  moveques1[1].classList.toggle('showques');
  ques1[1].classList.toggle('question__detail__heading-bold');
  if (btnApart1[1].classList.contains('addbtnQ')) {
    btnApart1[1].classList.toggle('addbtnQ');
    btnApart1[1].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart1[1].classList.toggle('addbtnQ');
    btnApart1[1].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}
ques1[2].onclick = () => {  
  moveques1[2].classList.toggle('showques');
  ques1[2].classList.toggle('question__detail__heading-bold');
  if (btnApart1[2].classList.contains('addbtnQ')) {
    btnApart1[2].classList.toggle('addbtnQ');
    btnApart1[2].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart1[2].classList.toggle('addbtnQ');
    btnApart1[2].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}

// suggestbox 2
let ques2 = document.querySelectorAll('.quesb2');
let moveques2 = document.querySelectorAll('.answer_b2');
let btnApart2 = document.querySelectorAll('.btnQ_bmi2');
ques2[0].onclick = () => {  
  moveques2[0].classList.toggle('showques');
  ques2[0].classList.toggle('question__detail__heading-bold');
  if (btnApart1[0].classList.contains('addbtnQ')) {
    btnApart2[0].classList.toggle('addbtnQ');
    btnApart2[0].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart2[0].classList.toggle('addbtnQ');
    btnApart2[0].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}
ques2[1].onclick = () => {  
  moveques2[1].classList.toggle('showques');
  ques2[1].classList.toggle('question__detail__heading-bold');
  if (btnApart2[1].classList.contains('addbtnQ')) {
    btnApart2[1].classList.toggle('addbtnQ');
    btnApart2[1].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart2[1].classList.toggle('addbtnQ');
    btnApart2[1].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}

// suggestbox 3
let ques3 = document.querySelectorAll('.quesb3');
let moveques3 = document.querySelectorAll('.answer_b3');
let btnApart3 = document.querySelectorAll('.btnQ_bmi3');
ques3[0].onclick = () => {  
  moveques3[0].classList.toggle('showques');
  ques3[0].classList.toggle('question__detail__heading-bold');
  if (btnApart3[0].classList.contains('addbtnQ')) {
    btnApart3[0].classList.toggle('addbtnQ');
    btnApart3[0].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart3[0].classList.toggle('addbtnQ');
    btnApart3[0].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}
ques3[1].onclick = () => {  
  moveques3[1].classList.toggle('showques');
  ques3[1].classList.toggle('question__detail__heading-bold');
  if (btnApart3[1].classList.contains('addbtnQ')) {
    btnApart3[1].classList.toggle('addbtnQ');
    btnApart3[1].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart3[1].classList.toggle('addbtnQ');
    btnApart3[1].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}
ques3[2].onclick = () => {  
  moveques3[2].classList.toggle('showques');
  ques3[2].classList.toggle('question__detail__heading-bold');
  if (btnApart3[2].classList.contains('addbtnQ')) {
    btnApart3[2].classList.toggle('addbtnQ');
    btnApart3[2].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart3[2].classList.toggle('addbtnQ');
    btnApart3[2].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}

//suggest box4
let ques4 = document.querySelectorAll('.quesb4');
let moveques4 = document.querySelectorAll('.answer_b4');
let btnApart4 = document.querySelectorAll('.btnQ_bmi4');
ques4[0].onclick = () => {  
  moveques4[0].classList.toggle('showques');
  ques4[0].classList.toggle('question__detail__heading-bold');
  if (btnApart4[0].classList.contains('addbtnQ')) {
    btnApart4[0].classList.toggle('addbtnQ');
    btnApart4[0].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart4[0].classList.toggle('addbtnQ');
    btnApart4[0].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}
ques4[1].onclick = () => {  
  moveques4[1].classList.toggle('showques');
  ques4[1].classList.toggle('question__detail__heading-bold');
  if (btnApart4[1].classList.contains('addbtnQ')) {
    btnApart4[1].classList.toggle('addbtnQ');
    btnApart4[1].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart4[1].classList.toggle('addbtnQ');
    btnApart4[1].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}
ques4[2].onclick = () => {  
  moveques4[2].classList.toggle('showques');
  ques4[2].classList.toggle('question__detail__heading-bold');
  if (btnApart4[2].classList.contains('addbtnQ')) {
    btnApart4[2].classList.toggle('addbtnQ');
    btnApart4[2].innerHTML = '<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4v8M4 8h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  } else {
    btnApart4[2].classList.toggle('addbtnQ');
    btnApart4[2].innerHTML = '<svg width="20" height="3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3"><path d="M1 1.004h8" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  }
}