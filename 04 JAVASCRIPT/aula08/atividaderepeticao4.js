let n = [0,1]
let i = 2
while (i < 10) {
    n.push(n[i-1] + n[i-2])
    i++
}
console.log(n);