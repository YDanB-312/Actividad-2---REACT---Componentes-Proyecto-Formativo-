/*
Componente: SidebarAdmin
Funcion: Menu de navegacion lateral para el rol Administrador
Proposito: Proporcionar acceso a las funcionalidades del administrador
*/

import '../SidebarAprendiz/SidebarAprendiz.css'

export default function SidebarAdmin({ activo }) {
  return (
    <nav className="sidebar" id="sidebar">
      <a href="#" className="cerrar-sidebar" aria-label="Cerrar menú">&times;</a>
      <ul className="menu-principal">
        <li><a href="#" className={'enlace-nav' + (activo === 'dashboard' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-home"></i></div> Dashboard</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'gestion-usuarios' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-users-cog"></i></div> Gestión Usuarios</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'reportes' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-chart-bar"></i></div> Reportes</a></li>
        <li><a href="#" className={'enlace-nav' + (activo === 'reportes-fallas' ? ' activo' : '')}><div className="icono-nav"><i className="fas fa-bug"></i></div> Reportes de Fallas</a></li>
      </ul>
    </nav>
  )
}
