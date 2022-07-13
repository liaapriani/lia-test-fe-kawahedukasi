const filterNumString = (str) =>
    str.match(/\d/g) ? Number(str.match(/\d/g).join("")) : str;

let input1 = "hallo jesika24 selamat datang!"
let input2 = "hallo anggun selamat datang!"
let input3 = "hallo ** selamat datang!"
let input4 = "hallo Mariage889120 ! selamat datang!"

[input1, input2, input3, input4]. forEach((str) => {
    if (typeof filterNumString(str) === "string") {
        console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${str}");
    } else {
        console.log(
            "Sistem kami menolak untuk inputan berisi angka ${filterNumString(str)}"
        );
    }
});
