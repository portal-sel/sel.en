function setup() {
    
    setName()

    docSelector = select('#selectDoc')

    for (let index = 1; index < 10; index++) {
        docSelector.option(`Documento ${index}`)
        
    }

    btn_subir = select('#btnSubir')
    btn_subir.attribute('disabled','')
    document.getElementById('txt_name').innerHTML = `SUPPLIER NAME ${localStorage.getItem('nombre')}`
    document.getElementById('txt_rfc').innerHTML = ` SUPPLIER ID ${localStorage.getItem('rfc')}`
    
    checkUser()
}
