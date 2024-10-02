import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../helpers/fetchApi";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    auth(formulario.email, formulario.password).then((response) => {
      if (response?.token) {
        localStorage.setItem("token", JSON.stringify(response.token));
        localStorage.setItem("uid", JSON.stringify(response.uid));

        navigate("/");
      } else {
        setMessage(response);
      }
    });
  };
  return (
    <div className="container">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="col-6">
          <div className="card img-card">
            <img
              src="https://thekitchencommunity.org/wp-content/uploads/2022/01/shutterstock_1049157986-1200x675.jpg"
              className="card-img-top"
              alt="coffee"
            />
            <div className="card-body">
              <h3 className="card-title mb-3">Iniciar Sesión</h3>
              <form onSubmit={login}>
                <div className="col mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formulario.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className="col">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={formulario.password}
                    onChange={handleChange}
                    name="password"
                  />
                </div>
                <div className="d-grid my-3">
                  <button className="btn btn-warning">Iniciar</button>
                </div>
              </form>
            </div>
            {message && (
              <div className="alert alert-danger mx-2" role="alert">
                {message.msg}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
