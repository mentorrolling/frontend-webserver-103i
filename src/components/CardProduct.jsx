import { Link } from "react-router-dom";

const CardProduct = ({ producto }) => {
  return (
    <div className="col">
      <Link className="nav-link" to={`/producto/${producto._id}`}>
        <div className="card">
          <img
            src={producto.img}
            className="card-img-top"
            alt={producto.nombre}
          />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
