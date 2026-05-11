/*
Componente: SidebarAprendiz
Funcion: Menu de navegacion lateral para el rol Aprendiz
Proposito: Proporcionar acceso a las funcionalidades del aprendiz
*/

import './SidebarAprendiz.css'

export default function SidebarAprendiz({ activo }) {
  return (
    <nav className="sidebar" id="sidebar">
      <a href="#" className="cerrar-sidebar" aria-label="Cerrar menú">&times;</a>
      <ul className="menu-principal">
        <li><a href="#" className={'enlace-nav' + (activo === 'dashboard' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-home"></i></div> Dashboard</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'mis-proyectos' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-folder-open"></i></div> Mis proyectos</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'nuevo-proyecto' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-plus-circle"></i></div> Nuevo proyecto</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'unirse-ficha' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-user-plus"></i></div> Unirse a Ficha</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'alertas' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-bell"></i></div> Alertas</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'mensajes' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-envelope"></i></div> Mensajes</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'registrar-avances' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-chart-line"></i></div> Registrar Avances</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'reportar-falla' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-bug"></i></div> Reportar Falla</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'mi-perfil' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-user-cog"></i></div> Mi Perfil</a></li>
      </ul>
    </nav>
  )
}
