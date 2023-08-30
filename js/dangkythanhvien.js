function validateForm() {
    var mssv = document.getElementById("mssv");
    var hoten = document.getElementById("hoten");
    var email = document.getElementById("email");
    var sothich = document.querySelectorAll('input[name="sothich"]:checked');
    var ghichu = document.getElementById("ghichu");
    var loi = "";
    // kiểm tra mã sv
    if (mssv.value == "") {
        mssv.classList.add("loi");
    }
    else {
        mssv.classList.remove("loi");
    }
    //Kiểm tra họ tên
    if (hoten.value == "") {
        hoten.classList.add("loi");
    }
    else {
        hoten.classList.remove("loi");
    }
    // kiểm tra  email
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (email.value.trim() === "") {
        email.classList.add("loi");
    }
    else if (email.value.trim() !== "" && !emailRegex.test(email.value.trim())) {
        email.classList.add("loi");
    }

    else {
        email.classList.remove("loi");

    }
    //Kiểm tra giới tính
    count = 0;
    var arr_gioitinh = document.getElementsByName("gioitinh");
    for (var i = 0; i < arr_gioitinh.length; i++) {
        if (arr_gioitinh[i].checked) count++;
    }
    if (count == 0) {
        document.getElementById("fs1").classList.add("loi");
    }
    else document.getElementById("fs1").classList.remove("loi");
    //Kiểm tra quốc tịch

    if (quoctich.value == "") {
        quoctich.classList.add("loi");
    }
    else quoctich.classList.remove("loi");

    // Kiểm tra ghi chú không quá 200 từ
    if (ghichu.value.length > 200) {
        ghichu.classList.add("loi");
        return false;
    } else {
        ghichu.classList.remove("loi");
    }
    // kiểm tra sở thích
    dem = 0;
    var arr_sothich = document.getElementsByName("sothich");
    for (var i = 0; i < arr_sothich.length; i++) {
        if (arr_sothich[i].checked) dem++;
    }
    if (dem == 0) {
        document.getElementById("fs2").classList.add("loi");
        return false;
    }
    else document.getElementById("fs2").classList.remove("loi");
}