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
let thoiGianBD = 0;
let elapsedTime = 0;
let daChay = 0;

function start() {
    if(!daChay) {
        thoiGianBD = Date.now - elapsedTime;
        thoiGian = setInterval(capNhat, 10);
        daChay = true;
    }
}

function capNhat() {
    const currentTime = Date.now;
    elapsedTime = currentTime - thoiGianBD;

    let gio  = Math.floor(elapsedTime / ( 1000 * 60 * 60));
    let phut = Math.floor(elapsedTime / ( 1000 * 60 ) % 60 );
    let giay = Math.floor(elapsedTime / 1000 % 60 );
    let miliGiay = Math.floor(elapsedTime % 1000 / 10);

    display.innerHTML = gio + ":
}