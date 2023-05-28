//КОЛИЧЕСТВО В КАТЕГОРИИ ОТ 10 ШТУК

//РАЗБЕРИСЬ С ТЁМНОЙ ТЕМОЙ
//ПЕРЕЧИТАЙ ЗАДАНИЕ
//У ТЕБЯ ВСЁ ПОЛУЧИТСЯ
import data from './data.js';
const display = document.getElementById('indexList');
display.onclick = wrapperFunc;
function viewItems(field) {
  const cart = document.createElement('div');
  cart.classList.add('cart');
  const img = document.createElement('img');
  img.src = field.image;
  img.classList.add('cart__img');
  const name = document.createElement('h5');
  name.textContent = field.name;
  const addedData = document.createElement('p');
  addedData.textContent = `${getDayInfo(field.data)}`;
  const bye = document.createElement('input');
  bye.setAttribute('type', 'button');
  bye.value = 'Купить';
  bye.classList.add('cart__bye');
  bye.dataset.id = field.id;
  cart.append(img, name, addedData, bye);
  display.append(cart);
}
function wrapperFunc(e) {
  if (e.target.classList.contains('cart__bye')) {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    const modalContent = document.getElementById('modalContent');
    modalContent.textContent = '';
    const form = document.createElement('form');
    const product = data.find(({ id }) => id === Number(e.target.dataset.id));
    const modalTitle = document.createElement('p');
    modalTitle.textContent = product.name;
    const countText = document.createElement('p');
    countText.textContent = 'Укажите количество';
    const count = document.createElement('input');
    count.setAttribute('type', 'number');
    count.setAttribute('min', '1');
    count.setAttribute('value', '1');
    const radioList = document.createElement('fieldset');
    const radioRed = document.createElement('input');
    radioRed.setAttribute('type', 'radio');
    radioRed.setAttribute('id', 'radioRed');
    radioRed.setAttribute('name', 'color');
    radioRed.setAttribute('checked', 'true');
    const labelRed = document.createElement('label');
    labelRed.setAttribute('for', 'radioRed');
    labelRed.textContent = 'красный';

    const radioGreen = document.createElement('input');
    radioGreen.setAttribute('type', 'radio');
    radioGreen.setAttribute('id', 'radioGreen');
    radioGreen.setAttribute('name', 'color');
    const labelGreen = document.createElement('label');
    labelGreen.setAttribute('for', 'radioGreen');
    labelGreen.textContent = 'зеленый';

    const radioWhite = document.createElement('input');
    radioWhite.setAttribute('type', 'radio');
    radioWhite.setAttribute('id', 'radioWhite');
    radioWhite.setAttribute('name', 'color');
    const labelWhite = document.createElement('label');
    labelWhite.setAttribute('for', 'radioWhite');
    labelWhite.textContent = 'белый';

    radioList.append(
      radioRed,
      labelRed,
      radioGreen,
      labelGreen,
      radioWhite,
      labelWhite
    );
    const colorTitle = document.createElement('p');
    colorTitle.textContent = 'Выберете цвет';

    const comment = document.createElement('textarea');
    comment.setAttribute('maxlength', '2000');
    comment.setAttribute('placeholder', 'Оставьте комментарий');
    comment.className = 'modal__comment';
    const submitter = document.createElement('input');
    submitter.setAttribute('type', 'submit');
    submitter.setAttribute('value', 'Купить');
    const closer = document.createElement('input');
    closer.setAttribute('type', 'button');
    closer.setAttribute('value', 'Закрыть');
    closer.onclick = () => {
      const modal = document.getElementById('modal');
      modal.classList.add('hidden');
    };
    form.append(
      modalTitle,
      countText,
      count,
      colorTitle,
      radioList,
      comment,
      submitter,
      closer
    );
    modalContent.append(form);
    form.onsubmit = () => {
      alert('Товар куплен');
      const modal = document.getElementById('modal');
      modal.classList.add('hidden');
    };
  }
}

window.onclick = function (e) {
  if (e.target.classList.contains('modal')) {
    e.target.classList.add('hidden');
  }
};

function getDayInfo(dataDate) {
  let dataNew = new Date(dataDate);
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const mounthList = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  let day = days[dataNew.getDay()];
  let weekNumber = 1;
  if (dataNew.getDate() > 7) {
    weekNumber = 2;
  } else if (dataNew.getDate() > 14) {
    weekNumber = 3;
  } else if (dataNew.getDate() > 21) {
    weekNumber = 4;
  } else if (dataNew.getDate() > 28) {
    weekNumber = 5;
  }
  let month = mounthList[dataNew.getMonth()];
  return `${day}, ${weekNumber} неделя ${month} ${dataNew.getFullYear()} года`;
}

data.forEach(viewItems);

let mybutton = document.getElementById('myBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, Opera
}

mybutton.onclick = topFunction;

const mode = document.getElementById('mode');

function modeFunction() {
  const element = document.body;
  element.classList.toggle('dark-mode');
  const head = document.getElementById('header');
  head.classList.toggle('dark-mode');
  const links = document.getElementById('linkList');
  links.classList.toggle('dark-mode');
  console.log(links);
  if (element.classList.contains('dark-mode')) {
    mode.value = 'Светлая тема';
  } else {
    mode.value = 'Тёмная тема';
  }
}

mode.onclick = modeFunction;
