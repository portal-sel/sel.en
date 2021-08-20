function setup() {
    
    setName()

    btn_subir = select('#btnSubir')
    btn_subir.attribute('disabled','')
    document.getElementById('txt_name').innerHTML = `SUPPLIER NAME ${localStorage.getItem('nombre')}`
    document.getElementById('txt_rfc').innerHTML = ` SUPPLIER ID ${localStorage.getItem('rfc')}`
    
    checkUser()
}
