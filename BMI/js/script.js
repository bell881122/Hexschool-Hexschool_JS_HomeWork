
let heightInput = document.getElementsByName('heightInput')[0];
let weightInput = document.getElementsByName('weightInput')[0];

let resultBtn = document.getElementsByClassName('resultBtn')[0];
let resultBtnInner = document.getElementsByClassName('resultBtnInner')[0];

let BMIResult = document.getElementsByClassName('BMIResult')[0];
BMIResult.innerText = '看結果';
let BMIText = document.getElementsByClassName('BMIText')[0];
let range = document.getElementsByClassName('range')[0];

// localStorage.removeItem('records');

let records = [];
if (localStorage.length !== 0) {
    records = (JSON.parse(localStorage.getItem('records')));
}
console.log(records);
getRecords(records);


resultBtn.addEventListener('click', function () {
    if (isNaN(heightInput.value) || heightInput.value === "" || isNaN(weightInput.value) || weightInput.value === "") {
        alert('請輸入正確數字');
        return;
    }

    resetClass();

    BMIText.innerText = 'BMI';
    resultBtn.classList.add("resultClicked");

    let BMI = getBMI();
    getRange(BMI);
    setLocalstorage(BMI)

})

function resetClass() {
    BMIResult.classList.remove("range1-text", "range2-text", "range3-text", "range4-text", "range5-text");
    BMIText.classList.remove("range1-text", "range2-text", "range3-text", "range4-text", "range5-text");
    range.classList.remove("range1-text", "range2-text", "range3-text", "range4-text", "range5-text");
    resultBtn.classList.remove("range1", "range2", "range3", "range4", "range5");
}

function getBMI() {
    let height = heightInput.value / 100;
    let weight = weightInput.value;
    BMI = Math.floor((weight / (height * height)) * 100) / 100;
    return BMI;
}

function getRange(BMI) {
    if (BMI < 16) {
        BMIResult.innerText = BMI;
        range.innerText = '過輕';
        resultBtn.classList.add("range1");
        BMIResult.classList.add("range1-text");
        BMIText.classList.add("range1-text");
        range.classList.add("range1-text");
    }
    else if (BMI >= 16 && BMI < 18.5) {
        BMIResult.innerText = BMI;
        range.innerText = '理想';
        resultBtn.classList.add("range2");
        BMIResult.classList.add("range2-text");
        BMIText.classList.add("range2-text");
        range.classList.add("range2-text");
    }
    else if (BMI >= 18.5 && BMI < 25) {
        BMIResult.innerText = BMI;
        range.innerText = '過重';
        resultBtn.classList.add("range3");
        BMIResult.classList.add("range3-text");
        BMIText.classList.add("range3-text");
        range.classList.add("range3-text");
    }
    else if (BMI >= 25 && BMI < 30) {
        BMIResult.innerText = BMI;
        range.innerText = '輕度肥胖';
        resultBtn.classList.add("range4");
        BMIResult.classList.add("range4-text");
        BMIText.classList.add("range4-text");
        range.classList.add("range4-text");
    }
    else if (BMI >= 30 && BMI < 35) {
        BMIResult.innerText = BMI;
        range.innerText = '中度肥胖';
        resultBtn.classList.add("range4");
        BMIResult.classList.add("range4-text");
        BMIText.classList.add("range4-text");
        range.classList.add("range4-text");
    }
    else if (BMI >= 35) {
        BMIResult.innerText = BMI;
        range.innerText = '重度肥胖';
        resultBtn.classList.add("range5");
        BMIResult.classList.add("range5-text");
        BMIText.classList.add("range5-text");
        range.classList.add("range5-text");
    }
}

function setLocalstorage(BMI) {

    let data = {
        date: getDateNow(),
        time: getTimeNow(),
        range: range.innerText,
        BMI: BMIResult.innerText,
        height: heightInput.value,
        weight: weightInput.value
    }

    let key = `${data.date} ${data.time}`

    records.push(key);
    localStorage.setItem('records', JSON.stringify(records));
    localStorage.setItem(key, JSON.stringify(data));
}

function getRecords(records) {
    for (let i = 0; i < records.length; i++) {
        record = JSON.parse(localStorage.getItem(records[i]));
        console.log(record);
    }
};

function getDateNow() {
    let timeNow = new Date();
    let year = timeNow.getFullYear();
    let month = padLeft((timeNow.getMonth() + 1).toString(), 2);
    let date = padLeft(timeNow.getDate().toString(), 2);
    return `${year}-${month}-${date}`

}
function getTimeNow() {
    let timeNow = new Date();
    let hour = padLeft(timeNow.getHours().toString(), 2);
    let minute = padLeft(timeNow.getMinutes().toString(), 2);
    let second = padLeft(timeNow.getSeconds().toString(), 2);
    return `${hour}:${minute}:${second}`;
}

function padLeft(str, lenght) {
    if (str.length >= lenght)
        return str;
    else
        return padLeft("0" + str, lenght);
}
