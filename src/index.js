import './index.html';
import './index.scss';
import { mult } from './modules/script';


document.addEventListener('DOMContentLoaded', () => {
  // Находим все модальные окна
const modalList = document.querySelectorAll('.modal-content');

// Находим кнопки "Далее" и "Назад"
const nextBtn = document.querySelectorAll('.next__btn');
const prevBtn = document.querySelectorAll('.prev__btn');

// Находим все радио-кнопки
const radioBtns = document.querySelectorAll('input[name="answer"]');

// Находим элементы для отображения текущего шага

let stepElems = document.querySelectorAll('.question__step');

// Начальное значение текущего шага
let currentStep = 0;

// Отображаем количество модальных окон
const modalCount = modalList.length;

// Устанавливаем значения шагов на каждом модальном окне
for (let i = 0; i < modalCount; i++) {
  stepElems[i].textContent = `Шаг ${i + 1}/${modalCount}`;
}

// По умолчанию скрываем все модальные окна кроме первого
for (let i = 1; i < modalCount; i++) {
  modalList[i].classList.add('hide');
}

function switchModal(direction) {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  // Проверяем, был ли выбран какой-то вариант ответа
  if (currentStep !== 0 && !selectedAnswer) {
    nextBtn[currentStep].disabled = true;
    return;
  }

  // Скрываем текущее модальное окно
  modalList[currentStep].classList.add('hide');

  // Устанавливаем новое значение текущего шага
  currentStep += direction;

  // Отображаем новое модальное окно
  modalList[currentStep].classList.remove('hide');

  // Обновляем отображение текущего шага
  for (let i = 0; i < modalCount; i++) {
    stepElems[i].textContent = `Шаг ${i + 1}/${modalCount}`;
  }

  // Если это первое модальное окно, делаем кнопку "Назад" неактивной
  if (currentStep === 0) {
    prevBtn[currentStep].disabled = true;
  } else {
    prevBtn[currentStep].disabled = false;
  }

  // Если это последнее модальное окно, делаем кнопку "Далее" неактивной
  if (currentStep === modalCount - 1) {
    nextBtn[currentStep].disabled = true;
  } else {
    nextBtn[currentStep].disabled = false;
  }
}


// Обработчик клика на кнопку "Назад"
prevBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    switchModal(-1);

  });
});

// Обработчик клика на кнопку "Далее"
nextBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    switchModal(1);
    // nextBtn[currentStep].disabled = true;

  });
});
// Обработчик изменения радио-кнопок
radioBtns.forEach((btn) => {
  btn.addEventListener('change', () => {
    // Добавляем класс active к выбранной радио-кнопке
    radioBtns.forEach((radioBtn) => {
      radioBtn.parentNode.classList.remove('active');
    });
    btn.parentNode.classList.add('active');

    // Если выбран какой-то вариант, делаем кнопку "Далее" активной
    nextBtn[currentStep].disabled = false;
    switchModal(1);
  });
});

const selectWrapperCity = document.querySelector(".select__wrapper.city");
selectWrapperCity.addEventListener("click", function () {
  selectWrapperCity.classList.toggle("active")
});
document.addEventListener("click", function (e) {
  const sel = e.composedPath().includes(selectWrapperCity);
  if (!sel) {
    selectWrapperCity.classList.remove("active");
  }
});


const selectWrapperProfession = document.querySelector(".select__wrapper.profession");
selectWrapperProfession.addEventListener("click", function () {
  selectWrapperProfession.classList.toggle("active")
});
document.addEventListener("click", function (e) {
  const sel = e.composedPath().includes(selectWrapperProfession);
  if (!sel) {
    selectWrapperProfession.classList.remove("active");
  }
});


});





