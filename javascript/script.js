document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    document.querySelector(".menu_moblie").addEventListener("click", function () {
      if (document.querySelector(".menu ul").style.display == 'flex') {
        document.querySelector(".menu ul").style.display = 'none';
      } else {
        document.querySelector(".menu ul").style.display = 'flex';
      }
    });
  };
});