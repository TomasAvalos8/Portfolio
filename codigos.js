function Redes(url ){
    window.open(url);
}

function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
      .then(() => alert(`Copiado: ${texto}`))
      .catch(err => alert("Error al copiar"));
}
