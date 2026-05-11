// RegistrarAvances - Pagina para registrar el progreso trimestral de proyectos formativos con formulario e historial
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarAprendiz from '../../components/SidebarAprendiz/SidebarAprendiz';
import FooterAprendiz from '../../components/FooterAprendiz/FooterAprendiz';
import '../../assets/styles/pages/registrar-avances.css';

function RegistrarAvances() {
  return (
    <div className="modulo-aprendiz">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Aprendiz" usuario="Maria Gonzalez | ADSO" notificaciones={5} />
      <SidebarAprendiz activo="registrar-avances" />
      <main className="contenido-principal">
        <div className="contenedor-pagina">
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-chart-line"></i> Registrar Avances</h1>
            <p className="descripcion-pagina">Registra el progreso trimestral de tus proyectos formativos y lleva un control detallado de tus Avances.</p>
          </div>
          <section className="seccion-proyectos">
            <div className="tarjeta-proyecto">
              <div className="encabezado-proyecto">
                <div className="info-proyecto">
                  <h3>Sistema de gestion Academica</h3>
                  <div className="meta-proyecto">
                    <div className="meta-item"><i className="fas fa-user-tie"></i><span>Instructor: Carlos Ruiz</span></div>
                    <div className="meta-item"><i className="fas fa-calendar"></i><span>Fecha limite: 15 Dic 2023</span></div>
                    <div className="meta-item"><span className="badge badge-exito">Aprobado</span></div>
                  </div>
                </div>
              </div>
              <p>Plataforma web integral para la gestion de calificaciones, asistencia y recursos educativos en instituciones de educacion media.</p>
            </div>
          </section>
          <section className="formulario-avances">
            <h2 className="titulo-seccion-formulario">Registrar Nuevo Avance</h2>
            <div className="mensaje-feedback mensaje-exito oculto">
              <i className="fas fa-check-circle"></i>
              <span>Operacion realizada exitosamente.</span>
            </div>
            <div className="mensaje-feedback mensaje-error oculto">
              <i className="fas fa-exclamation-circle"></i>
              <span>Ha ocurrido un error. Intenta nuevamente.</span>
            </div>
            <form id="formularioAvance" action="#">
              <div className="grupo-formulario">
                <label className="etiqueta-formulario">Trimestre *</label>
                <div className="selector-trimestre">
                  <div className="opcion-trimestre">
                    <input type="radio" id="trimestre1" name="trimestre" value="1" checked />
                    <label htmlFor="trimestre1" className="etiqueta">
                      <div className="icono-trimestre"><i className="fas fa-flag"></i></div>
                      <div>Trimestre 1</div>
                    </label>
                  </div>
                  <div className="opcion-trimestre">
                    <input type="radio" id="trimestre2" name="trimestre" value="2" />
                    <label htmlFor="trimestre2" className="etiqueta">
                      <div className="icono-trimestre"><i className="fas fa-flag-checkered"></i></div>
                      <div>Trimestre 2</div>
                    </label>
                  </div>
                  <div className="opcion-trimestre">
                    <input type="radio" id="trimestre3" name="trimestre" value="3" />
                    <label htmlFor="trimestre3" className="etiqueta">
                      <div className="icono-trimestre"><i className="fas fa-trophy"></i></div>
                      <div>Trimestre 3</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grupo-formulario">
                <label className="etiqueta-formulario" htmlFor="descripcion_logros">Avances Realizados *</label>
                <textarea className="textarea" id="descripcion_logros" name="descripcion_logros" placeholder="Describe los Avances que has logrado en este trimestre..." required></textarea>
              </div>
              <div className="grupo-formulario">
                <label className="etiqueta-formulario" htmlFor="dificultades">Dificultades Encontradas</label>
                <textarea className="textarea" id="dificultades" name="dificultades" placeholder="Describe las dificultades o desafios que enfrentaste durante este periodo..."></textarea>
              </div>
              <div className="grupo-formulario">
                <label className="etiqueta-formulario" htmlFor="proximos-pasos">Proximos Pasos *</label>
                <textarea className="textarea" id="proximos-pasos" name="proximos_pasos" placeholder="Describe los Proximos pasos que planeas realizar en el siguiente trimestre..." required></textarea>
              </div>
              <div className="grupo-formulario">
                <label className="etiqueta-formulario" htmlFor="evidencias">Evidencias (Opcional)</label>
                <input type="file" className="textarea" id="evidencias" name="url_evidencia" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                <small className="texto-archivo">Formatos aceptados: PDF, Word, JPG, PNG (Max. 10MB por archivo)</small>
              </div>
              <div className="acciones-formulario">
                <button type="button" className="btn btn-secundario"><i className="fas fa-times"></i> Cancelar</button>
                <button type="submit" className="btn btn-primario"><i className="fas fa-save"></i> Guardar Avance</button>
              </div>
            </form>
          </section>
          <section className="seccion-historial">
            <div className="tarjeta-historial">
              <h2 className="titulo-seccion-historial"><i className="fas fa-history"></i> Historial de Avances</h2>
              <div className="lista-avances">
                <div className="item-avance">
                  <div className="encabezado-avance">
                    <span className="trimestre-avance">Trimestre 1 - Avance Inicial</span>
                    <span className="fecha-avance">15 Sept 2023</span>
                  </div>
                  <div className="contenido-avance">
                    <h4>Avances Realizados:</h4>
                    <p>Se completo la investigacion inicial y el Analisis de requerimientos. Se diseno la arquitectura basica del sistema y se crearon los primeros prototipos de interfaz.</p>
                    <div className="etiqueta-seccion">Dificultades Encontradas:</div>
                    <p>Problemas para definir el alcance exacto del proyecto y seleccionar las Tecnologias mas adecuadas.</p>
                    <div className="etiqueta-seccion">Proximos Pasos:</div>
                    <p>Iniciar el desarrollo del modulo de autenticacion y la base de datos. Realizar pruebas de concepto con las Tecnologias seleccionadas.</p>
                  </div>
                </div>
                <div className="item-avance">
                  <div className="encabezado-avance">
                    <span className="trimestre-avance">Trimestre 2 - desarrollo Inicial</span>
                    <span className="fecha-avance">15 Nov 2023</span>
                  </div>
                  <div className="contenido-avance">
                    <h4>Avances Realizados:</h4>
                    <p>Se desarrollo el modulo de autenticacion y la estructura de la base de datos. Se implementaron las primeras funcionalidades del sistema de calificaciones.</p>
                    <div className="etiqueta-seccion">Dificultades Encontradas:</div>
                    <p>Complejidad en la integracion de diferentes componentes del sistema. Problemas de rendimiento en consultas complejas a la base de datos.</p>
                    <div className="etiqueta-seccion">Proximos Pasos:</div>
                    <p>Optimizar las consultas a la base de datos. Desarrollar el modulo de reportes y comenzar con las pruebas de integracion.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterAprendiz />
    </div>
  );
}

export default RegistrarAvances;
