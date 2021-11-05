import React, { useState, useEffect} from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Home = () =>{

    const navigate = useNavigate();//CREADO PARA REDIRECCIONAR ENTRE CONTAINERS

    //HOOKS
    const [credenciales, setCredenciales] = useState({correo:"", clave:""});
    const [mensajeError, setmensajeError] = useState("");
    

    //HANDLERS
    const introducirCredenciales = (e) =>{
        setCredenciales({...credenciales, [e.target.name]: e.target.value})
    }

    const loguear = async () => {

        let body = {
            correo: credenciales.correo,
            clave: credenciales.clave
        };

        let res = await axios.post("https://aramossanchez-videoclub-api.herokuapp.com/usuarios/login", body);
        
        try {
            localStorage.setItem("datosLogin", JSON.stringify(res.data));
            navigate("/profile");
            
        } catch (error) {
            setmensajeError(error);
        }
    }

    return(
        <div id="container-home">
            <div id="mensaje-bienvenida">
                <h1>¡BIENVENIDO!</h1>
                <p>Tienes a tu disposición un catálogo GIGANTE de películas para alquilar. Navega por nuestra web,
                elije la película que te apetezca, haz el alquiler y espera tranquilamente en tu casa hasta que te la llevemos.
                Si ya tienes cuenta con nosotros, solo tienes que loguearte. Si quieres tener una cuenta con nosotros, contacta
                en la sección correspondiente y te lo gestionaremos a la mayor brevedad posible.</p>
            </div>
            <div id="cuadro-login">
                <h1>Login</h1>
                <div id="container-input">
                    <input autocomplete="off" type="email" name="correo" id="correo" title="correo" placeholder="correo@correo.com" onChange={(e)=>introducirCredenciales(e)}/>
                    <input autocomplete="off" type="password" name="clave" id="clave" title="clave" placeholder="contraseña"  onChange={(e)=>introducirCredenciales(e)}/>
                </div>
                <div id="boton-login" onClick={()=>loguear()}>LOGIN</div>
            </div>
        </div>
    )
}

export default Home;