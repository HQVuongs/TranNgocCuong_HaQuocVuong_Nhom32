<?php
if (isset($_POST['btndangky']) && $_POST['btndangky'] === 'nut') {
    $mssv = $_POST['mssv'];
    $email = $_POST['email'];

    // Kết nối vào cơ sở dữ liệu
    $conn = new PDO("mysql:host=localhost;dbname=ps distribution;charset=utf8", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Kiểm tra sự tồn tại của MSSV hoặc email
    $sql_check = "SELECT COUNT(*) FROM user WHERE mssv = ? OR email = ?";
    $st_check = $conn->prepare($sql_check);
    $st_check->execute([$mssv, $email]);
    $count = $st_check->fetchColumn();
    if ($count > 0) {
        echo "MSSV hoặc Email đã tồn tại trong cơ sở dữ liệu.";
    } else {
        // Tiến hành chèn dữ liệu vào cơ sở dữ liệu
        $hoten = $_POST['hoten'];
        $gioitinh = $_POST['gioitinh'];
        $sothich = $_POST['sothich'];
        $quoctich = $_POST['quoctich'];
        $ghichu = $_POST['ghichu'];

        $sql_insert = "INSERT INTO user (mssv, hoten, email, gioitinh, sothich, quoctich, ghichu) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $st_insert = $conn->prepare($sql_insert);
        $st_insert->execute([$mssv, $hoten, $email, $gioitinh, $sothich, $quoctich, $ghichu]);
        echo "Đã chèn user thành công.";
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Đăng Ký</title>
    <link rel="stylesheet" href="./css/dangkythanhvien.css">
    <script src="./js/dangkythanhvien.js"></script>
</head>

<body>
    <div class="container">
        <h2>ĐĂNG KÝ THÀNH VIÊN</h2>
        <form onsubmit="return validateForm()" id="form1" method="post">
            <label for="mssv">Mã sinh viên:</label>
            <br>
            <input class="txt" type="text" id="mssv" name="mssv" placeholder="không được để trống" required>
            <br>
            <label for="hoten">Họ tên:</label>
            <br>
            <input class="txt" type="text" id="hoten" name="hoten" placeholder="không được để trống" required>
            <br>
            <label for="email">Email:</label>
            <br>
            <input class="txt" type="email" id="email" name="email" placeholder="nhập đúng định dạng. ví dụ:caigido@gmail.com" required>
            <br>
            <label>Giới tính:</label>
            <br>
            <fieldset id="fs1">
                <input type="radio" id="nam" name="gioitinh" value="Nam" required>
                <label for="nam">Nam</label>
                <input type="radio" id="nu" name="gioitinh" value="Nữ" required>
                <label for="nu">Nữ</label>
                <br>
            </fieldset>
            <label for="sothich">Sở thích:</label>
            <br>
            <fieldset id="fs2">
                <input type="checkbox" id="thethao" name="sothich" value="Thể thao">
                <label for="thethao">Thể thao</label>
                <input type="checkbox" id="amnhac" name="sothich" value="Âm nhạc">
                <label for="amnhac">Âm nhạc</label>
                <input type="checkbox" id="dulich" name="sothich" value="Du lịch">
                <label for="dulich">Du lịch</label>
                <br>
            </fieldset>
            <label for="quoctich">Quốc tịch:</label>
            <br>
            <select class="txt" id="quoctich" name="quoctich" required>
                <option value="">Chọn quốc tịch</option>
                <option value="Việt Nam">Việt Nam</option>
                <option value="Nhật Bản">Nhật Bản</option>
                <option value="Hàn Quốc">Hàn Quốc</option>
            </select>
            <br>
            <label for="ghichu">Ghi chú:</label>
            <br>
            <textarea class="txt" id="ghichu" name="ghichu" maxlength="200" placeholder="Nhập không quá 200 ký tự"></textarea>
            <br>
            <button type="submit" onclick="validateForm()" name="btndangky" value="nut"><b>Đăng ký</b></button>
        </form>
    </div>
</body>

</html>