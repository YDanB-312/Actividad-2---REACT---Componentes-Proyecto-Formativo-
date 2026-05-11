import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarInstructor from '../../components/SidebarInstructor/SidebarInstructor';
import FooterInstructor from '../../components/FooterInstructor/FooterInstructor';
import '../../assets/styles/pages/mensajes.css';

function MensajesInstructor() {
  return (
    <div className="modulo-instructor">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Instructor" usuario="Carlos Ruiz | Instr. ADSO" notificaciones={8} />
      <SidebarInstructor activo="mensajes" />
      <main className="contenido-principal">
        <div className="contenedor-alertas">
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-envelope"></i> Mensajes</h1>
            <a href="#" className="btn-primario"><i className="fas fa-plus"></i> Nuevo mensaje</a>
          </div>
          <div className="contenedor-mensajes">
            <div className="lista-contactos">
              <div className="pestanas-chat">
                <a href="#" className="pestana-chat activa"><i className="fas fa-user"></i> Contactos</a>
                <a href="#" className="pestana-chat"><i className="fas fa-users"></i> Ficha</a>
                <a href="#" className="pestana-chat"><i className="fas fa-folder-open"></i> Proyecto</a>
              </div>
              <div className="buscador-contactos">
                <input type="text" className="input-buscar" placeholder="Buscar contacto..." name="busqueda" />
              </div>
              <ul className="contactos">
                <li className="contacto activo">
                  <div className="avatar-contacto">AM</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Ana Martínez</h4>
                      <span className="fecha-msg">14:30</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">Profe, ya subí el Avance del trimestre 2</span>
                      <span className="contador-no-leidos">3</span>
                    </div>
                  </div>
                </li>
                <li className="contacto">
                  <div className="avatar-contacto">JP</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Juan Pérez</h4>
                      <span className="fecha-msg">11:15</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">¿Cuándo es la fecha límite?</span>
                      <span className="contador-no-leidos">1</span>
                    </div>
                  </div>
                </li>
                <li className="contacto">
                  <div className="avatar-contacto">LG</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Laura Gómez</h4>
                      <span className="fecha-msg">Ayer</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">Gracias por la retroalimentación</span>
                    </div>
                  </div>
                </li>
                <li className="contacto">
                  <div className="avatar-contacto">CR</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Carlos Ruiz</h4>
                      <span className="fecha-msg">Lun</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">Entendido, haré los cambios</span>
                    </div>
                  </div>
                </li>
                <li className="contacto">
                  <div className="avatar-contacto">DS</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Diana Sánchez</h4>
                      <span className="fecha-msg">Dom</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">¿Puedo entregar el viernes?</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="vista-grupo oculto">
                <div className="cabecera-grupo">
                  <div className="avatar-grupo"><i className="fas fa-users"></i></div>
                  <div className="info-grupo">
                    <h4>Chat de Ficha</h4>
                    <p>ADSO-2568 &middot; 18 aprendices</p>
                  </div>
                </div>
                <ul className="miembros-grupo">
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">AM</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Ana Martínez</span>
                      <span className="estado-miembro en-linea"><i className="fas fa-circle"></i> En línea</span>
                    </div>
                  </li>
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">JP</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Juan Pérez</span>
                      <span className="estado-miembro en-linea"><i className="fas fa-circle"></i> En línea</span>
                    </div>
                  </li>
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">LG</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Laura Gómez</span>
                      <span className="estado-miembro"><i className="fas fa-circle"></i> Ausente</span>
                    </div>
                  </li>
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">CR</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Carlos Ruiz</span>
                      <span className="estado-miembro"><i className="fas fa-circle"></i> Desconectado</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel-conversacion">
              <div className="cabecera-chat">
                <div className="avatar-cabecera">AM</div>
                <div className="info-cabecera">
                  <h3>Ana Martínez</h3>
                  <p><i className="fas fa-circle icono-mini"></i> En línea</p>
                </div>
              </div>
              <div className="zona-mensajes">
                <div className="separador-fecha"><span>Hoy</span></div>
                <div className="mensaje mensaje-recibido">
                  <div className="avatar-mensaje">AM</div>
                  <div className="burbuja">
                    <p className="texto-mensaje">Buenos días, profe. Quería consultarle sobre los requisitos del Avance del segundo trimestre.</p>
                    <span className="hora-mensaje">09:15</span>
                  </div>
                </div>
                <div className="mensaje mensaje-propio">
                  <div className="burbuja">
                    <p className="texto-mensaje">Hola Ana. Debes incluir los logros alcanzados, dificultades encontradas y los próximos pasos del proyecto.</p>
                    <span className="hora-mensaje">09:20 <span className="estado-mensaje"><i className="fas fa-check-double"></i></span></span>
                  </div>
                </div>
                <div className="mensaje mensaje-recibido">
                  <div className="avatar-mensaje">AM</div>
                  <div className="burbuja">
                    <p className="texto-mensaje">Perfecto, también necesito adjuntar evidencias con URL, verdad?</p>
                    <span className="hora-mensaje">09:25</span>
                  </div>
                </div>
                <div className="mensaje mensaje-propio">
                  <div className="burbuja">
                    <p className="texto-mensaje">Así es. Sube los enlaces a tu repositorio o evidencias en la plataforma.</p>
                    <span className="hora-mensaje">09:30 <span className="estado-mensaje"><i className="fas fa-check"></i></span></span>
                  </div>
                </div>
                <div className="separador-fecha"><span>Nuevos Mensajes</span></div>
                <div className="mensaje mensaje-recibido">
                  <div className="avatar-mensaje">AM</div>
                  <div className="burbuja">
                    <p className="texto-mensaje">Profe, ya subí el Avance del trimestre 2. ¿Me podría decir si está completo?</p>
                    <span className="hora-mensaje">14:30</span>
                  </div>
                </div>
              </div>
              <div className="entrada-mensaje">
                <button className="btn-secundario" aria-label="Adjuntar archivo" type="button"><i className="fas fa-paperclip"></i></button>
                <input type="text" className="input-mensaje" placeholder="Escribe un mensaje..." name="mensaje" />
                <button className="btn-primario" aria-label="Enviar mensaje" type="button"><i className="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
          <div className="estado-vacio oculto">
            <div className="icono-vacio"><i className="fas fa-envelope-open-text"></i></div>
            <h3>No tienes mensajes aún</h3>
            <p>Cuando un aprendiz te envíe un mensaje, aparecerá aquí.</p>
            <a href="#" className="btn-primario"><i className="fas fa-plus"></i> Nuevo mensaje</a>
          </div>
        </div>
      </main>
      <FooterInstructor />
    </div>
  );
}

export default MensajesInstructor;
