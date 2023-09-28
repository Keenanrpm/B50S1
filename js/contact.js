// console.log("Hello World");
// alert("Selamat Pagi");
// document.write("Heelo World");

// ---variable---
// akses untuk bisa data storing
// memungkinkan kita untuk menyimpan sebuah data

// var
// let
// const

// var bisa diubah valuenya dan bisa di deklarasi ulang
// var makanan = "Sate";
// var makanan = "Kecap";
// console.log(makanan);

// let bisa di ubah valuenya tetapi tidak bisa di deklarasi ulang
// let gelas = "Air";
// gelas = "Kopi";
// console.log(gelas);

// const sama sekali tidak bisa diubah value nya dan tidak bisa di deklarasi ulang
// const piring = "Nasi Goreng";
// console.log (piring);

// ---Tipe Data---
//let nama = "Keenan Raiputra Permana"; // string "string"
//let umur = 21 // number/integer (number)
//let isTua = true // boolean (true/false)

// nama saya keenan raiputra permana saya 21 tahun
// console.log("Nama Saya Keenan Raiputra Permana Saya 21 Tahun");

// console.log(`Nama Saya ${nama} Umur Saya ${umur} Tahun`); // cara 1 (menggunakan template string)
// console.log("Nama Saya", nama, "Saya", umur, "Tahun"); // cara 2 (menggunakan koma)
// console.log("Nama Saya " + nama + " Saya " + umur + " Tahun"); // cara 3 (menggunakan +)

// ---Operator---

// let x = 50;
// let y = "20";

//let result = x + y;
// console.log(result);

// let bilanganSatu = 50
// let bilanganDua = "20"

// console.log(bilanganSatu - bilanganDua);


// ---Condition---

//let nilai = 60
//if (nilai > 70){
//     console.log("A");
// } else if(nilai >= 60 ) {
//     console.log("B");
// } else {
//     console.log("C");
// }


// ---Function---
// Function adalah suatu rangkaian perintah atau code yang dijalankan ketika fungsinya di panggil

// function bilangan memiliki parameter
// dengan parameter yang dimiliki adalah:
// - bilangansatu
// - bilangandua
//function bilangan(bilanganSatu, bilanganDua){
//    result = bilanganSatu + bilanganDua  

//    console.log(result);
//}

//bilangan(20,30)

// function 
//function bilangan(bilanganSatu, bilanganDua){
//    let result = bilanganSatu + bilanganDua
    
//    return result
//}

//console.log(bilangan(30, 50));

// function nama dengan parameter
//function namaSaya(name) {
//    console.log(name);
//}

//namaSaya("Keenan");

function submitData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        return alert("nama wajib diisi")
    } else if (email == "") {
        return alert("email wajib diisi")
    } else if (phone == "") {
        return alert("phone wajib diisi")
    } else if (subject == "") {
        return alert("subject wajib diisi")
    } else if (message == "") {
        return alert("message wajib diisi")
    }
    

//    console.log(name);
//    console.log(email);
//    console.log(phone);
//    console.log(subject);
//    console.log(message);

let emailReceiver = "keenanpermana16@gmail.com"

let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${message}, silahkan kontak saya dengan email ${email}, telp ${phone}`
    a.target = '_blank'; //not open mail apps
    a.click();

    // https://mail.google.com/mail?view

let dataObject = {
    name,
    email,
    phone,
    subject,
    message
    }

    console.log(dataObject);
}