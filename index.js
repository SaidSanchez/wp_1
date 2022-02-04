const log4js = require("log4js");

let logger = log4js.getLogger();
const hola_lint="Hola";

logger.level="debug"; //o "production" ignora segun los niveles

logger.info("La aplicación inicio correctamente!.");
logger.warn("Cuidado falta la libreria x en el sistema");
logger.error("No se encontro la funcion enviar email");
logger.fatal("No se pudo iniciar la app");


function sumar(x,y){
  return x + y;
}
module.exports = sumar;
