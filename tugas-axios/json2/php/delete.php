<?php 

require_once "db.php";

$data = stripslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);

$idpelanggan = $idpelanggan['idpelanggan'];

if (!empty($idpelanggan)) {
    $sql = "DELETE FROM `tblpelanggan` WHERE `idpelanggan`=$idpelanggan";
    if ($result = mysqli_query($koneksi,$sql)) {
        echo "Data Sudah dihapus";
    }else {
        echo "Data Gagal dihapus";
    }
}else {
    echo "Data Belum Dipilih";
}

?>