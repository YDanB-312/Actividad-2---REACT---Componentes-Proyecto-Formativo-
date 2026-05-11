{/* DetalleProyecto.jsx — Componente que muestra el detalle completo de un proyecto del aprendiz */}
import '../../assets/styles/pages/detalle-compartido.css';
import '../../assets/styles/pages/mis-proyectos.css';
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarAprendiz from '../../components/SidebarAprendiz/SidebarAprendiz';
import FooterAprendiz from '../../components/FooterAprendiz/FooterAprendiz';

function DetalleProyecto() {
  return (
    <div className="modulo-aprendiz">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Aprendiz" usuario="Maria Gonzalez | ADSO" notificaciones={5} />
      <SidebarAprendiz activo="mis-proyectos" />
      <main className="contenido-principal">
        <div className="contenedor-proyectos">
          <div className="breadcrumb">
            <a href="#"><i className="fas fa-home"></i> Inicio</a>
            <span className="separador"><i className="fas fa-chevron-right"></i></span>
            <a href="#">Mis Proyectos</a>
            <span className="separador"><i className="fas fa-chevron-right"></i></span>
            <span className="actual">Detalle del Proyecto</span>
          </div>
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-folder-open"></i> Detalle del Proyecto</h1>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>

          <div className="seccion-filtros">
            <div className="filtros-titulo"><i className="fas fa-info-circle"></i> Informacion General</div>
            <div className="detalle-grid">
              <div><label className="campo-label">Nombre del Proyecto</label><p className="campo-valor">Sistema IoT para Agricultura de Precision</p></div>
              <div><label className="campo-label">Programa de Formacion</label><p className="campo-valor">ADSO - Analisis y Desarrollo de Sistemas</p></div>
              <div><label className="campo-label">Fecha de Creacion</label><p className="campo-valor">15/03/2026</p></div>
              <div><label className="campo-label">Estado</label><p><span className="badge badge-exito">Aprobado</span> <span className="badge badge-primario"><i className="fas fa-robot"></i> Analizado por IA</span></p></div>
              <div className="detalle-full"><label className="campo-label">Descripcion</label><p className="texto-descripcion">Desarrollo de un sistema basado en sensores IoT para monitorear variables ambientales en cultivos, permitiendo la toma de decisiones en tiempo real para optimizar el riego y la fertilizacion.</p></div>
            </div>
          </div>

          <div className="tarjeta tarjeta-padded mb-30">
            <h2 className="titulo-seccion"><i className="fas fa-users"></i> Integrantes del Equipo</h2>
            <div className="flex-row flex-wrap">
              <div className="avatar-miembro avatar-sm">MG</div>
              <div><strong className="texto-md">Maria Gonzalez</strong><br /><span className="texto-claro">Creador / Lider</span></div>
              <div className="avatar-miembro avatar-sm avatar-secundario">JP</div>
              <div><strong className="texto-md">Juan Perez</strong><br /><span className="texto-claro">Integrante</span></div>
              <div className="avatar-miembro avatar-sm avatar-secundario">LG</div>
              <div><strong className="texto-md">Laura Gomez</strong><br /><span className="texto-claro">Integrante</span></div>
            </div>
          </div>

          <div className="tarjeta tarjeta-padded mb-30">
            <h2 className="titulo-seccion"><i className="fas fa-chart-line"></i> Avances Registrados</h2>
            <div className="tabla-scroll">
              <table className="tabla-similitudes">
                <thead><tr><th>Fecha</th><th>Titulo</th><th>Descripcion</th><th>Estado</th></tr></thead>
                <tbody>
                  <tr><td>10/04/2026</td><td>Avance 1 - Sensores</td><td>Configuracion inicial de sensores de humedad y temperatura</td><td><span className="badge badge-exito">Aprobado</span></td></tr>
                  <tr><td>25/04/2026</td><td>Avance 2 - Dashboard</td><td>Desarrollo del panel de visualizacion de datos en tiempo real</td><td><span className="badge badge-advertencia">En revision</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="seccion-reporte">
            <h2 className="titulo-seccion"><i className="fas fa-comments"></i> Observaciones del Instructor</h2>

            <div className="lista-observaciones">
              <div className="observacion-item">
                <div className="observacion-header">
                  <span className="observacion-autor"><i className="fas fa-user-tie"></i> Carlos Ruiz | Instructor</span>
                  <span className="observacion-fecha">10 may 2026</span>
                </div>
                <div className="observacion-contenido">
                  <p>El proyecto necesita mejorar la seccion de analisis de requisitos. Se recomienda ampliar la documentacion tecnica antes de continuar con el desarrollo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="acciones-finales">
            <a href="#" className="btn-primario"><i className="fas fa-plus"></i> Registrar Avance</a>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>
        </div>
      </main>

      <FooterAprendiz />
    </div>
  );
}

export default DetalleProyecto;
