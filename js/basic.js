// DERS 1
//alert("Javascripte Hoş Geldiniz");
var a = 10;
console.log(a);

// DERS 2   
document.getElementById("h3").style.color = "red";
console.log(true);
console.log(false);
// Veri Tipleri Array
console.log(["ahmet","mehmet"])

// typeof verinin Türünü Öğrenme
console.log(typeof a);

// Hata Mesajları
console.warn("Bu bir uyarıdır");
console.error("Bu sayfa bulunamadı");
console.clear();

// DERS 3 Değişken Tanımlama İşlemleri
// Veri Tipleri , Number, String, Boolen, Null, Undefined

//  Değişken Oluşturma 

var b = 20; 

// Primitive 

var a = 10;  // Number olduğunu otomatik olarak algılar
console.log(typeof a )

// String

var name = "Cengiz";
console.log(typeof name)


// Boolean 

var a = true; // True yada False olarak kullanılır
console.log(typeof a );

// Null
var nul = null; 
console.log(typeof nul);

// Undefined
var und = undefined;
console.log(typeof und)


// Referance 
var numbers = [0,1,2,3,4,5];
numbers.push(6)

console.log(numbers)
console.log(typeof numbers);

var person = {
    name: "cengiz",
    age : "25"
}

console.log(person)
console.log(typeof person);

// Date - Referance 

var date = new Date();

// Function - Referance 

var merhaba = function() {
    console.log(merhaba)
}
// DERS 4
// ES6 LET CONST VAR
const name  = "Cengiz"; // Değiştiremeyiz, 
// const a; // Değeri burda girmeliyiz
// a = 6; // Hatalı const kullanmalıyız


let surname = "Bahar"; // Değiştirebiliriz
surname = "Kaba";
name = "Erva"; // Değiştiremeyiz



//  DERS 5
// Veri Tiplerini String'e Çevirme
let value;

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function(){console.log("stringe dönüştüm")});

value = (10).toString(); // Bu şekildede kullanılabilir.

// Veri Tiplerini Sayılara Çevirme
value = Number("123");
value = Number(null);
value = Number(undefined); // boş olduğu için numbere dönüşmez
value = Number("Hellow World"); // Bir sayı olmadığı için dönüşmez
value = Number(function(){console.log}); // Function Bir sayı olmadığı için dönüşmez
value = Number([1,2,3,4,5]); // Array Bir sayı olmadığı için dönüşmez

value = parseFloat("3,14"); // Çevirir
value = parseInt("3"); // Çevirir

// Otomatik Çevirme

const a = "Hello" + 34; // Stringe otomatik Çevirir


