function showThoiGian() {
    const thoiGianHienTai = new Date();

    const gio = thoiGianHienTai.getHours();
    const phut = thoiGianHienTai.getMinutes();
    const giay = thoiGianHienTai.getSeconds();

    document.getElementById("thoiGian").innerHT = `${gio} : ${phut} : ${giay}`;
}