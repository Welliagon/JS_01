alert("Working")

let a = 4
let b = 4
let c = 3

if (a == b) {
    console.log("C'est égal")
}

if (c < b && a + c != 3) {
    console.log("Ok")
} else {
    console.log("raté")
}

switch(a) {
    case b :
        console.log("égal à b")
        break
    case c :
        console.log("égal à c")
        break
    default :
    console.log("égal à rien")
}