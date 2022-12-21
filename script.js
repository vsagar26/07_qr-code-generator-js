let qrcode = document.querySelector("img");
let text = document.querySelector("textarea");
let btn = document.querySelector("button");

btn.addEventListener("click", generateQr);

function generateQr(){
    let size = "200x200";
    let data = text.value;
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/"
    let url = `${baseURL}?data=${data}&size=${size}`;
    qrcode.src = url;
    console.log("QR Code Generated")
}



