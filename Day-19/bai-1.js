//---------------------------Homework.1-------------------------//

const user = { firstName: "Nguyễn", lastName: "Văn A", age: 25 };
// Kết quả mong muốn: "Nguyễn Văn A"
/*


           user = { key1, key2}
                   │
                   │
                   │
                   │
                   ▼
destructuring  const {key1, key2} = user
                   │
                   │
                   │
                   │
                   │
                   ▼
  function    return key1 key2
 */
const getFullName = ()=>{
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

console.log(getFullName(user));



//----------------------Homework.2--------------------------//
const orders = [
    { item: "Bút", price: 5000, quantity: 3 },
    { item: "Vở", price: 12000, quantity: 2 },
    { item: "Thước", price: 8000, quantity: 1 }
];
/*

                              array.reduce(sum,alue)
                                         │
                                         │
                                         ▼
                        0    [ {item1},{item2},{item3}]
                        ───┬───────
                           │      ───┬──────
                           │         │    ───────┬─────
sum = 0   ◄────────────────┘         │           │
value = item1.price * item1.qtt      │           │
sum += value                         │           │
return sum                           │           │
                                     │           │
                                     │           │
                                     │           │
   value = item2.price * item2.qtt   │           │
   sum += value            ◄─────── ─┘           │
   return sum                                    │
                                                 │
                                                 │
                                                 │
              value = item3*price * item3.qtt    │
              sum += value                       │
              return sum             ◄───────────┘


 */
const calculateTotal = (arr) => arr.reduce((total, item) => {
    return total + item.price*item.quantity;
},0)



console.log(calculateTotal(orders)) // 46000
