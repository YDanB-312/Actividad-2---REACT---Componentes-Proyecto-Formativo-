import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarInstructor from '../../components/SidebarInstructor/SidebarInstructor';
import FooterInstructor from '../../components/FooterInstructor/FooterInstructor';
import '../../assets/styles/pages/revision-avances.css';

function RevisionAvances() {
  return (
    <div className="modulo-instructor">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Instructor" usuario="Carlos Ruiz | Instr. ADSO" notificaciones={8} />
      <SidebarInstructor activo="revision-avances" />
      <main className="contenido-principal">
        <div className="contenedor-pagina">
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-chart-line"></i> Revisión de Avances</h1>
            <p className="descripcion-pagina">Supervisa y Evalúa el progreso trimestral de los proyectos asignados a tus aprendices.</p>
          </div>
          <section className="seccion-filtros">
            <div className="filtros-titulo"><i className="fas fa-filter"></i> Filtros de búsqueda</div>
            <div className="contenedor-filtros">
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
                <label htmlFor="aprendiz">Aprendiz</label>
                <select id="aprendiz" className="select-filtro" name="aprendiz">
                  <option value="">Todos los aprendices</option>
                  <option value="maria">María González</option>
                  <option value="juan">Juan Pérez</option>
                  <option value="ana">Ana Rodríguez</option>
                </select>
              </div>
              <div className="grupo-filtro">
                <label htmlFor="trimestre">Trimestre</label>
                <select id="trimestre" className="select-filtro" name="trimestre">
                  <option value="">Todos los trimestres</option>
                  <option value="1">Trimestre 1</option>
                  <option value="2">Trimestre 2</option>
                  <option value="3">Trimestre 3</option>
                </select>
              </div>
              <div className="grupo-filtro">
                <label htmlFor="estado">Estado</label>
                <select id="estado" className="select-filtro" name="estado">
                  <option value="">Todos los estados</option>
                  <option value="pendiente">Pendiente de Revisión</option>
                  <option value="revisado">Revisado</option>
                  <option value="aprobado">Aprobado</option>
                  <option value="observado">Con observaciones</option>
                </select>
              </div>
            </div>
          </section>
          <section className="seccion-avances">
            <h2 className="titulo-seccion"><i className="fas fa-clock"></i> Avances Pendientes de Revisión</h2>
            <div className="lista-avances">
              <div className="tarjeta-avance">
                <div className="encabezado-avance">
                  <div className="info-avance">
                    <h3>Sistema de gestión Académica</h3>
                    <div className="meta-avance">
                      <span className="aprendiz-avance"><i className="fas fa-user-graduate"></i> María González</span>
                      <span className="trimestre-avance"><i className="fas fa-flag"></i> Trimestre 2</span>
                      <span className="fecha-avance"><i className="fas fa-calendar"></i> 15 Nov 2023</span>
                    </div>
                  </div>
                  <span className="badge badge-advertencia">Pendiente</span>
                </div>
                <div className="contenido-avance">
                  <div className="seccion-contenido">
                    <h4><i className="fas fa-check-circle"></i> Avances Realizados:</h4>
                    <p>Se desarrolló el módulo de autenticación y la estructura de la base de datos. Se implementaron las primeras funcionalidades del sistema de calificaciones y se creó la interfaz principal del administrador.</p>
                  </div>
                  <div className="seccion-contenido">
                    <h4><i className="fas fa-exclamation-triangle"></i> Dificultades Encontradas:</h4>
                    <p>Complejidad en la integración de diferentes componentes del sistema. Problemas de rendimiento en consultas complejas a la base de datos que requirieron optimización.</p>
                  </div>
                  <div className="seccion-contenido">
                    <h4><i className="fas fa-road"></i> Próximos Pasos:</h4>
                    <p>Optimizar las consultas a la base de datos identificadas. Desarrollar el módulo de reportes y comenzar con las pruebas de integración del sistema completo.</p>
                  </div>
                  <div className="seccion-contenido">
                    <h4><i className="fas fa-paperclip"></i> Evidencias Adjuntas:</h4>
                    <div className="lista-evidencias">
                      <span className="evidencia-item"><i className="fas fa-file-pdf"></i> documentación técnica.pdf</span>
                      <span className="evidencia-item"><i className="fas fa-file-image"></i> Capturas_interfaz.zip</span>
                    </div>
                  </div>
                </div>
                <div className="acciones-avance">
                  <form action="#">
                    <div className="evaluacion-avance">
                      <label className="etiqueta-evaluacion">Evaluación:</label>
                      <select className="select-evaluacion" name="decision">
                        <option value="">Seleccionar Evaluación</option>
                        <option value="aprobado">Aprobado</option>
                        <option value="observado">Con observaciones</option>
                        <option value="rechazado">Requiere mejora</option>
                      </select>
                    </div>
                    <div className="comentarios-avance">
                      <label className="etiqueta-comentarios">Comentarios para el aprendiz:</label>
                      <textarea className="textarea-comentarios" name="observacion" placeholder="Agrega tus comentarios y recomendaciones..."></textarea>
                    </div>
                    <div className="botones-accion">
                      <a href="#" className="btn btn-secundario"><i className="fas fa-times"></i> Cancelar</a>
                      <button type="submit" className="btn btn-primario"><i className="fas fa-check"></i> Guardar Evaluación</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="tarjeta-avance">
                <div className="encabezado-avance">
                  <div className="info-avance">
                    <h3>App Móvil para Inventarios</h3>
                    <div className="meta-avance">
                      <span className="aprendiz-avance"><i className="fas fa-user-graduate"></i> Juan Pérez</span>
                      <span className="trimestre-avance"><i className="fas fa-flag"></i> Trimestre 1</span>
                      <span className="fecha-avance"><i className="fas fa-calendar"></i> 10 Nov 2023</span>
                    </div>
                  </div>
                  <span className="badge badge-advertencia">Pendiente</span>
                </div>
                <div className="contenido-avance">
                  <div className="seccion-contenido">
                    <h4><i className="fas fa-check-circle"></i> Avances Realizados:</h4>
                    <p>Se completó la investigación de Tecnologías móviles y se definió la arquitectura de la aplicación. Se desarrollaron los prototipos de interfaz y se configuró el entorno de desarrollo.</p>
                  </div>
                  <div className="seccion-contenido">
                    <h4><i className="fas fa-exclamation-triangle"></i> Dificultades Encontradas:</h4>
                    <p>Problemas de compatibilidad entre diferentes versiones de Android. Dificultad para integrar el lector de código de barras con la cámara del dispositivo.</p>
                  </div>
                  <div className="seccion-contenido">
                    <h4><i className="fas fa-road"></i> Próximos Pasos:</h4>
                    <p>Implementar la funcionalidad de escaneo de códigos de barras. Desarrollar la sincronización con la base de datos en la nube y crear las primeras pruebas de usuario.</p>
                  </div>
                  <div className="seccion-contenido">
                    <h4><i className="fas fa-paperclip"></i> Evidencias Adjuntas:</h4>
                    <div className="lista-evidencias">
                      <span className="evidencia-item"><i className="fas fa-file-pdf"></i> Especificaciones_técnicas.pdf</span>
                      <span className="evidencia-item"><i className="fas fa-file-code"></i> Prototipo_interfaz.fig</span>
                    </div>
                  </div>
                </div>
                <div className="acciones-avance">
                  <form action="#">
                    <div className="evaluacion-avance">
                      <label className="etiqueta-evaluacion">Evaluación:</label>
                      <select className="select-evaluacion" name="decision">
                        <option value="">Seleccionar Evaluación</option>
                        <option value="aprobado">Aprobado</option>
                        <option value="observado">Con observaciones</option>
                        <option value="rechazado">Requiere mejora</option>
                      </select>
                    </div>
                    <div className="comentarios-avance">
                      <label className="etiqueta-comentarios">Comentarios para el aprendiz:</label>
                      <textarea className="textarea-comentarios" name="observacion" placeholder="Agrega tus comentarios y recomendaciones..."></textarea>
                    </div>
                    <div className="botones-accion">
                      <a href="#" className="btn btn-secundario"><i className="fas fa-times"></i> Cancelar</a>
                      <button type="submit" className="btn btn-primario"><i className="fas fa-check"></i> Guardar Evaluación</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="seccion-historial">
            <h2 className="titulo-seccion"><i className="fas fa-history"></i> Historial de Avances Revisados</h2>
            <div className="lista-historial">
              <div className="tarjeta-historial">
                <div className="encabezado-historial">
                  <div className="info-historial">
                    <h3>Plataforma E-learning para Cursos Técnicos</h3>
                    <div className="meta-historial">
                      <span className="aprendiz-historial"><i className="fas fa-user-graduate"></i> Ana Rodríguez</span>
                      <span className="trimestre-historial"><i className="fas fa-flag"></i> Trimestre 1</span>
                      <span className="fecha-historial"><i className="fas fa-calendar"></i> 5 Nov 2023</span>
                    </div>
                  </div>
                  <span className="badge badge-exito"><i className="fas fa-check-circle"></i> Aprobado</span>
                </div>
                <div className="contenido-historial">
                  <div className="resumen-avance">
                    <p><strong>Avances:</strong> Se completó la investigación de mercado y el Análisis de requerimientos. Se diseñó la arquitectura del sistema y se seleccionaron las Tecnologías.</p>
                  </div>
                  <div className="evaluacion-instructor">
                    <h4><i className="fas fa-user-tie"></i> Evaluación del Instructor:</h4>
                    <div className="comentario-instructor">
                      <p>Excelente trabajo en la fase de investigación y planificación. La documentación está completa y bien estructurada. Se recomienda enfocarse en el desarrollo del módulo de usuarios para el próximo trimestre.</p>
                      <span className="fecha-evaluacion">Evaluado el: 8 Nov 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tarjeta-historial">
                <div className="encabezado-historial">
                  <div className="info-historial">
                    <h3>Sistema de gestión Académica</h3>
                    <div className="meta-historial">
                      <span className="aprendiz-historial"><i className="fas fa-user-graduate"></i> María González</span>
                      <span className="trimestre-historial"><i className="fas fa-flag"></i> Trimestre 1</span>
                      <span className="fecha-historial"><i className="fas fa-calendar"></i> 1 Nov 2023</span>
                    </div>
                  </div>
                  <span className="badge badge-advertencia"><i className="fas fa-exclamation-circle"></i> Con observaciones</span>
                </div>
                <div className="contenido-historial">
                  <div className="resumen-avance">
                    <p><strong>Avances:</strong> Se realizó el Análisis inicial y se definieron los requerimientos funcionales. Se crearon los primeros diagramas de la base de datos.</p>
                  </div>
                  <div className="evaluacion-instructor">
                    <h4><i className="fas fa-user-tie"></i> Evaluación del Instructor:</h4>
                    <div className="comentario-instructor">
                      <p>Buen inicio, pero se requiere mayor detalle en la especificación de requerimientos no funcionales. Se sugiere incluir diagramas de casos de uso y profundizar en el Análisis de seguridad del sistema.</p>
                      <span className="fecha-evaluacion">Evaluado el: 3 Nov 2023</span>
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

export default RevisionAvances;
