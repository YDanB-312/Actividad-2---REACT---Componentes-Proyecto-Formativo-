import GovernmentBar from '../../components/GovernmentBar/GovernmentBar'
import Header from '../../components/Header/Header';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';
import '../../assets/styles/pages/dashboard-admin.css'

export default function DashboardAdmin() {
  return (
    <div className="modulo-admin">
      <GovernmentBar />

      <Header titulo="ProyecTwin - Panel de Administracion" usuario="Admin Sistema" notificaciones={12} />

      <SidebarAdmin activo="dashboard" />

      <main className="contenido-principal">
        <div className="contenedor-gestion">
          <section className="seccion-bienvenida">
            <div className="tarjeta-bienvenida">
              <div className="contenido-bienvenida">
                <h1>¡Bienvenido al Panel de Administrador!</h1>
                <p>Gestiona usuarios, programas de Formacion y mantén el control total del sistema ProyecTwin. Revisa reportes y asegura el correcto funcionamiento de la plataforma.</p>
                <div className="indicadores-rapidos">
                  <div className="indicador">
                    <div className="valor-estadistica">150</div>
                    <p className="detalle-estadistica">Total Usuarios</p>
                  </div>
                  <div className="indicador">
                    <div className="valor-estadistica">45</div>
                    <p className="detalle-estadistica">Proyectos Activos</p>
                  </div>
                  <div className="indicador">
                    <div className="valor-estadistica">3</div>
                    <p className="detalle-estadistica">Reportes de Fallas</p>
                  </div>
                </div>
              </div>
              <div className="ilustracion-bienvenida">
                <div className="grafico-circular">
                  <div className="texto-progreso">100%</div>
                </div>
              </div>
            </div>
          </section>

          <section className="seccion-estadisticas">
            <h2 className="titulo-seccion"><i className="fas fa-chart-line"></i> Estadisticas Generales</h2>
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
                    <p className="detalle-estadistica">Activos, pendientes y completados</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica informativa">
                  <div className="icono-estadistica icono-instructores"><i className="fas fa-chalkboard-teacher"></i></div>
                  <div className="info-estadistica">
                    <h3>Total Instructores</h3>
                    <div className="valor-estadistica">12</div>
                    <p className="detalle-estadistica">Instructores activos</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica exito">
                  <div className="icono-estadistica icono-aprendices"><i className="fas fa-user-graduate"></i></div>
                  <div className="info-estadistica">
                    <h3>Total Aprendices</h3>
                    <div className="valor-estadistica">135</div>
                    <p className="detalle-estadistica">Aprendices registrados</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica advertencia">
                  <div className="icono-estadistica icono-programas"><i className="fas fa-graduation-cap"></i></div>
                  <div className="info-estadistica">
                    <h3>Programas Activos</h3>
                    <div className="valor-estadistica">8</div>
                    <p className="detalle-estadistica">Programas de Formacion</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica peligro">
                  <div className="icono-estadistica icono-similitudes"><i className="fas fa-exclamation-triangle"></i></div>
                  <div className="info-estadistica">
                    <h3>Similitudes Detectadas</h3>
                    <div className="valor-estadistica">15</div>
                    <p className="detalle-estadistica">Requieren Revision</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="seccion-acciones">
            <h2 className="titulo-seccion"><i className="fas fa-bolt"></i> Acciones Rapidas</h2>
            <div className="grid-acciones">
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-users"></i></div>
                <h3>Usuarios Registrados</h3>
                <p>Consulta y administra aprendices, instructores y administradores</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-eye"></i> Ver Usuarios</a>
              </div>
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-chart-bar"></i></div>
                <h3>Generar Reportes</h3>
                <p>Visualiza estadisticas y exporta informes</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-chart-bar"></i> Ver Reportes</a>
              </div>
              <div className="tarjeta-accion">
                <div className="icono-accion"><i className="fas fa-bug"></i></div>
                <h3>Reportes de Fallas</h3>
                <p>Revisa y Gestiona los reportes de errores del sistema</p>
                <a href="#" className="btn-accion-principal"><i className="fas fa-wrench"></i> Ver Reportes</a>
              </div>
            </div>
          </section>

          <section className="seccion-tabla">
            <div className="encabezado-tabla">
              <h3 className="titulo-tabla"><i className="fas fa-folder-open"></i> proyectos Recientes</h3>
              <a href="#" className="enlace-ver-todo">Ver todos <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="contenedor-tabla">
              <table className="tabla-usuarios">
                <thead>
                  <tr>
                    <th>Proyecto</th>
                    <th>Creador</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="info-usuario">
                        <div className="avatar-tabla"><i className="fas fa-microchip"></i></div>
                        <div>
                          <strong>Sistema IoT para Agricultura</strong>
                          <span className="telefono-usuario">Monitoreo inteligente de cultivos</span>
                        </div>
                      </div>
                    </td>
                    <td>Ana Martinez</td>
                    <td>15 Nov 2023</td>
                    <td><span className="badge badge-exito"><i className="fas fa-circle"></i> Activo</span></td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="info-usuario">
                        <div className="avatar-tabla"><i className="fas fa-mobile-alt"></i></div>
                        <div>
                          <strong>App Movil para Turismo Local</strong>
                          <span className="telefono-usuario">Promocion turistica regional</span>
                        </div>
                      </div>
                    </td>
                    <td>Juan Perez</td>
                    <td>14 Nov 2023</td>
                    <td><span className="badge badge-advertencia"><i className="fas fa-circle"></i> Pendiente</span></td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="info-usuario">
                        <div className="avatar-tabla"><i className="fas fa-laptop-code"></i></div>
                        <div>
                          <strong>Plataforma de gestion Academica</strong>
                          <span className="telefono-usuario">Sistema integral de gestion</span>
                        </div>
                      </div>
                    </td>
                    <td>Carlos Rodriguez</td>
                    <td>13 Nov 2023</td>
                    <td><span className="badge badge-exito"><i className="fas fa-circle"></i> Activo</span></td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="seccion-alertas">
            <div className="encabezado-seccion">
              <h2 className="titulo-seccion"><i className="fas fa-exclamation-triangle"></i> Alertas Recientes</h2>
              <a href="#" className="enlace-ver-todo">Ver todas <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="lista-alertas">
              <div className="tarjeta-alerta alerta-urgente">
                <div className="contenido-alerta">
                  <div className="icono-alerta"><i className="fas fa-exclamation-triangle"></i></div>
                  <div className="info-alerta">
                    <h3>Alta Similitud Detectada</h3>
                    <p>proyecto "Sistema de gestion Academica" tiene <strong>65% de similitud</strong> con otro proyecto registrado</p>
                    <div className="meta-alerta">
                      <span className="fecha-alerta"><i className="fas fa-clock"></i> Hace 2 horas</span>
                      <a href="#" className="btn-alerta-accion"><i className="fas fa-search"></i> Revisar</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tarjeta-alerta alerta-advertencia">
                <div className="contenido-alerta">
                  <div className="icono-alerta"><i className="fas fa-bug"></i></div>
                  <div className="info-alerta">
                    <h3>reporte de Falla - Error en Sistema</h3>
                    <p>Usuario reporta error al intentar <strong>subir evidencias de progreso</strong></p>
                    <div className="meta-alerta">
                      <span className="fecha-alerta"><i className="fas fa-clock"></i> Hace 5 horas</span>
                      <a href="#" className="btn-alerta-accion"><i className="fas fa-wrench"></i> Gestionar</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tarjeta-alerta alerta-informativa">
                <div className="contenido-alerta">
                  <div className="icono-alerta"><i className="fas fa-user-plus"></i></div>
                  <div className="info-alerta">
                    <h3>Nuevo Usuario Registrado</h3>
                    <p>Se ha registrado un <strong>nuevo aprendiz</strong> en el sistema</p>
                    <div className="meta-alerta">
                      <span className="fecha-alerta"><i className="fas fa-clock"></i> Hace 1 dia</span>
                      <a href="#" className="btn-alerta-accion"><i className="fas fa-user-check"></i> Verificar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterAdmin />
    </div>
  )
}
