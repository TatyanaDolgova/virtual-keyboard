const line = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl']];

const page = document.querySelector('.page');
const container = document.createElement('div');
container.classList.add('container');
page.appendChild(container);

const textarea = document.createElement('textarea');
textarea.classList.add('text');
container.appendChild(textarea);

const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard_wrapper');
container.appendChild(keyboardWrapper);

const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard_keys');
keyboardWrapper.appendChild(keyboardKeys);

for (let i = 0; i < line.length; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');
  keyboardKeys.appendChild(row);

  for (let j = 0; j < line[i].length; j += 1) {
    const key = document.createElement('div');
    key.classList.add('keys');

    if (line[i][j] === 'Backspace') {
      key.classList.add('backspace_key');
    }

    if (line[i][j] === 'Tab') {
      key.classList.add('tab_key');
    }

    if (line[i][j] === '\\') {
      key.classList.add('slash_key');
    }

    if (line[i][j] === 'DEL') {
      key.classList.add('del_key');
    }

    if (line[i][j] === 'Caps Lock') {
      key.classList.add('caps_key');
    }

    if (line[i][j] === 'ENTER') {
      key.classList.add('enter_key');
    }

    if (line[i][j] === 'Shift') {
      key.classList.add('shift_key');

      if (line[i][j - 1] === '▲') {
        key.classList.add('shift_right');
      } else {
        key.classList.add('shift_left');
      }
    }

    if (line[i][j] === 'Ctrl') {
      key.classList.add('ctrl_key');

      if (line[i][j - 1] === '►') {
        key.classList.add('ctrl_right');
      } else {
        key.classList.add('ctrl_left');
      }
    }

    if (line[i][j] === 'Alt') {
      key.classList.add('alt_key');

      if (line[i][j - 1] === '') {
        key.classList.add('alt_right');
      } else {
        key.classList.add('alt_left');
      }
    }

    if (line[i][j] === '') {
      key.classList.add('space_key');
    }

    key.textContent = line[i][j];
    row.appendChild(key);
  }
}

const descr = document.createElement('p');
descr.classList.add('descr');
descr.textContent = 'Клавиатура создана в операционной системе Windows';

const lang = document.createElement('p');
lang.classList.add('lang');
lang.textContent = 'Для переключения языка используйте: левыe ctrl + alt';

container.appendChild(descr);
container.appendChild(lang);

const keys = document.querySelectorAll('.keys');
const spaceKey = document.querySelector('.space_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const capsLock = document.querySelector('.caps_key');
const wrapper = document.querySelector('.keyboard_wrapper');
const backspaceKey = document.querySelector('.backspace_key');
const delKey = document.querySelector('.del_key');
const tabKey = document.querySelector('.tab_key');
const slashKey = document.querySelector('.slash_key');
const enterKey = document.querySelector('.enter_key');

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      capsLock.classList.toggle('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
      shiftRight.classList.add('remove');
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.add('remove');
    }
    setTimeout(() => {
      keys[i].classList.remove('remove');
    });
  }
});
