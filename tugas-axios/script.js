let tampil = document.querySelector('#tampil');
let no = 1;

// semua barang
function allproduk() {
  axios.get('https://dummyjson.com/products').then(function (response) {
    let produk = response.data.products;
    let out =
      '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Ttile</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th><th scope="col">UPDATE</th><th scope="col">Cart</th></tr></thead><tbody>';
    produk.forEach((el) => {
      out += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.title}</td>
                <td>${el.description}</td>
                <td>${el.price}</td>
                <td>${el.category}</td>
                <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="tampilproduk(${el.id})">UPDATE</button></td>
                <td><button class="btn btn-primary" onclick="keranjang(${el.id})">Cart</button></td>
            </tr>`;
    });
    out += '</tbody></table>';
    tampil.innerHTML = out;
  });
}

//produk 1
function produk1() {
  let id = document.getElementById('id').value;
  axios.get('https://dummyjson.com/products/' + id).then(function (response) {
    let produk = response.data;
    let out =
      '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Ttile</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th><th scope="col">UPDATE</th><th scope="col">Cart</th></tr></thead><tbody>';
    out += `<tr>
                    <th scope="row">${produk.id}</th>
                    <td>${produk.title}</td>
                    <td>${produk.description}</td>
                    <td>${produk.price}</td>
                    <td>${produk.category}</td>
                    <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="tampilproduk(${produk.id})">UPDATE</button></td>
                    <td><button class="btn btn-primary" onclick="keranjang(${produk.id})">Cart</button></td>
                </tr>`;
    out += '</tbody></table>';
    tampil.innerHTML = out;
  });
}

//kategori
function kategori() {
  let kategori = document.getElementById('select').value;
  axios.get('https://dummyjson.com/products/category/' + kategori).then(function (response) {
    let produk = response.data.products;
    let out =
      '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Ttile</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th><th scope="col">UPDATE</th><th scope="col">Cart</th></tr></thead><tbody>';
    produk.forEach((el) => {
      out += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.title}</td>
                <td>${el.description}</td>
                <td>${el.price}</td>
                <td>${el.category}</td>
                <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="tampilproduk(${el.id})">UPDATE</button></td>
                <td><button class="btn btn-primary" onclick="keranjang(${el.id})">Cart</button></td>
            </tr>`;
    });
    out += '</tbody></table>';
    tampil.innerHTML = out;
  });
}

//tambah produk
function addproduk() {
  let data = {
    produk: document.getElementById('produk').value,
    deskripsi: document.getElementById('deskripsi').value,
    kategori: document.getElementById('selected').value,
  };
  // console.log(data);
  axios.post('https://dummyjson.com/products/add', JSON.stringify(data)).then(function (response) {
    console.log(data);
  });
}

//tampil update produk
function tampilproduk(idproduk) {
  axios.get('https://dummyjson.com/products/' + idproduk).then(function (response) {
    document.querySelector('#ide').value = response.data.id;
    document.querySelector('#produki').value = response.data.title;
    document.querySelector('#deskripsie').value = response.data.description;
  });
}

//update produk
function ubahproduk() {
  let idproduk = document.getElementById('ide').value;
  let data = {
    id: document.getElementById('ide').value,
    produk: document.getElementById('produki').value,
    deskripsi: document.getElementById('deskripsie').value,
  };
  axios.put('https://dummyjson.com/products/' + idproduk, JSON.stringify(data)).then(function (response) {
    console.log(data);
  });
}

//hapus produk
function hapusproduk() {
  let id = document.getElementById('ie').value;
  axios.delete('https://dummyjson.com/products/' + id).then(function (response) {
    alert('id ' + id + ' sudah dihapus');
  });
}

