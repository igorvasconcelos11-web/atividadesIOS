for(numerosprimos = 2; numerosprimos <= 20; numerosprimos ++){
    éprimo = true
    for (i = 2; i < numerosprimos; i++) {
        if (numerosprimos % i == 0) {
            éprimo = false
            break;
        }
        
    }
    if(éprimo){
    console.log(numerosprimos);
    }
}