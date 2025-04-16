let saborEscolhido = 'flocos'


switch (saborEscolhido) {
    case 'chocolate': 
        console.log('seu sorvete sabor',saborEscolhido,'está pronto');
        break;
    case 'morango':
        console.log('seu sorvete sabor',saborEscolhido,'está pronto');
        break;
    case 'baunilha':
        console.log('seu sorvete sabor',saborEscolhido,'está pronto');
        break;
    default:
        console.log('Desculpe não temos o sabor',saborEscolhido, 'no cardápio');
        break;
}