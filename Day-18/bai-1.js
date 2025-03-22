const cart = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
];
/*


       const cart = [ ..... ]
             │
             │
             │
             │
             │
             │
             ▼
       removeItem Id 1
             │
             │
             │
             │
             │
             ▼                  no
        Id 1 exist in cart ? ─────────► console.log('This item not in your cart')
             │
             │
             │ yes
             │
             │
             ▼
       setTimeout to delete itemId 1
             │
             │
             ▼
        console.log(cart)

 */



const removeItemAfterDelay = (productId, delay) => {
    const removedIdx = cart.findIndex((product) => product.id === productId)
    if (removedIdx === -1) {
        console.log('Product not found')
    }
    else {
    setTimeout(() => {
        const removedProductName = cart[removedIdx].name;
        cart.splice(removedIdx, 1)
        console.log(`Product ${removedProductName} removed`)
        console.log("Cart Updated: ", cart)
    }, delay)

}}

removeItemAfterDelay(3, 1000)