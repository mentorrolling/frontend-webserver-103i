import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getUsuario } from "../helpers/apiUsuarios";

const ProductAdminScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const uid = JSON.parse(localStorage.getItem("uid")) || null;

  useEffect(() => {
    validar();
  }, []);

  const validar = () => {
    getUsuario(uid).then((response) => {
      setUser(response.usuario);
      setLoading(false);
    });
  };
  return (
    <>
      {loading ? (
        <h3>Cargando...</h3>
      ) : user.rol === "ADMIN_ROLE" ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Agregar Producto</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <form>
                <div className="mb-3">
                  <label>Nombre del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreProducto"
                    placeholder="Introduce el nombre del producto"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Categoría</label>
                  <select
                    className="form-select"
                    id="categoriaProducto"
                    required
                  >
                    <option value="" disabled selected>
                      Seleccione la categoría
                    </option>
                    <option value="cafe">Café</option>
                    <option value="te">Té</option>
                    <option value="reposteria">Repostería</option>
                    <option value="bebidas">Bebidas</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    id="precioProducto"
                    placeholder="Introduce el precio"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Descripción</label>
                  <textarea
                    className="form-control"
                    id="descripcionProducto"
                    rows="3"
                    placeholder="Descripción del producto"
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label>URL de Imagen</label>
                  <input
                    type="url"
                    className="form-control"
                    id="imgProducto"
                    placeholder="Introduce la URL de la imagen"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    id="stockProducto"
                    placeholder="Introduce la cantidad en stock"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Cargar Producto
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProductAdminScreen;
