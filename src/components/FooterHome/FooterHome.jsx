/*
Componente: FooterHome
Funcion: Pie de pagina para la pagina de inicio (Home)
Proposito: Mostrar informacion institucional, enlaces rapidos y contacto
*/

import '../../assets/styles/pages/Footer.css'

export default function FooterHome() {
  return (
    <footer className="pie-pagina">
      <div className="contenedor-pie">
        <div className="seccion-pie">
          <h3>ProyecTwin SENA</h3>
          <p>Sistema de gestión y detección de Similitudes para proyectos de Formación.</p>
        </div>
        <div className="seccion-pie">
          <h3>Enlaces Rápidos</h3>
          <ul className="enlaces-pie">
            <li><a href="#"><i className="fas fa-home"></i> Inicio</a></li>
            <li><a href="#"><i className="fas fa-sign-in-alt"></i> Ingresar</a></li>
            <li><a href="#"><i className="fas fa-user-plus"></i> Registrarse</a></li>
          </ul>
        </div>
        <div className="seccion-pie">
          <h3>Contacto</h3>
          <div className="info-contacto">
            <p><i className="fas fa-phone"></i> 3235421165</p>
            <p><i className="fas fa-envelope"></i> sena@correo.edu.co</p>
            <p><i className="fas fa-map-marker-alt"></i> Centro de Formación SENA</p>
          </div>
        </div>
      </div>
      <div className="derechos-autor">
        <p>&copy; 2023 ProyecTwin SENA. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
