function showThoiGian() {
    const thoiGianHienTai = new Date();

    const gio = thoiGianHienTai.getHours();
    const phut = thoiGianHienTai.getMinutes();
    const giay = thoiGianHienTai.getSeconds();

    document.getElementById("thoiGian").innerHTML = gio + " : " + phut + " : " + giay;

    setTimeout(showThoiGian, 1000);
}