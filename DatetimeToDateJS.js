function retorna_fecha_ymd(fecha = new Date()){
    let new_fecha = new Date(fecha);
    let anho = new_fecha.getFullYear();
    let dia = new_fecha.getDate();
    let mes = new_fecha.getMonth()+1;
    let fecha_nueva = `${anho}-${((mes+'').length<2?'0'+mes:mes)}-${((dia+'').length<2?'0'+dia:dia)}`;
    return fecha_nueva;
}
//Just call the function e.g.
//..insert your variable in retorna_fecha_ymd($Var)
let new_date = retorna_fecha_ymd(yourDateVariable);
//in case wanna call default date just:
let new_date = retorna_fecha_ymd();
//.. have fun ;)
