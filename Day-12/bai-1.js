// Bài 1 số nguyên tố
//
//     var x = 123
//     var j = 0
//       │
//       │  if x ===2 || x ===3
//       │
//       ├─────────────────►  x la so nguyen to
//       │
//       │
//       │
//       │
//       │
//       │
//       │
//       │
//       ▼
//        for ( i = 2; i<=3 ; i ++)
//         if (x%i ===0)
//           │
//           │    yes
//           └───────────────►   j = j+1
//
//       if j > 0 ──────────►  x khong phai so nguyen to
//               │  yes
//               │
//               │
//               └──────────►  x la so nguyen to
//                  no
//
//
var x = 1231 // check if x is prime number?
var j = 0
if (x === 2 || x === 3) {
    console.log("x la so nguyen to")
} else {
    for (var i = 2; i <= 3; i++) {
        if (x % i === 0) {
            j = j + 1
        }
    }
    if (j > 0 ) {
        console.log(x, 'khong phai so nguyen to')
    }
    else {
        console.log(x," la so nguyen to")

    }
}
