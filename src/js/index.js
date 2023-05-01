const line = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']];

// let language = 'ru';

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

      if (line[i][j - 1] === ' ') {
        key.classList.add('alt_right');
      } else {
        key.classList.add('alt_left');
      }
    }

    if (line[i][j] === ' ') {
      key.classList.add('space_key');
    }

    if (line[i][j] === 'Win') {
      key.classList.add('win_key');
    }

    if (line[i][j] === '▲') {
      key.classList.add('arrow-up_key');
    }

    if (line[i][j] === '◄') {
      key.classList.add('arrow-left_key');
    }

    if (line[i][j] === '▼') {
      key.classList.add('arrow-down_key');
    }

    if (line[i][j] === '►') {
      key.classList.add('arrow-right_key');
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
const ctrlLeft = document.querySelector('.ctrl_left');
const ctrlRight = document.querySelector('.ctrl_right');
const altLeft = document.querySelector('.alt_left');
const altRight = document.querySelector('.alt_right');
const capsLock = document.querySelector('.caps_key');
const backspaceKey = document.querySelector('.backspace_key');
const delKey = document.querySelector('.del_key');
const tabKey = document.querySelector('.tab_key');
const enterKey = document.querySelector('.enter_key');
const arrowUp = document.querySelector('.arrow-up_key');
const arrowDown = document.querySelector('.arrow-down_key');
const arrowLeft = document.querySelector('.arrow-left_key');
const arrowRight = document.querySelector('.arrow-right_key');
const winKey = document.querySelector('.win_key');

for (let i = 0; i < keys.length; i += 1) {
  if (keys[i].className === 'keys') {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('upperCaseName', keys[i].innerText.toUpperCase());
  }

  if (keys[i].getAttribute('keyname') === '`') {
    keys[i].setAttribute('shift', '~');
  }

  if (keys[i].getAttribute('keyname') === '1') {
    keys[i].setAttribute('shift', '!');
  }

  if (keys[i].getAttribute('keyname') === '2') {
    keys[i].setAttribute('shift', '@');
  }

  if (keys[i].getAttribute('keyname') === '3') {
    keys[i].setAttribute('shift', '#');
  }

  if (keys[i].getAttribute('keyname') === '4') {
    keys[i].setAttribute('shift', '$');
  }

  if (keys[i].getAttribute('keyname') === '5') {
    keys[i].setAttribute('shift', '%');
  }

  if (keys[i].getAttribute('keyname') === '6') {
    keys[i].setAttribute('shift', '^');
  }

  if (keys[i].getAttribute('keyname') === '7') {
    keys[i].setAttribute('shift', '&');
  }

  if (keys[i].getAttribute('keyname') === '8') {
    keys[i].setAttribute('shift', '*');
  }

  if (keys[i].getAttribute('keyname') === '9') {
    keys[i].setAttribute('shift', '(');
  }

  if (keys[i].getAttribute('keyname') === '0') {
    keys[i].setAttribute('shift', ')');
  }

  if (keys[i].getAttribute('keyname') === '-') {
    keys[i].setAttribute('shift', '_');
  }

  if (keys[i].getAttribute('keyname') === '=') {
    keys[i].setAttribute('shift', '+');
  }

  if (keys[i].getAttribute('keyname') === '[') {
    keys[i].setAttribute('shift', '{');
  }

  if (keys[i].getAttribute('keyname') === ']') {
    keys[i].setAttribute('shift', '}');
  }

  if (keys[i].getAttribute('keyname') === '\\') {
    keys[i].setAttribute('shift', '|');
  }

  if (keys[i].getAttribute('keyname') === ';') {
    keys[i].setAttribute('shift', ':');
  }

  if (keys[i].getAttribute('keyname') === '\'') {
    keys[i].setAttribute('shift', '"');
  }

  if (keys[i].getAttribute('keyname') === ',') {
    keys[i].setAttribute('shift', '<');
  }

  if (keys[i].getAttribute('keyname') === '.') {
    keys[i].setAttribute('shift', '>');
  }

  if (keys[i].getAttribute('keyname') === '/') {
    keys[i].setAttribute('shift', '?');
  }
}

window.addEventListener('keydown', (e) => {
  console.log(e.code);
  for (let i = 0; i < keys.length; i += 1) {
    e.preventDefault();
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) {
      keys[i].classList.add('active');
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start)
      + keys[i].textContent
      + textarea.value.substring(end, textarea.value.length);
      textarea.setSelectionRange(start + 1, end + 1);

      textarea.focus();
    }
  }

  if (e.code === 'Delete') {
    delKey.classList.add('active');
  }

  if (e.code === 'ShiftLeft') {
    shiftLeft.classList.add('active');
  }

  if (e.code === 'ShiftRight') {
    shiftRight.classList.add('active');
  }

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    for (let j = 0; j < keys.length; j += 1) {
      if (keys[j].getAttribute('upperCaseName')) {
        keys[j].textContent = keys[j].getAttribute('upperCaseName');
      }

      if (keys[j].getAttribute('shift')) {
        keys[j].textContent = keys[j].getAttribute('shift');
      }
    }
  }

  if (e.code === 'ControlLeft') {
    ctrlLeft.classList.add('active');
  }

  if (e.code === 'ControlRight') {
    ctrlRight.classList.add('active');
  }

  if (e.code === 'AltLeft') {
    altLeft.classList.add('active');
  }

  if (e.code === 'AltRight') {
    altRight.classList.add('active');
  }

  if (e.code === 'MetaLeft') {
    winKey.classList.add('active');
  }

  if (e.code === 'CapsLock') {
    e.preventDefault();
    capsLock.click();
  }

  if (e.code === 'Enter') {
    enterKey.classList.add('active');
    e.preventDefault();
    textarea.value += '\n';
  }

  if (e.code === 'Space') {
    spaceKey.classList.add('active');
    textarea.value += ' ';
  }

  if (e.code === 'Backspace') {
    e.preventDefault();
    backspaceKey.classList.add('active');
    backspaceKey.click();
  }

  if (e.code === 'Delete') {
    e.preventDefault();
    delKey.classList.add('active');
    delKey.click();
  }

  if (e.code === 'Tab') {
    tabKey.classList.add('active');
    textarea.value += '    ';
  }

  if (e.code === 'ArrowUp') {
    arrowUp.classList.add('active');
    textarea.value += '▲';
  }

  if (e.code === 'ArrowDown') {
    arrowDown.classList.add('active');
    textarea.value += '▼';
  }

  if (e.code === 'ArrowLeft') {
    arrowLeft.classList.add('active');
    textarea.value += '◄';
  }

  if (e.code === 'ArrowRight') {
    arrowRight.classList.add('active');
    textarea.value += '►';
  }
});

