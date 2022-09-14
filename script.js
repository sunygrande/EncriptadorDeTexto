const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function encriptar(stringEncriptado){
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for( var i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }

    return stringEncriptado;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function desencriptar(stringEncriptado){
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for( var i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }

    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
    mensaje.style.backgroundImage = "none";
    
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    Swal.fire({
        title:'El texto ha sido copiado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        toast: true

        
    }
    )
    mensaje.style.backgroundImage = "";
}