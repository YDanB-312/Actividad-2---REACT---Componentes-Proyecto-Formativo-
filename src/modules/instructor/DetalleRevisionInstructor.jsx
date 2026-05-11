import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarInstructor from '../../components/SidebarInstructor/SidebarInstructor';
import FooterInstructor from '../../components/FooterInstructor/FooterInstructor';
import '../../assets/styles/pages/detalle-compartido.css';

function DetalleRevisionInstructor() {
  return (
    <div className="modulo-instructor">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Instructor" usuario="Carlos Ruiz | Instr. ADSO" notificaciones={8} />
      <SidebarInstructor activo="gestionar-fichas" />
      <main className="contenido-principal">
        <div className="contenedor-pagina">
          <div className="breadcrumb">
            <a href="#"><i className="fas fa-home"></i> Inicio</a>
            <span className="separador"><i className="fas fa-chevron-right"></i></span>
            <a href="#">Historial</a>
            <span className="separador"><i className="fas fa-chevron-right"></i></span>
            <span className="actual">Detalle Revisión</span>
          </div>
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-history"></i> Detalle de la Revisión</h1>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>
          <div className="tarjeta-revision mb-30">
            <div className="encabezado-revision">
              <div className="info-revision">
                <h3>Sistema IoT para Agricultura de Precisión</h3>
                <div className="meta-revision">
                  <span><i className="fas fa-user"></i> Aprendiz: María González</span>
                  <span><i className="fas fa-user-tie"></i> Instructor: Carlos Ruiz</span>
                  <span><i className="fas fa-calendar"></i> 25/04/2026</span>
                  <span><i className="fas fa-clock"></i> 14:30</span>
                </div>
              </div>
              <span className="badge badge-exito"><i className="fas fa-check-circle"></i> Aprobado</span>
            </div>
            <div className="detalles-revision">
              <div className="campo-revision">
                <label>Tipo de Revisión</label>
                <span>Avance de proyecto (Avance 2 - Dashboard)</span>
              </div>
              <div className="campo-revision">
                <label>Trimestre</label>
                <span>Trimestre 2 - 2026</span>
              </div>
              <div className="campo-revision">
                <label>Puntaje</label>
                <span>4.5 / 5.0</span>
              </div>
              <div className="campo-revision">
                <label>Duración de la revisión</label>
                <span>45 minutos</span>
              </div>
            </div>
            <div className="comentarios-revision">
              <h4><i className="fas fa-comment"></i> Comentarios del Instructor</h4>
              <div className="contenido-comentarios">
                <p>El avance presenta un desarrollo sólido del dashboard de visualización. Se implementaron correctamente los gráficos en tiempo real y la conexión con los sensores IoT. Se recomienda mejorar la interfaz móvil y agregar más indicadores de rendimiento. Por lo demás, el trabajo cumple con los objetivos planteados.</p>
              </div>
            </div>
            <div className="meta-info-linea">
              <span><i className="fas fa-history"></i> Revisado por: Carlos Ruiz</span>
              <span><i className="fas fa-calendar-check"></i> 25/04/2026 14:30</span>
            </div>
          </div>
          <div className="acciones-finales">
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver al historial</a>
          </div>
        </div>
      </main>
      <FooterInstructor />
    </div>
  );
}

export default DetalleRevisionInstructor;
