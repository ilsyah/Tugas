function prima(angka) {
  if (angka < 2) return ' tidak dihitungkan';

  for (let i = 2; i < angka; i++) {
    if (angka % i == 0) {
      return angka + ' bukan bilangan prima';
    }
  }
  return angka + ' bilangan prima';
}

//console.log(prima(12));

let coba = document.querySelector('#para');
let inputangka = document.querySelector('#number');
let btnprima = document.querySelector('.tombol');

btnprima.addEventListener('click', function () {
  let hasil = Number(inputangka.value);
  coba.innerHTML = prima(hasil);
});
