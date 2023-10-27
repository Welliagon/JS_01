alert("Working")

let student = {
    names : 'Vi',
    favoriteFood : 'cupcake',
    city : 'Zone',
}

let result = 0

let values = Object.values(student)
values.forEach(function (value) {
    result += value.length
})
console.log(result)

if (result % 2 == 0) {
    console.log("pair")
} else {
    console.log("impair")
}