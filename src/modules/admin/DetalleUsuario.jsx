import GovernmentBar from '../../components/GovernmentBar/GovernmentBar'
import '../../assets/styles/pages/gestion-usuarios.css'
import Header from '../../components/Header/Header';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';

export default function DetalleUsuario() {
  return (
    <div className="modulo-admin">
      <GovernmentBar />

      <Header titulo="ProyecTwin - Panel de Administracion" usuario="Admin Sistema" notificaciones={12} />

      <SidebarAdmin activo="gestion-usuarios" />

      <main className="contenido-principal">
        <div className="contenedor-gestion">
          <div className="breadcrumb">
            <a href="#"><i className="fas fa-home"></i> Inicio</a>
            <span className="separador"><i className="fas fa-chevron-right"></i></span>
            <a href="#">Gestion Usuarios</a>
            <span className="separador"><i className="fas fa-chevron-right"></i></span>
            <span className="actual">Detalle de Usuario</span>
          </div>
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-user"></i> Detalle de Usuario</h1>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>

          <div className="seccion-filtros">
            <div className="filtros-titulo"><i className="fas fa-id-card"></i> Informacion Personal</div>
            <div className="detalle-grid">
              <div>
                <label className="campo-label">Nombre Completo</label>
                <p className="campo-valor">Ana Martinez Lopez</p>
              </div>
              <div>
                <label className="campo-label">Rol</label>
                <p><span className="badge badge-exito"><i className="fas fa-user-graduate"></i> Aprendiz</span></p>
              </div>
              <div>
                <label className="campo-label">Documento</label>
                <p className="campo-valor">1023456789</p>
              </div>
              <div>
                <label className="campo-label">Estado</label>
                <p><span className="badge badge-exito"><i className="fas fa-circle"></i> Activo</span></p>
              </div>
              <div>
                <label className="campo-label">Correo Electronico</label>
                <p className="campo-valor">ana.martinez@soy.sena.edu.co</p>
              </div>
              <div>
                <label className="campo-label">Telefono</label>
                <p className="campo-valor">3235421165</p>
              </div>
              <div>
                <label className="campo-label">Programa de Formacion</label>
                <p className="campo-valor">ADSO - Analisis y Desarrollo de Sistemas</p>
              </div>
              <div>
                <label className="campo-label">Fecha de Registro</label>
                <p className="campo-valor">10/01/2026</p>
              </div>
            </div>
          </div>

          <div className="tarjeta tarjeta-padded mb-30">
            <h2 className="titulo-seccion"><i className="fas fa-folder-open"></i> Proyectos Asociados</h2>
            <div className="tabla-scroll">
              <table className="tabla-usuarios">
                <thead>
                  <tr>
                    <th>Proyecto</th>
                    <th>Estado</th>
                    <th>Fecha Creacion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sistema IoT para Agricultura de Precision</td>
                    <td><span className="badge badge-exito">Activo</span></td>
                    <td>15/03/2026</td>
                  </tr>
                  <tr>
                    <td>App Movil para Inventarios</td>
                    <td><span className="badge badge-advertencia">Pendiente</span></td>
                    <td>20/02/2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="tarjeta tarjeta-padded mb-30">
            <h2 className="titulo-seccion"><i className="fas fa-history"></i> Actividad Reciente</h2>
            <div className="lista-actividad">
              <div className="actividad-item borde-primario">
                <div className="flex-between">
                  <strong>Inicio sesion</strong>
                  <span className="actividad-fecha">Hoy 08:30</span>
                </div>
              </div>
              <div className="actividad-item borde-advertencia">
                <div className="flex-between">
                  <strong>Registro avance en proyecto</strong>
                  <span className="actividad-fecha">Ayer 15:45</span>
                </div>
              </div>
              <div className="actividad-item borde-exito">
                <div className="flex-between">
                  <strong>Proyecto aprobado por instructor</strong>
                  <span className="actividad-fecha">Hace 3 dias</span>
                </div>
              </div>
            </div>
          </div>

          <div className="acciones-finales mb-30">
            <a href="#" className="btn-primario"><i className="fas fa-edit"></i> Editar Usuario</a>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>
        </div>
      </main>

      <FooterAdmin />
    </div>
  )
}
