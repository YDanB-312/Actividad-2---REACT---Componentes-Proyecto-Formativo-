import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarInstructor from '../../components/SidebarInstructor/SidebarInstructor';
import FooterInstructor from '../../components/FooterInstructor/FooterInstructor';
import '../../assets/styles/pages/historial-revisiones.css';

function HistorialRevisiones() {
  return (
    <div className="modulo-instructor">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Instructor" usuario="Carlos Ruiz | Instr. ADSO" notificaciones={8} />
      <SidebarInstructor activo="historial-revisiones" />
      <main className="contenido-principal">
        <div className="contenedor-pagina">
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-history"></i> Historial de Revisiones</h1>
            <p className="descripcion-pagina">Consulta el Historial completo de Revisiones de proyectos realizadas por los instructores del sistema.</p>
          </div>
          <section className="seccion-filtros">
            <div className="filtros-titulo"><i className="fas fa-filter"></i> Filtros de búsqueda</div>
            <div className="contenedor-filtros">
              <div className="grupo-filtro">
                <label htmlFor="instructor">Instructor</label>
                <select id="instructor" className="select-filtro" name="instructor">
                  <option value="">Todos los instructores</option>
                  <option value="ruiz">Carlos Ruiz</option>
                  <option value="gomez">Ana Gómez</option>
                  <option value="lopez">Miguel López</option>
                  <option value="martinez">Laura Martínez</option>
                </select>
              </div>
              <div className="grupo-filtro">
                <label htmlFor="aprendiz">Aprendiz</label>
                <select id="aprendiz" className="select-filtro" name="aprendiz">
                  <option value="">Todos los aprendices</option>
                  <option value="maria">María González</option>
                  <option value="juan">Juan Pérez</option>
                  <option value="ana">Ana Rodríguez</option>
                  <option value="carlos">Carlos Sánchez</option>
                </select>
              </div>
              <div className="grupo-filtro">
                <label htmlFor="proyecto">Proyecto</label>
                <select id="proyecto" className="select-filtro" name="proyecto">
                  <option value="">Todos los proyectos</option>
                  <option value="sistema-gestión">Sistema de gestión Académica</option>
                  <option value="app-inventarios">App Móvil para Inventarios</option>
                  <option value="plataforma-elearning">Plataforma E-learning</option>
                </select>
              </div>
              <div className="grupo-filtro">
                <label htmlFor="estado">Estado</label>
                <select id="estado" className="select-filtro" name="estado">
                  <option value="">Todos los estados</option>
                  <option value="aprobado">Aprobado</option>
                  <option value="rechazado">Rechazado</option>
                  <option value="observado">Con observaciones</option>
                  <option value="pendiente">Pendiente</option>
                </select>
              </div>
              <div className="grupo-filtro">
                <label htmlFor="fecha">Fecha</label>
                <select id="fecha" className="select-filtro" name="fecha">
                  <option value="">Cualquier fecha</option>
                  <option value="hoy">Hoy</option>
                  <option value="semana">Última semana</option>
                  <option value="mes">Último mes</option>
                  <option value="trimestre">Último trimestre</option>
                </select>
              </div>
            </div>
          </section>
          <div className="estadisticas-revisiones">
            <div className="tarjeta-estadistica">
              <div className="icono-estadistica"><i className="fas fa-clipboard-check"></i></div>
              <div className="info-estadistica">
                <span className="valor-estadistica">347</span>
                <span className="detalle-estadistica">Total Revisiones</span>
              </div>
            </div>
            <div className="tarjeta-estadistica">
              <div className="icono-estadistica"><i className="fas fa-check-circle"></i></div>
              <div className="info-estadistica">
                <span className="valor-estadistica">284</span>
                <span className="detalle-estadistica">Aprobados</span>
              </div>
            </div>
            <div className="tarjeta-estadistica">
              <div className="icono-estadistica"><i className="fas fa-exclamation-circle"></i></div>
              <div className="info-estadistica">
                <span className="valor-estadistica">42</span>
                <span className="detalle-estadistica">Con Observaciones</span>
              </div>
            </div>
            <div className="tarjeta-estadistica">
              <div className="icono-estadistica"><i className="fas fa-times-circle"></i></div>
              <div className="info-estadistica">
                <span className="valor-estadistica">21</span>
                <span className="detalle-estadistica">Rechazados</span>
              </div>
            </div>
          </div>
          <section className="seccion-revisiones">
            <div className="encabezado-seccion">
              <h2 className="titulo-seccion"><i className="fas fa-list"></i> Historial de Revisiones</h2>
              <div className="acciones-exportar">
                <button className="btn-secundario" type="button"><i className="fas fa-file-export"></i> Exportar CSV</button>
                <button className="btn-secundario" type="button"><i className="fas fa-print"></i> Imprimir</button>
              </div>
            </div>
            <div className="lista-revisiones">
              <div className="tarjeta-revision">
                <div className="encabezado-revision">
                  <div className="info-revision">
                    <h3>Sistema de gestión Académica</h3>
                    <div className="meta-revision">
                      <span className="instructor-revision"><i className="fas fa-user-tie"></i> Carlos Ruiz</span>
                      <span className="aprendiz-revision"><i className="fas fa-user-graduate"></i> María González</span>
                      <span className="fecha-revision"><i className="fas fa-calendar"></i> 15 Nov 2023</span>
                    </div>
                  </div>
                  <span className="badge badge-exito"><i className="fas fa-check-circle"></i> Aprobado</span>
                </div>
                <div className="contenido-revision">
                  <div className="detalles-revision">
                    <div className="campo-revision"><label>Tipo de Revisión:</label><span>Revisión de proyecto</span></div>
                    <div className="campo-revision"><label>Fecha de Revisión:</label><span>15/11/2023 14:30</span></div>
                    <div className="campo-revision"><label>Tiempo de Revisión:</label><span>2 días</span></div>
                  </div>
                  <div className="comentarios-revision">
                    <h4><i className="fas fa-comment"></i> Comentarios del Instructor:</h4>
                    <div className="contenido-comentarios">
                      <p>Excelente Propuesta de proyecto. La documentación está completa y bien estructurada. Se sugiere considerar la integración con el sistema de biblioteca existente para unificar los recursos académicos.</p>
                    </div>
                  </div>
                  <div className="acciones-revision">
                    <a href="#" className="btn-ver"><i className="fas fa-eye"></i> Ver Detalles Completos</a>
                    <button className="btn-secundario" type="button"><i className="fas fa-download"></i> Descargar PDF</button>
                  </div>
                </div>
              </div>
              <div className="tarjeta-revision">
                <div className="encabezado-revision">
                  <div className="info-revision">
                    <h3>App Móvil para Inventarios</h3>
                    <div className="meta-revision">
                      <span className="instructor-revision"><i className="fas fa-user-tie"></i> Ana Gómez</span>
                      <span className="aprendiz-revision"><i className="fas fa-user-graduate"></i> Juan Pérez</span>
                      <span className="fecha-revision"><i className="fas fa-calendar"></i> 14 Nov 2023</span>
                    </div>
                  </div>
                  <span className="badge badge-advertencia"><i className="fas fa-exclamation-circle"></i> Con Observaciones</span>
                </div>
                <div className="contenido-revision">
                  <div className="detalles-revision">
                    <div className="campo-revision"><label>Tipo de Revisión:</label><span>Revisión de Avance - Trimestre 1</span></div>
                    <div className="campo-revision"><label>Fecha de Revisión:</label><span>14/11/2023 10:15</span></div>
                    <div className="campo-revision"><label>Tiempo de Revisión:</label><span>1 día</span></div>
                  </div>
                  <div className="comentarios-revision">
                    <h4><i className="fas fa-comment"></i> Comentarios del Instructor:</h4>
                    <div className="contenido-comentarios">
                      <p>Buen progreso en el desarrollo inicial. Se requiere mayor detalle en la documentación de la API y considerar el manejo de errores en la sincronización de datos. Se sugiere implementar un sistema de backup para los datos locales.</p>
                    </div>
                  </div>
                  <div className="acciones-revision">
                    <a href="#" className="btn-ver"><i className="fas fa-eye"></i> Ver Detalles Completos</a>
                    <button className="btn-secundario" type="button"><i className="fas fa-download"></i> Descargar PDF</button>
                  </div>
                </div>
              </div>
              <div className="tarjeta-revision">
                <div className="encabezado-revision">
                  <div className="info-revision">
                    <h3>Plataforma E-learning para Cursos Técnicos</h3>
                    <div className="meta-revision">
                      <span className="instructor-revision"><i className="fas fa-user-tie"></i> Miguel López</span>
                      <span className="aprendiz-revision"><i className="fas fa-user-graduate"></i> Ana Rodríguez</span>
                      <span className="fecha-revision"><i className="fas fa-calendar"></i> 12 Nov 2023</span>
                    </div>
                  </div>
                  <span className="badge badge-peligro"><i className="fas fa-times-circle"></i> Rechazado</span>
                </div>
                <div className="contenido-revision">
                  <div className="detalles-revision">
                    <div className="campo-revision"><label>Tipo de Revisión:</label><span>Revisión de proyecto</span></div>
                    <div className="campo-revision"><label>Fecha de Revisión:</label><span>12/11/2023 16:45</span></div>
                    <div className="campo-revision"><label>Tiempo de Revisión:</label><span>3 días</span></div>
                  </div>
                  <div className="comentarios-revision">
                    <h4><i className="fas fa-comment"></i> Comentarios del Instructor:</h4>
                    <div className="contenido-comentarios">
                      <p>El proyecto presenta similitud del 78% con una Propuesta anterior. Se requiere reformulación completa del enfoque y metodología. Se sugiere enfocarse en un nicho específico de cursos técnicos no cubiertos actualmente.</p>
                    </div>
                  </div>
                  <div className="acciones-revision">
                    <a href="#" className="btn-ver"><i className="fas fa-eye"></i> Ver Detalles Completos</a>
                    <button className="btn-secundario" type="button"><i className="fas fa-download"></i> Descargar PDF</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="paginacion">
              <button className="btn-paginacion" type="button"><i className="fas fa-chevron-left"></i></button>
              <button className="btn-paginacion activa" type="button">1</button>
              <button className="btn-paginacion" type="button">2</button>
              <button className="btn-paginacion" type="button">3</button>
              <button className="btn-paginacion" type="button">4</button>
              <button className="btn-paginacion" type="button"><i className="fas fa-chevron-right"></i></button>
            </div>
          </section>
        </div>
      </main>
      <FooterInstructor />
    </div>
  );
}

export default HistorialRevisiones;
