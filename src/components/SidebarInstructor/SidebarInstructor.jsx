/*
Componente: SidebarInstructor
Funcion: Menu de navegacion lateral para el rol Instructor
Proposito: Proporcionar acceso a las funcionalidades del instructor
*/

import '../SidebarAprendiz/SidebarAprendiz.css'

export default function SidebarInstructor({ activo }) {
  return (
    <nav className="sidebar" id="sidebar">
      <a href="#" className="cerrar-sidebar" aria-label="Cerrar menú">&times;</a>
      <ul className="menu-principal">
        <li><a href="#" className={'enlace-nav' + (activo === 'dashboard' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-home"></i></div> Dashboard</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'revision-propuestas' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-tasks"></i></div> Revisión de Propuestas</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'revision-avances' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-chart-line"></i></div> Revisión de Avances</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'historial-revisiones' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-history"></i></div> Historial de Revisiones</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'alertas' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-bell"></i></div> Alertas</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'gestionar-fichas' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-users"></i></div> Gestionar Fichas</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'mensajes' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-envelope"></i></div> Mensajes</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'reportar-falla' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-bug"></i></div> Reportar Falla</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'perfil' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-user-cog"></i></div> Mi Perfil</a></li>
      </ul>
    </nav>
  )
}
