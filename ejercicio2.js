//42 - 24 - 06 / <?

const a = 42
const b = 24
const c = 6

if (a > b &&  a > c) {
    console.log(a + " es el mayor")
} else {
    if (b > c) {
        console.log(b + " es el mayor")
    } else {
        console.log(c + " es el mayor")
    }
}

if (a < b && a < c) {
    console.log(a + " es el menor" )
} else {
    if (b < c) {
        console.log(b + " es el menor")
    } else {
        console.log( c + " es el menor")
    }
}