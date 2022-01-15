let result = document.getElementById("result");
let finishElement = document.getElementById("finish");
let numbersElement = document.getElementById("numbers");
const calculateButton = document.querySelector("#calculator button");

function calculate() {
  let sum = 0;
  let startInput = document.getElementById("startValue");
  let finishInput = document.getElementById("finishValue");
  let startValue = +document.getElementById("startValue").value;
  let finishValue = +document.getElementById("finishValue").value;

  // s1 ve s2 pozitif
  if (startValue > 0 && finishValue > 0) {
    if (startValue < finishValue) {
      let numbers = [];
      for (i = startValue; i <= finishValue; i++) {
        sum = sum + i;
        numbers.push(i);
      }
      console.log(numbers);
      // let tempTextFinish = `${startValue}
      // ile
      // ${finishValue}
      // arasındaki işleme alınan sayı adedi:
      // ${finishValue - startValue + 1}
      // `;
      // let tempTextNumbers = `
      // ${numbers}`;

      // finishElement.textContent = tempTextFinish;
      // numbersElement.textContent = tempTextNumbers
      let tempText =
        startValue +
        " ile " +
        finishValue +
        " aralığındaki sayı adedi: " +
        (finishValue - startValue + 1);
      finishElement.textContent = tempText;
      result.textContent = "Toplam: " + sum;
      startInput.value = null;
      finishInput.value = null;
      console.log(startInput);
    } else {
      for (i = startValue; i >= finishValue; i--) {
        sum = sum + i;
      }
      let tempText =
        startValue +
        " ile " +
        finishValue +
        " aralığındaki sayı adedi: " +
        (startValue - finishValue + 1);
      finishElement.textContent = tempText;
      result.textContent = "Toplam: " + sum;
      startInput.value = null;
      finishInput.value = null;
    }
  }
  // s1 veya s2 negatif
  else if (startValue < 0 && finishValue > 0) {
    if (startValue * -1 < finishValue) {
      let tempStartValue = startValue * -1;
      for (i = finishValue; i > tempStartValue; i--) {
        sum = sum + i;
      }
      let tempText =
        startValue +
        " ile " +
        finishValue +
        " aralığındaki sayı adedi: " +
        (startValue * -1 + finishValue + 1);
      finishElement.textContent = tempText;
      result.textContent = "Toplam: " + sum;
      startInput.value = null;
      finishInput.value = null;
    } else {
      let tempStartValue = startValue * -1;
      for (i = tempStartValue; i > finishValue; i--) {
        sum = sum + i;
      }
      let tempText =
        startValue +
        " ile " +
        finishValue +
        " aralığındaki sayı adedi: " +
        (1 + startValue * -1 + finishValue);
      finishElement.textContent = tempText;
      result.textContent = "Toplam: " + -sum;
      startInput.value = null;
      finishInput.value = null;
    }
  } else if (startValue > 0 && finishValue < 0) {
    if (startValue < finishValue * -1) {
      let tempFinishValue = finishValue * -1;
      for (i = tempFinishValue; i > startValue; i--) {
        sum = sum + i;
      }
      let tempText =
        startValue +
        " ile " +
        finishValue +
        " aralığındaki sayı adedi: " +
        (1 + startValue + finishValue * -1);
      finishElement.textContent = tempText;
      result.textContent = "Toplam: " + -sum;
      startInput.value = null;
      finishInput.value = null;
    } else {
      let tempFinishValue = finishValue * -1;
      for (i = startValue; i > tempFinishValue; i--) {
        sum = sum + i;
      }
      let tempText =
        startValue +
        " ile " +
        finishValue +
        " aralığındaki sayı adedi: " +
        (1 + startValue + finishValue * -1);
      finishElement.textContent = tempText;
      result.textContent = "Toplam: " + sum;
      startInput.value = null;
      finishInput.value = null;
    }
  } else {
    if (startValue * -1 > finishValue * -1) {
      let tempStart = startValue * -1;
      let tempFinish = finishValue * -1;
      for (i = tempFinish; i <= tempStart; i++) {
        sum = sum + i;
      }
      let tempText =
        startValue +
        " ile " +
        finishValue +
        " aralığındaki sayı adedi: " +
        (tempStart - tempFinish + 1);
      finishElement.textContent = tempText;
      result.textContent = "Toplam: " + -sum;
      startInput.value = null;
      finishInput.value = null;
    } else if (
      startValue == finishValue ||
      startValue * -1 == finishValue ||
      startValue == finishValue * -1
    ) {
      result.textContent = 0;
    } else {
      let tempStart = startValue * -1;
      let tempFinish = finishValue * -1;
      for (i = tempStart; i <= tempFinish; i++) {
        sum = sum + i;
      }
      let tempText =
        startValue +
        " ile " +
        finishValue +
        " aralığındaki sayı adedi: " +
        (tempFinish - tempStart + 1);
      finishElement.textContent = tempText;
      result.textContent = "Toplam: " + -sum;
      startInput.value = null;
      finishInput.value = null;
    }
  }
}

calculateButton.addEventListener("click", calculate);
