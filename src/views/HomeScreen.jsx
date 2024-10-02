import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductos } from "../helpers/apiProductos";
import CardProduct from "../components/CardProduct";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    traerProductos();
  }, []);

  const traerProductos = () => {
    getProductos().then((response) => {
      if (response?.productos) {
        setProductos(response.productos);
        setLoading(false);
      } else {
        localStorage.removeItem("token");
        navigate("/login");
      }
    });
  };

  return (
    <>
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-md-10 offset-md-1">
              <h1>Bienvenido 😉</h1>
              <p>
                Entra en un mundo lleno de aromas irresistibles y sabores que
                despiertan los sentidos. En RollingCoffee, cada taza es una
                invitación a disfrutar del momento, desde nuestro café recién
                molido hasta las deliciosas opciones de repostería artesanal.
              </p>
              <p>
                Ya sea que busques tu espresso perfecto, un frappé refrescante o
                una deliciosa merienda, estamos aquí para ofrecerte lo mejor.
                Relájate, conéctate y déjate llevar por la experiencia.
              </p>
              <p>¡Gracias por elegirnos!</p>
            </div>
          </div>
          <div className="row my-4 row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
            {productos.map((producto) => (
              <CardProduct key={producto._id} producto={producto} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
