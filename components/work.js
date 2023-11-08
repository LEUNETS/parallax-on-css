// const theme = document.getElementsByClassName('dark__theme')

// theme.onclick = () => {
// background.style {.dark__theme}
// }
// console.log(theme)

// Получаем элементы
const themeSlider = document.getElementById('themeSlider');
const imageDisplay = document.getElementById('imageDisplay');

themeSlider.addEventListener('input', function() {
  const themeValue = parseInt(themeSlider.value);
  if (themeValue === 0) {
    imageDisplay.style.backgroundImage = "url('/img/saloon.jpg')";
  } else {
    imageDisplay.style.backgroundImage = "url('/img/saloondark.jpg')";
  }
});


const mouseCheck = document.getElementById('mouseCheck');

mouseCheck.addEventListener('click', function(event) {
    console.log('Кнопка была нажата');
});



function toggleDropdown(num) {
    var dropdown = document.getElementById('dropdown' + num);
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  }
  