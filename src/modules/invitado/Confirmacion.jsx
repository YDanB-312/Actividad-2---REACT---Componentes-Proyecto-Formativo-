/*
Pagina: Confirmacion
Funcion: Pagina de confirmacion de operacion exitosa
Proposito: Mostrar que una operacion se realizo correctamente
*/

import '../../assets/styles/pages/login.css'
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar'
import FooterSimple from '../../components/FooterSimple/FooterSimple'

export default function Confirmacion() {
  return (
    <div className="modulo-invitado">
      <GovernmentBar />

      <main className="contenedor-login">
        <div className="tarjeta-login tarjeta-confirmacion">
          <div className="formulario-login formulario-confirmacion">
            <div className="icono-exito-confirmacion">
              <i className="fas fa-check-circle"></i>
            </div>
            <h1 className="titulo-confirmacion">Operacion Exitosa</h1>
            <p className="texto-confirmacion">
              La operacion se ha realizado correctamente en el sistema ProyecTwin.
            </p>
            <a href="#" className="btn-primario">
              <i className="fas fa-home"></i> Volver al dashboard
            </a>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  )
}