for (let i = 0; i < keys.length; i += 1) {
  keys[i].addEventListener('click', () => {
    if (keys[i].className === 'keys' || keys[i].className === 'keys space_key' || keys[i].className === 'keys arrow-left_key'
    || keys[i].className === 'keys arrow-down_key' || keys[i].className === 'keys arrow-right_key'
    || keys[i].className === 'keys arrow-up_key') {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start)
      + keys[i].textContent
      + textarea.value.substring(end, textarea.value.length);
      textarea.setSelectionRange(start + 1, end + 1);

      textarea.focus();

      keys[i].classList.add('active');
      setTimeout(() => {
        keys[i].classList.remove('active');
      }, 200);
    }

    if (keys[i].classList.contains('backspace_key')) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start - 1)
      + textarea.value.substring(end, textarea.value.length);
      textarea.setSelectionRange(start - 1, end - 1);
      textarea.focus();
    }

    if (keys[i].classList.contains('del_key')) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start)
      + textarea.value.substring(end + 1, textarea.value.length);
      textarea.setSelectionRange(start, end);
      textarea.focus();
    }

    if (keys[i].classList.contains('enter_key')) {
      enterKey.classList.add('active');
      textarea.value += '\n';
      setTimeout(() => {
        keys[i].classList.remove('active');
      }, 200);
    }

    if (keys[i].classList.contains('caps_key')) {
      if (capsLock.classList.contains('active')) {
        capsLock.classList.remove('active');
        for (let j = 0; j < keys.length; j += 1) {
          if (keys[j].getAttribute('keyname')) {
            keys[j].textContent = keys[j].getAttribute('keyname');
          }
        }
      } else {
        capsLock.classList.add('active');
        for (let j = 0; j < keys.length; j += 1) {
          if (keys[j].getAttribute('upperCaseName')) {
            keys[j].textContent = keys[j].getAttribute('upperCaseName');
          }
        }
      }
    }
  });
}