//semua pelanggan
function allplgn() {
  axios.get('http://localhost:8080/json2/php/select.php').then(function (response) {
    let pelanggan = response.data;
    let out =
      '<table class="table mt-4"><thead><tr><th scope="col">No</th><th scope="col">Pelanggan</th><th scope="col">Alamat</th><th scope="col">Nomor Telepon</th><th scope="col">Update</th><th scope="col">Hapus</th><th scope="col">Beli</th></tr></thead><tbody>';
    pelanggan.forEach((el) => {
      // console.log(el);
      out += `<tr>
                    <th scope="row">${no++}</th>
                    <td>${el.pelanggan}</td>
                    <td>${el.alamat}</td>
                    <td>${el.telp}</td>
                    <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal7" onclick="tampilplgn(${el.idpelanggan})">UPDATE</button></td>
                    <td><button class="btn btn-danger" onclick="hapusplgn(${el.idpelanggan})">DEL</button></td>
                <td><button class="btn btn-primary" onclick="cartplgn(${el.idpelanggan})">Cart</button></td>
                </tr>`;
    });
    out += '</tbody></table>';
    tampil.innerHTML = out;
  });
}

//tambah pelanggan
function addplgn() {
  let data = {
    pelanggan: document.getElementById('pelanggan').value,
    alamat: document.getElementById('alamat').value,
    telp: document.getElementById('telp').value,
  };
  axios.post('http://localhost:8080/json2/php/insert.php', JSON.stringify(data)).then(function (response) {
    alert(response.data);
    allplgn();
  });
}

//tampil update pelanggan
function tampilplgn(idpelanggan) {
  let data = {
    idpelanggan: idpelanggan,
  };
  axios.post('http://localhost:8080/json2/php/selectupdate.php', JSON.stringify(data)).then(function (response) {
    document.getElementById('idey').value = response.data.idpelanggan;
    document.getElementById('pelanggani').value = response.data.pelanggan;
    document.getElementById('alamate').value = response.data.alamat;
    document.getElementById('telpe').value = response.data.telp;
  });
}

//mengupdate pelanggan
function ubahplgn() {
  let dataPelanggan = {
    idpelanggan: document.getElementById('idey').value,
    pelanggan: document.getElementById('pelanggani').value,
    alamat: document.getElementById('alamate').value,
    telp: document.getElementById('telpe').value,
  };
  axios.post('http://localhost:8080/json2/php/update.php', JSON.stringify(dataPelanggan)).then(function (response) {
    alert(response.data);
    allplgn();
  });
}

//menghapus pelanggan
function hapusplgn(idpelanggan) {
  let data = {
    idpelanggan: idpelanggan,
  };
  axios.post('http://localhost:8080/json2/php/delete.php', JSON.stringify(data)).then(function (response) {
    alert(response.data);
    allplgn();
  });
}

//cart (keranjang)
function keranjang(id) {
  axios.get('https://dummyjson.com/products/' + id).then(function (response) {
    let produk = response.data;
    let out = '<table class="table mt-4"><thead><tr><th scope="col">Id</th><th scope="col">Product</th><th scope="col">Harga</th><th>Jumlah</th><th scope="col">Yang Pesan Ini</th></tr></thead><tbody>';
    out += `<tr>
                <td>${produk.id}</td>
                <td>${produk.title}</td>
                <td>${produk.price}</td>
                <td><input type="number" class="form-control" id="jumlah" style="width:70px"></td>
                <td id="order"></td>
                <td><button class="btn btn-info" onclick="checkout('${produk.id}','${produk.price}','${produk.title}')">Checkout</button></td>
            </tr>`;
    out += '</tbody></table>';
    cart.innerHTML = out;
  });
}

//dipesan oleh pelanggan
let idplgn = '';
let nama = '';
let alamat = '';
function cartplgn(idpelanggan) {
  axios.get('http://localhost:8080/json2/php/selectwhere.php?id=' + idpelanggan).then(function (response) {
    let out = response.data.pelanggan;
    document.querySelector('#order').innerHTML = out;
    idplgn = response.data.idpelanggan;
    nama = response.data.pelanggan;
    alamat = response.data.alamat;
  });
}

//checkout
function checkout(idbarang, harga, barang) {
  let idorder = 3;
  let jumlah = document.getElementById('jumlah').value;
  let data = {
    idorder: idorder,
    idbarang: idbarang,
    jumlah: jumlah,
    harga: harga,
    barang: barang,
    idpelanggan: idplgn,
    pelanggan: nama,
    alamat: alamat,
  };
  axios.post('http://localhost:8080/json2/php/addtocart.php', JSON.stringify(data)).then(function (response) {
    alert('SUKSES');
    window.location.href = 'http://127.0.0.1:5500/';
  });
}
