function terbilang(angka) {
  let bilangan = new Array('', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas');
  let huruf = [' belas', ' puluh', ' ratus', ' ribu', ' juta', ' milyar', ' triliun'];
  let tbr;

  if (angka < 0) {
    tbr = 'tidak membuat minus';
  } else if (angka < 12) {
    tbr = ' ' + bilangan[angka];
  } else if (angka < 20) {
    tbr = terbilang(angka - 10) + huruf[0];
  } else if (angka < 100) {
    tbr = terbilang(Math.floor(angka / 10)) + huruf[1] + terbilang(angka % 10);
  } else if (angka < 200) {
    tbr = ' seratus' + terbilang(angka - 100);
  } else if (angka < 1000) {
    tbr = terbilang(Math.floor(angka / 100)) + huruf[2] + terbilang(angka % 100);
  } else if (angka < 2000) {
    tbr = ' seribu' + terbilang(angka - 1000);
  } else if (angka < 1000000) {
    tbr = terbilang(Math.floor(angka / 1000)) + huruf[3] + terbilang(angka % 1000);
  } else if (angka < 1000000000) {
    tbr = terbilang(Math.floor(angka / 1000000)) + huruf[4] + terbilang(angka % 1000000);
  } else if (angka < 1000000000000) {
    tbr = terbilang(Math.floor(angka / 1000000000)) + huruf[5] + terbilang(angka % 1000000000);
  } else if (angka < 1000000000000000) {
    tbr = terbilang(Math.floor(angka / 1000000000000)) + huruf[6] + terbilang(angka % 1000000000000);
  } else {
    tbr = 'diluar perhitungan';
  }

  return tbr;
}

function hasil(a, b) {
  document.getElementById(b).innerHTML = terbilang(a.value);
}
