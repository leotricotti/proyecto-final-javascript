//Saldo inicial
let saldo = 100000;

function convertir(dinero){
  return dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(saldo);
}

//Menu inicio
let seleccion = prompt ("Seleccione la operación deseada: \n1) Consulta de saldo \n2) Depósitos \n3) Extracciones \n4) Salir");

//Funcion nueva operacion
function continuar() {
  let continuo = prompt("Desea resalizar otra operacion? S/N: ").toUpperCase();
  if (continuo == "S") {
    seleccion = prompt ("Seleccione la operación deseada: \n1) Consulta de saldo \n2) Depósitos \n3) Extracciones \n4) Salir");

  } else if (continuo == "N") {
    seleccion = "4";
  } else {
    alert("Elija una opción valida");
    seleccion = prompt ("Seleccione la operación deseada: \n1) Consulta de saldo \n2) Depósitos \n3) Extracciones \n4) Salir");
  }
}

//Función para consultar el saldo
const consultar = () => {
  return alert("Su saldo es: " + convertir(saldo));
};

//Función para realizar depositos
function depositar() {
  let deposito = parseFloat(prompt("Ingrese el monto que desea depósitar: "));
  saldo = saldo + deposito;
  return alert("Operación realizada con exíto. \nSu saldo es: " + convertir(saldo));
}

//Función para realizar extracciones
function extraer() {
  let extraccion = parseInt(prompt("Ingrese el monto que desea extraer: "));
  saldo = saldo - extraccion;
  return alert("Operación realizada con exíto. \nSu saldo es: " + convertir(saldo));
}

//Función para salir del sistema
function salir() {
  return alert("Gracias por utilizar nuestros servicios.");
}

//Programa principal
while (seleccion != "4") {
  switch (seleccion) {
    case "1":
      consultar();
      break;

    case "2":
      depositar();
      break;

    case "3":
      extraer();
      break;

    case "continuo":
      continuar();
      break;

    default:
      alert("Opcion inválida. Vuelva a intentarlo.");
      break;
  }
  continuar();
}

salir();
