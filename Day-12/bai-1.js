// Bài 1 số nguyên tố
//
//
//         var x = 1213
//         var nguyento = true
//               │
//               │
//               ▼
//          if x < 2
//               │
//               │
//               │   yes
//               ├─────────►  nguyento = false
//               │
//               │
//               │ no
//               │
//               ▼
//           if else x = 2
//               │
//               │ yes
//               ├────────►    nguyento = true
//               │
//               │ no
//               │
//               ▼
//           if else x%2 ===0
//               │
//               │ yes
//               ├────────►     nguyento = false
//               │ no
//               ▼
//           for (i = 3; i < sqrt(x), i++)
//              if( x%3 ===0)
//               │
//               │  yes
//               └───────────►  nguyento = false
//                              break
//
//         if nguyento = true  ┬─────►  x la so nguyen to
//                             │ yes
//                             │
//                             └─────►  x khong phai so nguyen to
//                               no
//
var x = 217 // check if x is prime number?
var nguyento = true
if (x < 2){
    nguyento = false
}
else if (x === 2){
    nguyento = true
}
else if ( x%2 ===  0){
    nguyento= false
}
else {
    for (var i = 3; i <= x ** 0.5; i = i + 2) {
        if (x % i === 0) {
            nguyento = false;
            break;
        }
    }
}
if (nguyento === true){
    console.log(x, "la so nguyen to")
}
else {
    console.log(x, "khong phai so nguyen to")
}

