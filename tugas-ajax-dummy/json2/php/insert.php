<?php

require_once "db.php";

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

$nama = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$telp = $dataPelanggan['telp'];


if (!empty($nama) and !empty($alamat) and !empty($telp)) {

    $sql = "INSERT INTO `tblpelanggan`(`idpelanggan`, `pelanggan`, `alamat`, `telp`) VALUES ('','$nama','$alamat','$telp')";
    if ($result = mysqli_query($koneksi, $sql)) {
        echo "Data Sudah disimpan !";
    } else {
        echo "Data Gagal disimpan !";
    }
}else {
    echo "Data Kosong";
}