import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarInstructor from '../../components/SidebarInstructor/SidebarInstructor';
import FooterInstructor from '../../components/FooterInstructor/FooterInstructor';
import '../../assets/styles/pages/dashboard-instructor.css';

function DashboardInstructor() {
  return (
    <div className="modulo-instructor">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Instructor" usuario="Carlos Ruiz | Instr. ADSO" notificaciones={8} />
      <SidebarInstructor activo="dashboard" />
      <main className="contenido-principal">
        <div className="contenedor-dashboard">
          <section className="seccion-bienvenida">
            <div className="tarjeta-bienvenida">
              <div className="contenido-bienvenida">
                <h1>¡Bienvenido al Panel de Instructor!</h1>
                <p>Gestiona las Propuestas de proyectos, revisa Avances y mantén el control de calidad de los trabajos de tus aprendices.</p>
              </div>
              <div className="ilustracion-bienvenida">
                <div className="grafico-circular">
                  <div className="texto-progreso">85%</div>
                </div>
              </div>
            </div>
          </section>
          <section className="seccion-estadisticas">
            <h2 className="titulo-seccion"><i className="fas fa-chart-line"></i> Estadísticas Generales</h2>
            <div className="grid-estadisticas">
              <div className="tarjeta-estadistica">
                <div className="icono-estadistica icono-propuestas"><i className="fas fa-tasks"></i></div>
                <div className="info-estadistica">
                  <h3>Propuestas Pendientes</h3>
                  <div className="valor-estadistica">8</div>
                  <p className="detalle-estadistica">Esperan revisión</p>
                </div>
              </div>
              <div className="tarjeta-estadistica">
                <div className="icono-estadistica icono-proyectos"><i className="fas fa-folder-open"></i></div>
                <div className="info-estadistica">
                  <h3>Proyectos Activos</h3>
                  <div className="valor-estadistica">24</div>
                  <p className="detalle-estadistica">En desarrollo</p>
                </div>
              </div>
              <div className="tarjeta-estadistica">
                <div className="icono-estadistica icono-similitudes"><i className="fas fa-exclamation-triangle"></i></div>
                <div className="info-estadistica">
                  <h3>Alertas de Similitud</h3>
                  <div className="valor-estadistica">5</div>
                  <p className="detalle-estadistica">Requieren atención</p>
                </div>
              </div>
            </div>
          </section>
          <section className="seccion-acciones">
            <h2 className="titulo-seccion"><i className="fas fa-bolt"></i> Acciones Rápidas</h2>
            <div className="grid-acciones">
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-tasks"></i></div>
                <h3>Revisar Propuestas</h3>
                <p>Aprueba o rechaza nuevas Propuestas de proyectos</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-eye"></i> Revisar Propuestas</a>
              </div>
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-chart-line"></i></div>
                <h3>Revisar Avances</h3>
                <p>Evalúa el progreso de los proyectos en desarrollo</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-chart-line"></i> Revisar Avances</a>
              </div>
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-bell"></i></div>
                <h3>Alertas de Similitud</h3>
                <p>Revisa proyectos con posibles Similitudes</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-bell"></i> Ver Alertas</a>
              </div>
            </div>
          </section>
          <section className="seccion-proyectos">
            <div className="encabezado-seccion">
              <h2 className="titulo-seccion"><i className="fas fa-clock"></i> Propuestas Pendientes</h2>
              <a href="#" className="enlace-ver-todo">Ver todas <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="lista-proyectos">
              <div className="tarjeta-proyecto">
                <div className="info-proyecto">
                  <h3>Sistema IoT para Agricultura</h3>
                  <p><strong>Aprendiz:</strong> Ana Martínez</p>
                  <p><strong>Fecha:</strong> 15 Nov 2023</p>
                </div>
                <span className="badge badge-advertencia">Pendiente</span>
                <div className="acciones-proyecto">
                  <a href="#" className="btn-secundario"><i className="fas fa-eye"></i> Revisar</a>
                </div>
              </div>
              <div className="tarjeta-proyecto">
                <div className="info-proyecto">
                  <h3>App Móvil para Turismo Local</h3>
                  <p><strong>Aprendiz:</strong> Juan Pérez</p>
                  <p><strong>Fecha:</strong> 14 Nov 2023</p>
                </div>
                <span className="badge badge-advertencia">Pendiente</span>
                <div className="acciones-proyecto">
                  <a href="#" className="btn-secundario"><i className="fas fa-eye"></i> Revisar</a>
                </div>
              </div>
            </div>
          </section>
          <section className="seccion-alertas">
            <div className="encabezado-seccion">
              <h2 className="titulo-seccion"><i className="fas fa-exclamation-triangle"></i> Alertas de Similitud</h2>
              <a href="#" className="enlace-ver-todo">Ver todas <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="lista-alertas">
              <div className="tarjeta-alerta alerta-urgente">
                <div className="contenido-alerta">
                  <div className="icono-alerta"><i className="fas fa-exclamation-triangle"></i></div>
                  <div className="info-alerta">
                    <h3>Alta Similitud Detectada</h3>
                    <p>proyecto "Sistema de gestión Académica" tiene <strong>65% de similitud</strong></p>
                    <div className="meta-alerta">
                      <span className="fecha-alerta"><i className="fas fa-clock"></i> Hace 2 horas</span>
                      <a href="#" className="btn-alerta-accion"><i className="fas fa-search"></i> Revisar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterInstructor />
    </div>
  );
}

export default DashboardInstructor;
