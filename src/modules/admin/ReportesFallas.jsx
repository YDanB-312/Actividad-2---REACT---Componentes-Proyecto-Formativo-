import GovernmentBar from '../../components/GovernmentBar/GovernmentBar'
import Header from '../../components/Header/Header';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';
import '../../assets/styles/pages/reportes-fallas.css'

export default function ReportesFallas() {
  return (
    <div className="modulo-admin">
      <GovernmentBar />

      <Header titulo="ProyecTwin - Panel de Administracion" usuario="Admin Sistema" notificaciones={12} />

      <SidebarAdmin activo="reportes-fallas" />

      <main className="contenido-principal">
        <div className="contenedor-gestion">
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-bug"></i> Reportes de Fallas</h1>
          </div>

          <section className="seccion-reporte">
            <h2 className="titulo-seccion"><i className="fas fa-filter"></i> Filtros de Busqueda</h2>
            <div className="tarjeta">
              <div className="formulario-filtros">
                <div className="grupo-campo">
                  <label htmlFor="filtroEstado"><i className="fas fa-tag"></i> Estado</label>
                  <select id="filtroEstado" name="filtro_estado">
                    <option value="">Todos los estados</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="en_proceso">En Proceso</option>
                    <option value="resuelto">Resuelto</option>
                    <option value="cerrado">Cerrado</option>
                  </select>
                </div>
                <div className="grupo-campo">
                  <label htmlFor="filtroFecha"><i className="fas fa-calendar"></i> Fecha</label>
                  <input type="date" id="filtroFecha" name="filtro_fecha" />
                </div>
                <div className="grupo-campo">
                  <label htmlFor="filtroUsuario"><i className="fas fa-user"></i> Buscar por usuario</label>
                  <input type="text" id="filtroUsuario" placeholder="Nombre o correo del usuario" name="filtro_usuario" />
                </div>
                <div className="grupo-campo">
                  <div className="botones-filtros">
                    <button className="btn-primario" type="button"><i className="fas fa-search"></i> Buscar</button>
                    <button className="btn-secundario" type="button"><i className="fas fa-eraser"></i> Limpiar</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="seccion-reporte">
            <h2 className="titulo-seccion"><i className="fas fa-chart-pie"></i> Resumen de reportes</h2>
            <div className="tarjeta">
              <div className="grid-estadisticas">
                <div className="tarjeta-estadistica advertencia">
                  <div className="icono-estadistica icono-programas"><i className="fas fa-exclamation-circle"></i></div>
                  <div className="info-estadistica">
                    <h3>Pendientes</h3>
                    <div className="valor-estadistica">12</div>
                    <p className="detalle-estadistica">Requieren atencion inmediata</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica informativa">
                  <div className="icono-estadistica icono-instructores"><i className="fas fa-spinner"></i></div>
                  <div className="info-estadistica">
                    <h3>En Proceso</h3>
                    <div className="valor-estadistica">5</div>
                    <p className="detalle-estadistica">Siendo atendidos actualmente</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica exito">
                  <div className="icono-estadistica icono-aprendices"><i className="fas fa-check-circle"></i></div>
                  <div className="info-estadistica">
                    <h3>Resueltos</h3>
                    <div className="valor-estadistica">28</div>
                    <p className="detalle-estadistica">Fallas solucionadas</p>
                  </div>
                </div>
                <div className="tarjeta-estadistica peligro">
                  <div className="icono-estadistica icono-similitudes"><i className="fas fa-clipboard-list"></i></div>
                  <div className="info-estadistica">
                    <h3>Total Reportes</h3>
                    <div className="valor-estadistica">45</div>
                    <p className="detalle-estadistica">Reportes registrados</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="seccion-reporte">
            <h2 className="titulo-seccion"><i className="fas fa-list-alt"></i> Listado de reportes</h2>
            <div className="contenedor-tabla">
              <div className="encabezado-tabla">
                <h3 className="titulo-tabla"><i className="fas fa-table"></i> Reportes de Fallas</h3>
                <span className="total-registros">Mostrando 6 de 45 reportes</span>
              </div>
              <table className="tabla-reportes">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Carlos Rodriguez Diaz</td>
                    <td className="descripcion-corta" title="Error al cargar la pagina de Dashboard, muestra pantalla blanca despues de iniciar sesion">Error al cargar la pagina de Dashboard, muestra pantalla blanca despues de iniciar sesion</td>
                    <td><span className="badge badge-advertencia"><i className="fas fa-clock"></i> Pendiente</span></td>
                    <td>12/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <button className="btn-accion-tabla btn-ver" title="Cambiar estado" type="button"><i className="fas fa-exchange-alt"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Maria Gonzalez Torres</td>
                    <td className="descripcion-corta" title="No se pueden subir archivos PDF en la seccion de evidencias del proyecto">No se pueden subir archivos PDF en la seccion de evidencias del proyecto</td>
                    <td><span className="badge badge-advertencia"><i className="fas fa-clock"></i> Pendiente</span></td>
                    <td>11/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <button className="btn-accion-tabla btn-ver" title="Cambiar estado" type="button"><i className="fas fa-exchange-alt"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Andres Martinez Lopez</td>
                    <td className="descripcion-corta" title="El sistema no envia Notificaciones cuando un instructor revisa un Avance">El sistema no envia Notificaciones cuando un instructor revisa un Avance</td>
                    <td><span className="badge badge-primario"><i className="fas fa-cog"></i> En Proceso</span></td>
                    <td>10/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <button className="btn-accion-tabla btn-ver" title="Cambiar estado" type="button"><i className="fas fa-exchange-alt"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Laura Sanchez Perez</td>
                    <td className="descripcion-corta" title="El boton de Cerrar sesion no funciona correctamente en navegador Chrome">El boton de Cerrar sesion no funciona correctamente en navegador Chrome</td>
                    <td><span className="badge badge-primario"><i className="fas fa-cog"></i> En Proceso</span></td>
                    <td>09/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <button className="btn-accion-tabla btn-ver" title="Cambiar estado" type="button"><i className="fas fa-exchange-alt"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Diego Ramirez Castro</td>
                    <td className="descripcion-corta" title="Error en la generacion de reportes PDF, el archivo descargado esta corrupto">Error en la generacion de reportes PDF, el archivo descargado esta corrupto</td>
                    <td><span className="badge badge-exito"><i className="fas fa-check"></i> Resuelto</span></td>
                    <td>08/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <button className="btn-accion-tabla btn-ver" title="Cambiar estado" type="button"><i className="fas fa-exchange-alt"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Patricia Morales Vega</td>
                    <td className="descripcion-corta" title="Las imagenes de los logos de proyectos no se muestran en la vista de lista">Las imagenes de los logos de proyectos no se muestran en la vista de lista</td>
                    <td><span className="badge badge-neutral"><i className="fas fa-lock"></i> Cerrado</span></td>
                    <td>05/04/2026</td>
                    <td>
                      <div className="acciones-tabla">
                        <a href="#" className="btn-accion-tabla btn-ver" title="Ver detalle"><i className="fas fa-eye"></i></a>
                        <button className="btn-accion-tabla btn-ver" title="Cambiar estado" type="button"><i className="fas fa-exchange-alt"></i></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="estado-vacio oculto">
                <div className="icono-vacio"><i className="fas fa-bug"></i></div>
                <h3>No hay reportes de fallas</h3>
                <p>Los reportes enviados por los usuarios apareceran aqui.</p>
              </div>
              <div className="contenedor-paginacion">
                <span className="info-paginacion">Mostrando 1 - 6 de 45 reportes</span>
                <div className="paginacion">
                  <button className="btn-paginacion" disabled title="Anterior" type="button"><i className="fas fa-chevron-left"></i></button>
                  <button className="btn-paginacion activa" type="button">1</button>
                  <button className="btn-paginacion" type="button">2</button>
                  <button className="btn-paginacion" type="button">3</button>
                  <button className="btn-paginacion" type="button">4</button>
                  <button className="btn-paginacion" type="button">5</button>
                  <button className="btn-paginacion" type="button">6</button>
                  <button className="btn-paginacion" type="button">7</button>
                  <button className="btn-paginacion" title="Siguiente" type="button"><i className="fas fa-chevron-right"></i></button>
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
