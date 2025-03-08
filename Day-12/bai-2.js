
// Bài 2 số chính phương
//
//    var y =121
//
//    for ( var g =1; g<= y**0.5; g++)
//    if ( g**2 ===y)
//          │
//          │
//          │   yes
//          ├────────────────►  z la so chinh phuong
//          │
//          │
//          │no
//          │
//          ▼
//
//      z khong phai la so chinh phuong
//
var y = 121 // check if x is square number ?
var z = 0
for (var g=1; g <= y**0.5; g++){
    if (g**2 === y){
        z = 1
    }
}
if (z === 0){
    console.log(y, ' la khong phai so chinh phuong')
}
else {
    console.log(y, ' la so chinh phuong')

}