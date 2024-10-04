const url = "http://localhost:3000/api/usuarios"; //Definimos la url de la API

const getUsuario = async (id) => {
  const resp = await fetch(url + "/" + id, {
    //petición fetch a la API con la ruta como definimos en el backend
    method: "GET", //indicamos el método
    headers: {
      "Content-type": "application/json; charset=UTF-8", //header básico
      "x-token": JSON.parse(localStorage.getItem("token")), // información del token que guardamos en localstorage
    },
  });

  const data = await resp.json(); //recibimos los datos obtenidos en formato json

  return data; //retornamos los datos obtenidos
};

export { getUsuario }; //exportamos la función
