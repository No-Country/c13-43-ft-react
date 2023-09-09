//Pendiente

import bcrypt from "bcrypt";
export async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}
export function generarNumeroAleatorio() {
  var numero = Math.floor(Math.random() * 90000) + 10000;
  return numero;
}

export function compararFechas(fecha1, fecha2) {
  // Crear objetos Date a partir de las cadenas de fecha
  var date1 = new Date(fecha1);
  var date2 = new Date(fecha2);

  // Comparar las fechas
  return date1 > date2;
}

export function passwordsAreEqual(pOne, pTwo) {
  return pOne === pTwo;
}

//const passwordMatch = await bcrypt.compare(password, savedPassword);
