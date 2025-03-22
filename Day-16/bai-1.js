const customers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Green", email: "charlie@example.com" },
];

const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 },
    { id: 104, name: "Smartwatch", price: 300 },
    { id: 105, name: "Headphones", price: 150 },
];

const orders = [
    { id: 1001, customerId: 1, items: [{ productId: 101, quantity: 2 }, { productId: 102, quantity: 1 }] },
    { id: 1002, customerId: 2, items: [{ productId: 102, quantity: 1 }, { productId: 103, quantity: 3 }] },
    { id: 1003, customerId: 3, items: [{ productId: 104, quantity: 5 }, { productId: 105, quantity: 2 }] },
    { id: 1004, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 103, quantity: 2 }] },
    { id: 1005, customerId: 5, items: [{ productId: 105, quantity: 10 }] },
    { id: 1006, customerId: 1, items: [{ productId: 101, quantity: 1 }, { productId: 105, quantity: 3 }] },
    { id: 1007, customerId: 2, items: [{ productId: 104, quantity: 2 }, { productId: 103, quantity: 1 }] },
    { id: 1008, customerId: 3, items: [{ productId: 102, quantity: 2 }] },
    { id: 1009, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 102, quantity: 1 }] },
    { id: 1010, customerId: 5, items: [{ productId: 103, quantity: 4 }, { productId: 104, quantity: 3 }] },
];
//create customer Object
const customersObj = {}
customers.forEach(customer => {
    customersObj[customer.id] = {id : customer.id, name : customer.name, order : {}, totalSpent : 0}
})
// create product Object
const productsObj = {}
products.forEach(product => {
    productsObj[product.id] ={name: product.name, price : product.price}
})
// calculate totalSpent for each order
orders.forEach(order => {
    const customerId = order.customerId
    order.items.forEach(item => {
        const product = productsObj[item.productId]
        const productSpent = product.price * item.quantity;
// check if this product available on this customer
        if (!customersObj[customerId].order[item.productId]) {
            customersObj[customerId].order[item.productId] = {
                name: product.name,
                quantity: 0,
                productSpent: 0
             }
            }
// count for the quantity and accumulate the total spent
        customersObj[customerId].order[item.productId].quantity += item.quantity;
        customersObj[customerId].order[item.productId].productSpent += productSpent;
        customersObj[customerId].totalSpent += productSpent;
    })


})
const result = Object.values(customersObj).sort((a, b) => b.totalSpent - a.totalSpent)
result.forEach(customer =>{
    customer.order = Object.values(customer.order).sort((a, b) => b.productSpent - a.productSpent)
})
console.log(result)