for (let i = 0; i < keys.length; i += 1) {
  keys[i].addEventListener('mousedown', () => {
    if (keys[i].classList.contains('shift_right')) {
      shiftRight.classList.add('active');
      for (let j = 0; j < keys.length; j += 1) {
        if (keys[j].getAttribute('upperCaseName')) {
          keys[j].textContent = keys[j].getAttribute('upperCaseName');
        }
        if (keys[j].getAttribute('shift')) {
          keys[j].textContent = keys[j].getAttribute('shift');
        }
      }
    }

    if (keys[i].classList.contains('shift_left')) {
      shiftLeft.classList.add('active');
      for (let j = 0; j < keys.length; j += 1) {
        if (keys[j].getAttribute('upperCaseName')) {
          keys[j].textContent = keys[j].getAttribute('upperCaseName');
        }
        if (keys[j].getAttribute('shift')) {
          keys[j].textContent = keys[j].getAttribute('shift');
        }
      }
    }

    if (keys[i].classList.contains('ctrl_left')) {
      ctrlLeft.classList.add('active');
    }

    if (keys[i].classList.contains('ctrl_right')) {
      ctrlRight.classList.add('active');
    }

    if (keys[i].classList.contains('alt_left')) {
      altLeft.classList.add('active');
    }

    if (keys[i].classList.contains('alt_right')) {
      altRight.classList.add('active');
    }

    if (keys[i].classList.contains('win_key')) {
      winKey.classList.add('active');
    }
  });
}

for (let i = 0; i < keys.length; i += 1) {
  keys[i].addEventListener('mouseup', () => {
    if (keys[i].classList.contains('shift_right') || keys[i].classList.contains('shift_left')) {
      keys[i].classList.remove('active');
      for (let j = 0; j < keys.length; j += 1) {
        if (keys[j].getAttribute('upperCaseName')) {
          keys[j].textContent = keys[j].getAttribute('keyname');
        }
      }
    }

    if (keys[i].classList.contains('ctrl_left')) {
      ctrlLeft.classList.remove('active');
    }

    if (keys[i].classList.contains('ctrl_right')) {
      ctrlRight.classList.remove('active');
    }

    if (keys[i].classList.contains('alt_left')) {
      altLeft.classList.remove('active');
    }

    if (keys[i].classList.contains('alt_right')) {
      altRight.classList.remove('active');
    }

    if (keys[i].classList.contains('win_key')) {
      winKey.classList.remove('active');
    }
  });
}

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code === 'ShiftLeft') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.add('remove');
    }
    if (e.code === 'ShiftRight') {
      shiftRight.classList.remove('active');
      shiftRight.classList.add('remove');
    }

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      for (let j = 0; j < keys.length; j += 1) {
        if (keys[j].getAttribute('upperCaseName')) {
          keys[j].textContent = keys[j].getAttribute('keyname');
        }
      }
    }

    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.remove('active');
      ctrlLeft.classList.add('remove');
    }

    if (e.code === 'ControlRight') {
      ctrlRight.classList.remove('active');
      ctrlRight.classList.add('remove');
    }

    if (e.code === 'AltLeft') {
      altLeft.classList.remove('active');
      altLeft.classList.add('remove');
    }

    if (e.code === 'AltRight') {
      altRight.classList.remove('active');
      altRight.classList.add('remove');
    }

    if (e.code === 'MetaLeft') {
      winKey.classList.remove('active');
      winKey.classList.add('remove');
    }

    if (e.code === 'Enter') {
      enterKey.classList.remove('active');
      enterKey.classList.add('remove');
    }
    if (e.code === 'Backspace') {
      backspaceKey.classList.remove('active');
      backspaceKey.classList.add('remove');
    }
    if (e.code === 'Tab') {
      tabKey.classList.remove('active');
      tabKey.classList.add('remove');
    }

    if (e.code === 'ArrowUp') {
      arrowUp.classList.remove('active');
      arrowUp.classList.add('remove');
    }

    if (e.code === 'ArrowDown') {
      arrowDown.classList.remove('active');
      arrowDown.classList.add('remove');
    }

    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
      arrowLeft.classList.add('remove');
    }

    if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
      arrowRight.classList.add('remove');
    }

    if (e.code === 'Delete') {
      delKey.classList.remove('active');
      delKey.classList.add('remove');
    }
    setTimeout(() => {
      keys[i].classList.remove('remove');
    });
  }
});
