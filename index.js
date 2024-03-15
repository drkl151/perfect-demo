// document.addEventListener('DOMContentLoaded', function () {
//   const intervalId = setInterval(function () {
//     const btn = document.querySelector('#YMK-icon-ui > div');

//     if (btn) {
//       clearInterval(intervalId);

//       const windowWidth = window.innerWidth;


//       const btnWidth = btn.offsetWidth;

//       const centerX = (windowWidth - btnWidth) / 2;

//       btn.style.left = `${centerX + 40}px`;
//       btn.style.bottom = `20%`;
//     }
//   }, 10);
// });

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="https://www.instagram.com"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(link.href, '_blank');
        });
    });
});

  