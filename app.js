document.body.innerHTML = `<div class="container">
<div class="night_mode">
  <div class="toggle_circle"></div>
</div>

<div class="keyboard_wrapp">						
  <div class="keyboard_lights"></div>
  <div class="keyboard_keys">
    <div class="row">
      <div class="keys">\`</div>
      <div class="keys">1</div>
      <div class="keys">2</div>
      <div class="keys">3</div>
      <div class="keys">4</div>
      <div class="keys">5</div>
      <div class="keys">6</div>
      <div class="keys">7</div>
      <div class="keys">8</div>
      <div class="keys">9</div>
      <div class="keys">0</div>
      <div class="keys">-</div>
      <div class="keys">=</div>
      <div class="keys backspace_key">Backspace</div>
    </div>
    <div class="row">
      <div class="keys tab_key">Tab</div>
      <div class="keys">Q</div>
      <div class="keys">W</div>
      <div class="keys">E</div>
      <div class="keys">R</div>
      <div class="keys">T</div>
      <div class="keys">Y</div>
      <div class="keys">U</div>
      <div class="keys">I</div>
      <div class="keys">O</div>
      <div class="keys">P</div>
      <div class="keys">[</div>
      <div class="keys">]</div>
      <div class="keys slash_key">\</div>
    </div>
    <div class="row">
      <div class="keys caps_lock_key">Caps Lock</div>
      <div class="keys">A</div>
      <div class="keys">S</div>
      <div class="keys">D</div>
      <div class="keys">F</div>
      <div class="keys">G</div>
      <div class="keys">H</div>
      <div class="keys">J</div>
      <div class="keys">K</div>
      <div class="keys">L</div>
      <div class="keys">;</div>
      <div class="keys">'</div>
      <div class="keys enter_key">Enter</div>
    </div>
    <div class="row">
      <div class="keys shift_key shift_left">Shift</div>
      <div class="keys">Z</div>
      <div class="keys">X</div>
      <div class="keys">C</div>
      <div class="keys">V</div>
      <div class="keys">B</div>
      <div class="keys">N</div>
      <div class="keys">M</div>
      <div class="keys">,</div>
      <div class="keys">.</div>
      <div class="keys">/</div>
      <div class="keys shift_key shift_right">Shift</div>
    </div>
    <div class="row">
      <div class="keys ctrl_key left_ctrl">Ctrl</div>
      <div class="keys win_key">Win</div>
      <div class="keys alt_key left_alt">Alt</div>
      <div class="keys space_key"></div>
      <div class="keys alt_key right_alt">Alt</div>
      <div class="keys fn_key">Fn</div>
      <div class="keys ctrl_key right_ctrl">Ctrl</div>
    </div>
  </div>
</div>
<input class="text" type="text" >
</div>`;

let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');
let text_input = document.querySelector('.text');
let keyboard_lights = document.querySelector('.keyboard_lights');

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      shift_right.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shift_left.classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      caps_lock_key.classList.add('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code === 'ShiftLeft') {
      shift_right.classList.remove('active');
      shift_right.classList.remove('remove');
    }
    if (e.code === 'ShiftRight') {
      shift_left.classList.remove('active');
      shift_left.classList.remove('remove');
    }
    if (e.code === 'CapsLock') {
      caps_lock_key.classList.remove('active');
    }
    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }
});

night_mode.addEventListener('click', () => {
  toggle_circle.classList.toggle('active');
  body.classList.toggle('active');
  night_mode.classList.toggle('active');
  keyboard_wrapp.classList.toggle('active');
  text_input.classList.toggle('active');
  change_color.classList.toggle('active');
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle('keys_night');
  }
});

