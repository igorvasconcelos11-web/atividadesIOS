let sabor1 = 'morango'
let sabor2 = 'baunilha'
let sabor3 = 'chocolate'

let saborEscolhido = sabor3

if (saborEscolhido == sabor1) {
    console.log('chefe ! seu sorvete de', saborEscolhido, 'está pronto');
}
else if (saborEscolhido == sabor2) {
    console.log('chefe! seu sorvete de', saborEscolhido, 'está pronto');
}
else if (saborEscolhido == sabor3) {
    console.log('chefe! seu sorvete de', saborEscolhido,"está pronto");
}
else {
    console.log("sabor inválido");
}