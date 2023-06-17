const bcrypt = require("bcrypt");
const plainPassword = "holamundo";

bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }

  // El hash de la contraseña se encuentra en la variable 'hash'
  console.log("Contraseña encriptada:", hash);
});
