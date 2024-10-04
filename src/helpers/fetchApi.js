const url = "http://localhost:3000/api/"; //Definimos la url de la API

// const url ="https://webserver-103i.onrender.com/api/"

const auth = async (email, password) => {
  const resp = await fetch(url + "auth/login", {
    //petición fetch a la API con la ruta como definimos en el backend
    method: "POST", //indicamos el método
    body: JSON.stringify({ email, password }), //En body enviamos los datos de correo y password como objeto
    headers: {
      "Content-type": "application/json; charset=UTF-8", //header básico
    },
  });

  const data = await resp.json(); //recibimos los datos obtenidos en formato json

  return data; //retornamos los datos obtenidos
};

export { auth }; //exportamos la función
