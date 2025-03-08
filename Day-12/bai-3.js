
// Bài 3 số hoàn hảo
//
//   var x = 28
//   var sum = 0
//
//   for ( var i =0; i <=x**0.5;i++)
//   if ( x%i ===0)
//        │
//        │   yes
//        └─────────►   sum = sum + i
//
//
//   if ( sum ===x)
//        │
//        │  yes
//        ├─────────► x la so hoan hao
//        │
//        │ no
//        │
//        ▼
//         x khong la so hoan hao
//
var x = 28 // check if x is perfect number?
var sum = 0
for (var i = 1; i <= x/2; i ++){
    if (x%i ===0){
        sum= sum + i
    }
}
if (sum === x){
    console.log( x, 'la so hoan hao')
}
else{
    console.log( x, 'khong phai so hoan hao')
}