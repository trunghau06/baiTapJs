function showThoiGian() {
    let thoiGianHienTai = new Date();

    let gio  = thoiGianHienTai.getHours();
    let phut = thoiGianHienTai.getMinutes();
    let giay = thoiGianHienTai.getSeconds();

    gio  = formatNumber(gio);
    phut = formatNumber(phut);
    giay = formatNumber(giay);

    document.getElementById("thoiGian").innerHTML = gio + " : " + phut + " : " + giay;

    // setTimeout(showThoiGian, 1000);
}

function formatNumber(number) {
    return number < 10 ? "0" + number : String(number);
}

showThoiGian();

setInterval(showThoiGian, 1000);

const display = document.getElementById("display");
let thoiGian = null;
let 
