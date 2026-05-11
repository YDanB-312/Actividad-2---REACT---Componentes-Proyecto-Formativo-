// DashboardAprendiz - Pagina principal del panel del aprendiz, muestra bienvenida, estadisticas y acceso rapido a funcionalidades
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarAprendiz from '../../components/SidebarAprendiz/SidebarAprendiz';
import FooterAprendiz from '../../components/FooterAprendiz/FooterAprendiz';
import '../../assets/styles/pages/dashboard-aprendiz.css';

function DashboardAprendiz() {
  return (
    <div className="modulo-aprendiz">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Aprendiz" usuario="Maria Gonzalez | ADSO" notificaciones={5} />
      <SidebarAprendiz activo="dashboard" />
      <main className="contenido-principal">
        <div className="contenedor-dashboard">
          <section className="seccion-bienvenida">
            <div className="tarjeta-bienvenida">
              <div className="contenido-bienvenida">
                <h1>¡Bienvenida al Sistema ProyecTwin!</h1>
                <p>Gestiona tus proyectos de Formacion y evita Similitudes con otras Propuestas. Comienza registrando tu primer proyecto para aprovechar todas las funcionalidades.</p>
              </div>
              <div className="ilustracion-bienvenida">
                <div className="grafico-circular">
                  <div className="texto-progreso">Inicio</div>
                </div>
              </div>
            </div>
          </section>
          <section className="seccion-estadisticas">
            <h2 className="titulo-seccion"><i className="fas fa-chart-line"></i> Estadisticas Generales</h2>
            <div className="grid-estadisticas">
              <div className="tarjeta-estadistica">
                <div className="icono-estadistica icono-proyectos"><i className="fas fa-folder-open"></i></div>
                <div className="info-estadistica">
                  <h3>Proyectos Activos</h3>
                  <div className="valor-estadistica">0</div>
                  <p className="detalle-estadistica">Proyectos en desarrollo</p>
                </div>
              </div>
              <div className="tarjeta-estadistica">
                <div className="icono-estadistica icono-alertas"><i className="fas fa-bell"></i></div>
                <div className="info-estadistica">
                  <h3>Alertas Pendientes</h3>
                  <div className="valor-estadistica">0</div>
                  <p className="detalle-estadistica">Requieren atencion</p>
                </div>
              </div>
              <div className="tarjeta-estadistica">
                <div className="icono-estadistica icono-mensajes"><i className="fas fa-envelope"></i></div>
                <div className="info-estadistica">
                  <h3>Mensajes Nuevos</h3>
                  <div className="valor-estadistica">0</div>
                  <p className="detalle-estadistica">Bandeja de entrada</p>
                </div>
              </div>
            </div>
          </section>
          <section className="seccion-acciones">
            <h2 className="titulo-seccion"><i className="fas fa-bolt"></i> Acciones Rapidas</h2>
            <div className="grid-acciones">
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-plus-circle"></i></div>
                <h3>Nuevo proyecto</h3>
                <p>Registra una nueva Propuesta de proyecto en el sistema</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-plus"></i> Crear proyecto</a>
              </div>
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-folder-open"></i></div>
                <h3>Mis proyectos</h3>
                <p>Revisa y Gestiona tus proyectos existentes</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-eye"></i> Ver proyectos</a>
              </div>
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-bell"></i></div>
                <h3>Alertas</h3>
                <p>Revisa Notificaciones y Similitudes detectadas</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-bell"></i> Ver Alertas</a>
              </div>
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-envelope"></i></div>
                <h3>Mensajes</h3>
                <p>Comunicate con tu instructor</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-envelope"></i> Ver Mensajes</a>
              </div>
            </div>
          </section>
          <section className="seccion-proyectos">
            <div className="encabezado-seccion">
              <h2 className="titulo-seccion"><i className="fas fa-folder"></i> Mis proyectos</h2>
              <a href="#" className="enlace-ver-todo">Ver todos <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="estado-vacio">
              <div className="icono-vacio"><i className="fas fa-inbox"></i></div>
              <h3>No tienes proyectos registrados</h3>
              <p>Comienza registrando tu primer proyecto para aprovechar todas las funcionalidades del sistema.</p>
              <a href="#" className="btn-accion-principal"><i className="fas fa-plus"></i> Crear mi primer proyecto</a>
            </div>
          </section>
          <section className="seccion-alertas">
            <div className="encabezado-seccion">
              <h2 className="titulo-seccion"><i className="fas fa-bell"></i> Alertas Recientes</h2>
              <a href="#" className="enlace-ver-todo">Ver todas <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="estado-vacio">
              <div className="icono-vacio"><i className="fas fa-check-circle"></i></div>
              <h3>No tienes Alertas pendientes</h3>
              <p>Cuando tengas Notificaciones sobre tus proyectos, apareceran aqui.</p>
            </div>
          </section>
        </div>
      </main>
      <FooterAprendiz />
    </div>
  );
}

export default DashboardAprendiz;
