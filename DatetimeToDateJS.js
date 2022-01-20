
function getDateFromDatetime(fecha){
    let new_fecha = new Date(fecha);
    let anho = new_fecha.getFullYear();
    let dia = new_fecha.getDate();
    let mes = new_fecha.getMonth()+1;
    let fecha_nueva = `${anho}-${(mes+''.length<2?'0'+mes:mes)}-${(dia+''.length<2?'0'+dia:dia)}`;
    return fecha_nueva;
}
