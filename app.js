// Hometask
let ay1 = prompt("Ayin nomresini daxil edin")
let aylar1 = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
if (ay1 >= 1 && ay1 <= 12) {
    console.log(aylar1[ay1 - 1]);
} 

// hometask
let vaxt = prompt("Tarixi YYYY.MM.DD formatinda daxil edin");
let [il, ay, gun] = vaxt.split(".");
let aylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];

if (ay < 1 || ay > 12) {
    console.log("Ay 1-12 arasında olmalıdır.");
} else {
    let ad = aylar[Number(ay) - 1];
    console.log(gun, ad, il + "-ci il");
}