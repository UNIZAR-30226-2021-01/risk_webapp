/**
 * Clase con las constantes que se usan en la aplicación
 */
const constants = {
    VALUES: {nombre: "Óscar", correo: "780378@unizar.es", clave: "@#idfa98sfd9", logged:true, recibeCorreos: true},
    NULL_VALUES: {usuario: {nombre: "", correo: "", clave: "", recibeCorreos: true}, logged:false},
    COOKIE_USER: "user",
    OPTIONS_COOKIE: {expires: 7, sameSite: "lax"},
    BASE_SERVER_URL: "https://risk-servidor.herokuapp.com/",
}

export default constants;