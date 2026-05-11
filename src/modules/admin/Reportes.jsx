import GovernmentBar from '../../components/GovernmentBar/GovernmentBar'
import Header from '../../components/Header/Header';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';
import '../../assets/styles/pages/reportes.css'

export default function Reportes() {
  return (
    <div className="modulo-admin">
      <GovernmentBar />

      <Header titulo="ProyecTwin - Panel de Administracion" usuario="Admin Sistema" notificaciones={12} />

      <SidebarAdmin activo="reportes" />

      <main className="contenido-principal">
        <div className="contenedor-gestion">

          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-chart-bar"></i> Reportes y Estadisticas</h1>
          </div>

          <section className="seccion-reporte">
            <h2 className="titulo-seccion"><i className="fas fa-chart-pie"></i> Resumen General</h2>
            <div className="tarjeta">
              <div className="grid-estadisticas">
                <div className="tarjeta-estadistica exito">
                  <div className="icono-estadistica icono-usuarios"><i className="fas fa-users"></i></div>
                  <div className="info-estadistica">
                    <h3>Total Usuarios</h3>
                    <div className="valor-estadistica">150</div>
                    <p className="detalle-estadistica">Aprendices, Instructores y Admins</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica peligro">
                  <div className="icono-estadistica icono-proyectos"><i className="fas fa-project-diagram"></i></div>
                  <div className="info-estadistica">
                    <h3>Total proyectos</h3>
                    <div className="valor-estadistica">78</div>
                    <p className="detalle-estadistica">Registrados en el sistema</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica exito">
                  <div className="icono-estadistica icono-aprendices"><i className="fas fa-check-circle"></i></div>
                  <div className="info-estadistica">
                    <h3>Proyectos Aprobados</h3>
                    <div className="valor-estadistica">45</div>
                    <p className="detalle-estadistica">58% del total</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica peligro">
                  <div className="icono-estadistica icono-similitudes"><i className="fas fa-times-circle"></i></div>
                  <div className="info-estadistica">
                    <h3>Proyectos Rechazados</h3>
                    <div className="valor-estadistica">12</div>
                    <p className="detalle-estadistica">15% del total</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica advertencia">
                  <div className="icono-estadistica icono-programas"><i className="fas fa-exclamation-triangle"></i></div>
                  <div className="info-estadistica">
                    <h3>Similitudes Detectadas</h3>
                    <div className="valor-estadistica">15</div>
                    <p className="detalle-estadistica">Requieren Revision</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica informativa">
                  <div className="icono-estadistica icono-instructores"><i className="fas fa-chart-line"></i></div>
                  <div className="info-estadistica">
                    <h3>Promedio de Avance</h3>
                    <div className="valor-estadistica">67%</div>
                    <p className="detalle-estadistica">En todos los proyectos</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="seccion-reporte">
            <h2 className="titulo-seccion"><i className="fas fa-folder-open"></i> Proyectos por Estado</h2>
            <div className="contenedor-grafico">
              <div className="grafico-barras">
                <div className="barra-item">
                  <span className="barra-etiqueta">Activo</span>
                  <div className="barra-contenedor"><div className="barra-relleno barra-activo">70%</div></div>
                  <span className="barra-cantidad">55</span>
                </div>
                <div className="barra-item">
                  <span className="barra-etiqueta">Pendiente</span>
                  <div className="barra-contenedor"><div className="barra-relleno barra-pendiente">35%</div></div>
                  <span className="barra-cantidad">27</span>
                </div>
                <div className="barra-item">
                  <span className="barra-etiqueta">Aprobado</span>
                  <div className="barra-contenedor"><div className="barra-relleno barra-aprobado">58%</div></div>
                  <span className="barra-cantidad">45</span>
                </div>
                <div className="barra-item">
                  <span className="barra-etiqueta">Rechazado</span>
                  <div className="barra-contenedor"><div className="barra-relleno barra-rechazado">15%</div></div>
                  <span className="barra-cantidad">12</span>
                </div>
                <div className="barra-item">
                  <span className="barra-etiqueta">Completado</span>
                  <div className="barra-contenedor"><div className="barra-relleno barra-completado">45%</div></div>
                  <span className="barra-cantidad">35</span>
                </div>
              </div>
            </div>
          </section>

          <section className="seccion-reporte">
            <h2 className="titulo-seccion"><i className="fas fa-clone"></i> Ultimas Similitudes Detectadas</h2>
            <div className="contenedor-tabla">
              <div className="encabezado-tabla">
                <h3 className="titulo-tabla"><i className="fas fa-table"></i> Registro de Similitudes</h3>
                <span className="total-registros">Mostrando 5 de 15 Similitudes</span>
              </div>
              <table className="tabla-similitudes">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Proyecto 1</th>
                    <th>Proyecto 2</th>
                    <th>Porcentaje</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sistema de gestion Academica</td>
                    <td>Plataforma Educativa SENA</td>
                    <td><span className="badge badge-peligro">85%</span></td>
                    <td>10/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <a href="#" className="btn-accion-tabla btn-ver" title="Revisar"><i className="fas fa-search"></i></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>App Movil para Turismo</td>
                    <td>Turismo Colombia Digital</td>
                    <td><span className="badge badge-peligro">72%</span></td>
                    <td>09/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <a href="#" className="btn-accion-tabla btn-ver" title="Revisar"><i className="fas fa-search"></i></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sistema IoT Agricultura</td>
                    <td>Monitoreo Agricola Inteligente</td>
                    <td><span className="badge badge-advertencia">58%</span></td>
                    <td>08/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <a href="#" className="btn-accion-tabla btn-ver" title="Revisar"><i className="fas fa-search"></i></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>E-commerce Artesanias</td>
                    <td>Mercado Artesanal Virtual</td>
                    <td><span className="badge badge-advertencia">45%</span></td>
                    <td>07/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <a href="#" className="btn-accion-tabla btn-ver" title="Revisar"><i className="fas fa-search"></i></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Chatbot Soporte Tecnico</td>
                    <td>Asistente Virtual SENA</td>
                    <td><span className="badge badge-exito">30%</span></td>
                    <td>06/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <a href="#" className="btn-accion-tabla btn-ver" title="Revisar"><i className="fas fa-search"></i></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="seccion-reporte">
            <h2 className="titulo-seccion"><i className="fas fa-trophy"></i> Top Instructores</h2>
            <div className="grid-instructores">
              <div className="tarjeta-instructor">
                <div className="tarjeta-instructor-ranking ranking-1">1</div>
                <div className="tarjeta-instructor-avatar"><i className="fas fa-user-tie"></i></div>
                <div className="tarjeta-instructor-info">
                  <h4>Carlos Rodriguez Diaz</h4>
                  <p>desarrollo de Software</p>
                </div>
                <div className="tarjeta-instructor-revisiones">
                  <div className="numero">45</div>
                  <div className="texto">Revisiones</div>
                </div>
              </div>
              <div className="tarjeta-instructor">
                <div className="tarjeta-instructor-ranking ranking-2">2</div>
                <div className="tarjeta-instructor-avatar"><i className="fas fa-user-tie"></i></div>
                <div className="tarjeta-instructor-info">
                  <h4>Maria Gonzalez Torres</h4>
                  <p>Analisis y desarrollo de Software</p>
                </div>
                <div className="tarjeta-instructor-revisiones">
                  <div className="numero">38</div>
                  <div className="texto">Revisiones</div>
                </div>
              </div>
              <div className="tarjeta-instructor">
                <div className="tarjeta-instructor-ranking ranking-3">3</div>
                <div className="tarjeta-instructor-avatar"><i className="fas fa-user-tie"></i></div>
                <div className="tarjeta-instructor-info">
                  <h4>Andres Martinez Lopez</h4>
                  <p>Programacion de Software</p>
                </div>
                <div className="tarjeta-instructor-revisiones">
                  <div className="numero">32</div>
                  <div className="texto">Revisiones</div>
                </div>
              </div>
              <div className="tarjeta-instructor">
                <div className="tarjeta-instructor-ranking">4</div>
                <div className="tarjeta-instructor-avatar"><i className="fas fa-user-tie"></i></div>
                <div className="tarjeta-instructor-info">
                  <h4>Laura Sanchez Perez</h4>
                  <p>desarrollo de Software</p>
                </div>
                <div className="tarjeta-instructor-revisiones">
                  <div className="numero">28</div>
                  <div className="texto">Revisiones</div>
                </div>
              </div>
              <div className="tarjeta-instructor">
                <div className="tarjeta-instructor-ranking">5</div>
                <div className="tarjeta-instructor-avatar"><i className="fas fa-user-tie"></i></div>
                <div className="tarjeta-instructor-info">
                  <h4>Diego Ramirez Castro</h4>
                  <p>Infraestructura de Redes</p>
                </div>
                <div className="tarjeta-instructor-revisiones">
                  <div className="numero">22</div>
                  <div className="texto">Revisiones</div>
                </div>
              </div>
              <div className="tarjeta-instructor">
                <div className="tarjeta-instructor-ranking">6</div>
                <div className="tarjeta-instructor-avatar"><i className="fas fa-user-tie"></i></div>
                <div className="tarjeta-instructor-info">
                  <h4>Patricia Morales Vega</h4>
                  <p>desarrollo de Medios Audiovisuales</p>
                </div>
                <div className="tarjeta-instructor-revisiones">
                  <div className="numero">18</div>
                  <div className="texto">Revisiones</div>
                </div>
              </div>
            </div>
          </section>

          <div className="acciones-exportar">
            <button className="btn-secundario" type="button"><i className="fas fa-file-csv"></i> Exportar CSV</button>
            <button className="btn-secundario" type="button"><i className="fas fa-file-pdf"></i> Generar PDF</button>
          </div>

        </div>
      </main>

      <FooterAdmin />
    </div>
  )
}
