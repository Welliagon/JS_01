alert("Working")

let a = "Jean"
let b = "Paul"
let result = false

function checkName(name1, name2) {
    if (name1 == name2) {
        result = true
    }
}

checkName(a, b)
console.log(result)