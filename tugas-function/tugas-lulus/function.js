function lulus() {
  let nilai = document.getElementById('angka').value;
  if (nilai > 0 && nilai < 101) {
    hasil = 'anda lulus';
    if (nilai < 60) {
      hasil = 'tidak lulus';
    }
  } else {
    alert('nilai salah');
  }
  alert(hasil);
}

//tidak dengan form
// function lulus(nilai) {
//   let hasil = 'nilai salah';
//   if (nilai > 0 && nilai < 101) {
//     hasil = 'anda lulus';
//     if (nilai < 60) {
//       hasil = 'tidak lulus';
//     }
//   }
//   console.log(hasil);
// }

// lulus();
