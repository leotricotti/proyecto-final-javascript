//Ver últimos movimientos
function Movement(fecha, hora, operacion, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Base datos movimientos
const movement1 = new Movement(
  "01/07/2022",
  "15:55",
  "Depósito",
  "$ 15.000.00",
  "$ 125.343.00"
);
const movement2 = new Movement(
  "03/07/2022",
  "12:34",
  "Extracción",
  "$ 30.000.00",
  "$ 95.343.00"
);
const movement3 = new Movement(
  "05/07/2022",
  "12:18",
  "Depósito",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Consultar pagos
function Payments(fecha, hora, operacion, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Pagos
const pago1 = new Payments(
  "08/07/2022",
  "11:25",
  "Edelap",
  "$ 2.572.27",
  "$ 130.253.65"
);

const pago2 = new Payments(
  "10/07/2022",
  "10:33",
  "Camuzzi Gas Pampeana",
  "$ 5.362.87",
  "$ 127.156.65"
);

const pago3 = new Payments(
  "13/07/2022",
  "08:55",
  "ARBA Inmobiliario",
  "$ 1.942.63",
  "$ 122.165.36"
);

//Consultar Transferencias
function Transfer(fecha, hora, operacion, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Base datos transferencias
const transfer1 = new Transfer(
  "14/07/2022",
  "15:55",
  "Trans. Recibida",
  "$ 15.000.00",
  "$ 125.343.00"
);
const transfer2 = new Transfer(
  "17/07/2022",
  "12:34",
  "Trans. Enviada ",
  "$ 30.000.00",
  "$ 95.343.00"
);
const transfer3 = new Transfer(
  "20/07/2022",
  "12:18",
  "Trans. Recibida",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Creacion array pagos
const pagoServ = [];
pagoServ.push(pago1, pago2, pago3);

//Creacion array transfererencias
const transferido = [];
transferido.push(transfer1, transfer2, transfer3);

//Creación array movimientos
const operaciones = pagoServ.concat(transferido);
operaciones.unshift(movement1, movement2, movement3);

//Saldo inicial
let saldo = 100000;

function convertir(dinero){
  return dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(saldo);
}

//Menu inicio
let seleccion = prompt ("Seleccione la operación deseada: \n1) Consultas \n2) Depósitos \n3) Extracciones \n4) Salir");

//Funcion nueva operacion
function continuar() {
  let continuo = prompt("Desea resalizar otra operacion? S/N: ").toUpperCase();
  if (continuo == "S") {
    seleccion = prompt ("Seleccione la operación deseada: \n1) Consulta de saldo \n2) Depósitos \n3) Extracciones \n4) Salir");
  } else if (continuo == "N") {
    seleccion = "4";
  } else {
    alert("Elija una opción valida");
    seleccion = prompt ("Seleccione la operación deseada: \n1) Consultas \n2) Depósitos \n3) Extracciones \n4) Salir");
  }
}

//Función para consultas
function consultar (op) {
  op = prompt("Seleccione la operación deseada: \n1) Consulta de saldo \n2) Ultimos movimientos \n3) Menu Principal");
  if(op == "1"){   
    return alert("Su saldo es: " + convertir(saldo));
  }else if (op == "2"){
    console.table(operaciones);
  }else{
    alert("Elija una opcion valida.")
    op = prompt("Seleccione la operación deseada: \n1) Consulta de saldo \n2) Ultimos movimientos \n4) Menu Principal");
  }
};

//Función para realizar depositos
function depositar(op) {
  op = prompt("Seleccione la operación deseada: \n1) Cta. Cte. en pesos \n2) Caja de ahorro en pesos \n3) Menu Principal");
  if(op == "1"){   
    let deposito = parseFloat(prompt("Ingrese el monto que desea depósitar: "));
    saldo = saldo + deposito;
    return alert("Operación realizada con exíto. \nSu saldo es: " + convertir(saldo));
  }else if (op == "2"){
    let deposito = parseFloat(prompt("Ingrese el monto que desea depósitar: "));
    saldo = saldo + deposito;
    return alert("Operación realizada con exíto. \nSu saldo es: " + convertir(saldo));
  }else{
    alert("Elija una opcion valida.")
    op = prompt("Seleccione la operación deseada: \n1) Cta. Cte. en pesos \n2) Caja de ahorro en pesos \n3) Menu Principal");
  }
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
