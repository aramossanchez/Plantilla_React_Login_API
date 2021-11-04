import './Profile.css';
import React, { useState, useEffect} from 'react';

const Profile = () =>{
    
    const [datosUsuario, setdatosUsuario] = useState(
        {
            nombre: "",
            correo: "",
            ciudad: "",
            createdAt: "",
        }
    )

    useEffect(()=>{

        let datosPerfil = JSON.parse(localStorage.getItem("datosLogin"));
        console.log(datosPerfil);

        setdatosUsuario({
            nombre: datosPerfil.usuario.nombre,
            correo: datosPerfil.usuario.correo,
            ciudad: datosPerfil.usuario.ciudad,
            createdAt: datosPerfil.usuario.createdAt,
        })
    }, [])

    return(
        <div id="container-profile">
            <div id="perfil-usuario">
                <h1>Perfil de usuario</h1>
                <hr />
                <div id="foto-y-datos-usuario">
                    <div id="foto-perfil"></div>
                    <hr id="linea-usuario"/>
                    <div id="datos-usuario">
                        <p><span>Nombre:</span> {datosUsuario.nombre}</p>
                        <p><span>Correo electrónico:</span> {datosUsuario.correo}</p>
                        <p><span>Ciudad:</span> {datosUsuario.ciudad}</p>
                        <p><span>Fecha de alta:</span> {datosUsuario.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;