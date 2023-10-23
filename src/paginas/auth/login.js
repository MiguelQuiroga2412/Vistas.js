import React from "react";
import { Link } from "react-router-dom";
const Login = () =>{
    return(
     <div className="login-box">
  <div className="login-logo">
    <Link to="#"><b>Iniciar  </b>Sesión</Link>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Bienvenido, ingrese sus credenciales </p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" name='email' id="email" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" name='password' id="password" placeholder="Contraseña" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        
        
          {/* /.col */}
         
   
      <div className="social-auth-links text-center mb-3">
        
        <button type='submit' className="btn btn-block btn-primary">
          <i className="" />  Ingresar
        </button>
        <Link to="#" className="btn btn-block btn-danger">
          <i className="" /> Crear Cuenta
        </Link>
      </div>
      </form>
      {/* /.social-auth-links */}
      
    </div>
    {/* /.login-card-body */}
  </div>
</div>

    );

}
export default Login;