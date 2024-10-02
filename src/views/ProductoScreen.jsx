import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../helpers/apiProductos";

const ProductoScreen = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProducto(id).then((response) => {
      setProducto(response.producto);
    });
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        {producto ? (
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={producto.img}
                    className="img-fluid rounded-start"
                    alt={producto.nombre}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Precio: ${producto.precio}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Stock: {producto.stock}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h3>Cargando...</h3>
        )}
      </div>
    </div>
  );
};

export default ProductoScreen;
