{/* DetalleRevision.jsx — Componente que muestra el detalle de una revision realizada por el instructor */}
import '../../assets/styles/pages/detalle-compartido.css';
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarAprendiz from '../../components/SidebarAprendiz/SidebarAprendiz';
import FooterAprendiz from '../../components/FooterAprendiz/FooterAprendiz';

function DetalleRevision() {
  return (
    <div className="modulo-aprendiz">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Aprendiz" usuario="Maria Gonzalez | ADSO" notificaciones={5} />
      <SidebarAprendiz activo="mis-proyectos" />
      <main className="contenido-principal">
        <div className="contenedor-pagina">
          <div className="breadcrumb">
            <a href="#"><i className="fas fa-home"></i> Inicio</a>
            <span className="separador"><i className="fas fa-chevron-right"></i></span>
            <span className="actual">Detalle Revision</span>
          </div>
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-history"></i> Detalle de la Revision</h1>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>

          <div className="tarjeta-revision mb-30">
            <div className="encabezado-revision">
              <div className="info-revision">
                <h3>Sistema IoT para Agricultura de Precision</h3>
                <div className="meta-revision">
                  <span><i className="fas fa-user"></i> Aprendiz: Maria Gonzalez</span>
                  <span><i className="fas fa-user-tie"></i> Instructor: Carlos Ruiz</span>
                  <span><i className="fas fa-calendar"></i> 25/04/2026</span>
                  <span><i className="fas fa-clock"></i> 14:30</span>
                </div>
              </div>
              <span className="badge badge-exito"><i className="fas fa-check-circle"></i> Aprobado</span>
            </div>

            <div className="detalles-revision">
              <div className="campo-revision">
                <label>Tipo de Revision</label>
                <span>Avance de proyecto (Avance 2 - Dashboard)</span>
              </div>
              <div className="campo-revision">
                <label>Trimestre</label>
                <span>Trimestre 2 - 2026</span>
              </div>
              <div className="campo-revision">
                <label>Decision</label>
                <span>Aprobado</span>
              </div>
              <div className="campo-revision">
                <label>Duracion de la revision</label>
                <span>45 minutos</span>
              </div>
            </div>

            <div className="comentarios-revision">
              <h4><i className="fas fa-comment"></i> Comentarios del Instructor</h4>
              <div className="contenido-comentarios">
                <p>El avance presenta un desarrollo solido del dashboard de visualizacion. Se implementaron correctamente los graficos en tiempo real y la conexion con los sensores IoT. Se recomienda mejorar la interfaz movil y agregar mas indicadores de rendimiento. Por lo demas, el trabajo cumple con los objetivos planteados.</p>
              </div>
            </div>

            <div className="meta-info-linea">
              <span><i className="fas fa-history"></i> Revisado por: Carlos Ruiz</span>
              <span><i className="fas fa-calendar-check"></i> 25/04/2026 14:30</span>
            </div>
          </div>

          <div className="acciones-finales">
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>
        </div>
      </main>

      <FooterAprendiz />
    </div>
  );
}

export default DetalleRevision;
