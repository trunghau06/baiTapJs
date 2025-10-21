// Phan stopwatch
const display = document.getElementById("display");
let thoiGian = null;
let thoiGianBD = 0;
let elapsedTime = 0;
let daChay = false;

function start() {
    if(!daChay) {
        thoiGianBD = Date.now() - elapsedTime;
        thoiGian = setInterval(capNhat, 10);
        daChay = true;
    }
}

function stop() {
    if(daChay) {
        clearInterval(thoiGian);
        elapsedTime = Date.now() - thoiGianBD;
        daChay = false;
    }
}

function reset() {
    clearInterval(thoiGian);
    thoiGianBD = 0;
    elapsedTime = 0
}

function capNhat() {
    const currentTime = Date.now();
    elapsedTime = currentTime - thoiGianBD;

    let gio  = Math.floor(elapsedTime / ( 1000 * 60 * 60));
    let phut = Math.floor(elapsedTime / ( 1000 * 60 ) % 60 );
    let giay = Math.floor(elapsedTime / 1000 % 60 );
    let miliGiay = Math.floor(elapsedTime % 1000 / 10);

    gio      = formatNumber(gio);
    phut     = formatNumber(phut);
    giay     = formatNumber(giay);
    miliGiay = formatNumber(miliGiay);

    display.innerHTML = gio + ":" + phut + ":" + giay + ":" + miliGiay;
}