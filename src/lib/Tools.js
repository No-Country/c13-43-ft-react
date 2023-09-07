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

export function passwordsAreEqual(pOne, pTwo) {
  return pOne === pTwo;
}

//const passwordMatch = await bcrypt.compare(password, savedPassword);
