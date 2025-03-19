const companyA = [
    { id: 1, name: "Minh", age: 25 },
    { id: 2, name: "An", age: 30 },
    { id: 3, name: "Bình", age: 28 },
    { id: 4, name: "Dũng", age: 25 }
];

const companyB = [
    { id: 5, name: "Bình", age: 32 },
    { id: 6, name: "Chi", age: 28 },
    { id: 7, name: "An", age: 29 },
    { id: 8, name: "Dũng", age: 25 }
];

//Bai 1
/*

                           let companyA=[....]
                           let companyB=[...]
                                   │
                                   │
                                   │
                                   ▼
 create obj from companyA  ┌──────────────────────────────────────────┐
           │               │  let objA = {}                           │
           │               │                                          │
           │               │       │                                  │
           │               │       │                                  │
           └──────────────►│       │                                  │
                           │       ▼                                  │
                           │  for i = 0                               │
                           │      │                                   │
                           │      │                                   │
                           │      ▼                                   │
                           │   i < companyA.length                    │
                           │       │                                  │
                           │       │                                  │
                           │       ▼                                  │
                           │   objA[               ]=companyA[i]      │
                           │                                          │
                           │                                          │
                           │                                          │
                           │                                          │
                           └────────┬─────────────────────────────────┘
                           ┌────────────────────────────────────────────────┐
    find same name employee│    for i = 0                                   │
            │              │        │                                       │
            │              │        │                                       │
            │              │        │                                       │
            │              │        ▼                                       │
            │              │    i < companyB.length                         │
            └─────────────►│         │                                      │
                           │         │                                      │
                           │         │                                      │
                           │         ▼                                      │
                           │    objA[companyB[i].name] !== undifined   ?    │
                           │         │                    │                 │
                           │         │yes                 │ No              │
                           │         ▼                    ▼                 │
                           │     the same name          do nothing          │
                           │                                                │
                           └────────────────────────────────────────────────┘



 */
let objA1 ={}, c1 = 0
for (let i = 0; i < companyA.length ; i++) {
    objA1[companyA[i].name] = {id: companyA[i].id, age: companyA[i].age}
    c1 = c1 +1
}
console.log(objA1);
for (let j = 0; j < companyB.length; j++) {
    let similarName = companyB[j].name
    if (objA1[similarName] !== undefined) {
        console.log("Id",objA1[similarName].id, "name", similarName);
    }
    c1 = c1 +1
}
/*
cach 2:
1. creat a memberA arr
2. foreach to push name of each member in company into memberA array
3. checking by using if memberA.include(companyB.name)
 */
console.log(c1);

//Bai 2
// same with Bai 1, just change the key of objA from name =>> nam + age

// let objA2 = {}
// for (let i = 0; i < companyA.length; i++) {
//     objA2[companyA[i].name + companyA[i].age] = companyA[i].id;
// }
// console.log(objA2);
// for (let i = 0; i < companyB.length; i++) {
//     let similarNameAge = companyB[i].name + companyB[i].age;
//     if (objA2[similarNameAge] !== undefined) {
//         console.log( similarNameAge );
//     }
// }
//
const memberA = companyA.map( cpn =>{
    return `${cpn.name}-${cpn.age}`
})
companyB.forEach(cpn =>{
    if (memberA.includes(`${cpn.name}-${cpn.age}`))
        console.log(cpn.name)
})





