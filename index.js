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
    var links = document.querySelectorAll('header a[href^="https://www.instagram.com"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var newWindow = window.open(link.href, '_blank');
            newWindow.opener = null;
        });
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//   var links = document.querySelectorAll(
//     'header a[href^="https://www.instagram.com"]'
//   );
//   links.forEach(function (link) {
//     link.addEventListener('click', function (event) {
//       event.preventDefault();
//       if (
//         link.href.includes('/ne_botan_glasses') ||
//         link.href.includes('/direct/t/100608811340939')
//       ) {
//         window.open(link.href, '_blank');
//       } else {
//         window.open(link.href, '_blank');
//       }
//     });
//   });
// });
