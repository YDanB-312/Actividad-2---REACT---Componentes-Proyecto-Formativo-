import GovernmentBar from '../../components/GovernmentBar/GovernmentBar'
import Header from '../../components/Header/Header';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';
import '../../assets/styles/pages/detalle-compartido.css'
import '../../assets/styles/pages/mis-proyectos.css'

export default function DetalleProyectoAdmin() {
  return (
    <div className="modulo-admin">
      <GovernmentBar />

      <Header titulo="ProyecTwin - Panel de Administracion" usuario="Admin Sistema" notificaciones={12} />

      <SidebarAdmin activo="reportes" />

      <main className="contenido-principal">
        <div className="contenedor-gestion">
          <div className="breadcrumb">
            <a href="#"><i className="fas fa-home"></i> Inicio</a>
            <span className="separador"><i className="fas fa-chevron-right"></i></span>
            <span className="actual">Detalle del Proyecto</span>
          </div>
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-folder-open"></i> Detalle del Proyecto</h1>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver al Dashboard</a>
          </div>

          <section className="seccion-reporte">
            <div className="filtros-titulo"><i className="fas fa-info-circle"></i> Informacion del Proyecto</div>
            <div className="tarjeta tarjeta-padded mt-20">
              <div className="detalle-grid">
                <div>
                  <label className="campo-label">Nombre del Proyecto</label>
                  <p className="campo-valor">Sistema IoT para Agricultura de Precision</p>
                </div>
                <div>
                  <label className="campo-label">Estado</label>
                  <p><span className="badge badge-exito"><i className="fas fa-circle"></i> Activo</span> <span className="badge badge-primario"><i className="fas fa-robot"></i> Analizado por IA</span></p>
                </div>
                <div>
                  <label className="campo-label">Creador</label>
                  <p className="campo-valor">Ana Martinez Lopez</p>
                </div>
                <div>
                  <label className="campo-label">Instructor Asignado</label>
                  <p className="campo-valor">Carlos Rodriguez Diaz</p>
                </div>
                <div>
                  <label className="campo-label">Programa</label>
                  <p className="campo-valor">ADSO - Analisis y Desarrollo de Sistemas</p>
                </div>
                <div>
                  <label className="campo-label">Fecha de Creacion</label>
                  <p className="campo-valor">15/03/2026</p>
                </div>
                <div className="detalle-full">
                  <label className="campo-label">Descripcion</label>
                  <p className="texto-descripcion">Desarrollo de un sistema basado en sensores IoT para monitorear variables ambientales en cultivos, permitiendo la toma de decisiones en tiempo real para optimizar el riego y la fertilizacion.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="seccion-reporte">
            <div className="filtros-titulo"><i className="fas fa-users"></i> Integrantes del Equipo</div>
            <div className="tarjeta tarjeta-padded">
              <div className="flex-row flex-wrap">
                <div className="avatar-miembro avatar-sm">AM</div>
                <div><strong className="texto-md">Ana Martinez Lopez</strong><br /><span className="texto-claro">Creador / Lider</span></div>
                <div className="avatar-miembro avatar-sm avatar-secundario">JP</div>
                <div><strong className="texto-md">Juan Perez</strong><br /><span className="texto-claro">Integrante</span></div>
                <div className="avatar-miembro avatar-sm avatar-secundario">LG</div>
                <div><strong className="texto-md">Laura Gomez</strong><br /><span className="texto-claro">Integrante</span></div>
              </div>
            </div>
          </section>

          <section className="seccion-reporte">
            <div className="encabezado-tabla">
              <h3 className="titulo-tabla"><i className="fas fa-clone"></i> Similitudes Detectadas</h3>
            </div>
            <div className="contenedor-tabla">
              <table className="tabla-similitudes">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Proyecto Similar</th>
                    <th>Porcentaje</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Plataforma Educativa SENA</td>
                    <td><span className="badge badge-peligro">65%</span></td>
                    <td>10/04/2026</td>
                    <td><a href="#" className="btn-ver"><i className="fas fa-eye"></i> Ver detalle</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="seccion-reporte">
            <div className="encabezado-tabla">
              <h3 className="titulo-tabla"><i className="fas fa-history"></i> Historial de Revisiones</h3>
            </div>
            <div className="contenedor-tabla">
              <table className="tabla-similitudes">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Instructor</th>
                    <th>Tipo</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>25/04/2026</td>
                    <td>Carlos Rodriguez</td>
                    <td>Avance 2 - Dashboard</td>
                    <td><span className="badge badge-advertencia">En revision</span></td>
                  </tr>
                  <tr>
                    <td>10/04/2026</td>
                    <td>Carlos Rodriguez</td>
                    <td>Avance 1 - Sensores</td>
                    <td><span className="badge badge-exito">Aprobado</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="acciones-finales mb-30">
            <a href="#" className="btn-secundario"><i className="fas fa-chart-bar"></i> Ver en Reportes</a>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>
        </div>
      </main>

      <FooterAdmin />
    </div>
  )
}
