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
let objA1 ={}
for (let i = 0; i < companyA.length ; i++) {
    objA1[companyA[i].name] = {id: companyA[i].id, age: companyA[i].age}
}
console.log(objA1);
for (let j = 0; j < companyB.length; j++) {
    let similarName = companyB[j].name
    if (objA1[similarName] !== undefined) {
        console.log("Id",objA1[similarName].id, "name", similarName);
    }
}



//Bai 2

let objA2 = {}
for (let i = 0; i < companyA.length; i++) {
    objA2[companyA[i].name + companyA[i].age] = companyA[i].id;
}
console.log(objA2);
for (let i = 0; i < companyB.length; i++) {
    let similarNameAge = companyB[i].name + companyB[i].age;
    if (objA2[similarNameAge] !== undefined) {
        console.log( similarNameAge );
    }
}








