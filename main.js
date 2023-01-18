document.querySelector('.tugma').addEventListener('click', function() {
  let ekran = document.querySelector('.ekran');
  console.log(typeof parseInt(ekran.value));
  ekran.value = parseInt(ekran.value) + 1;
});
document.querySelector('.nol').addEventListener('click', function() {
  document.querySelector('.ekran').value = 0;
})