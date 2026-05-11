// MensajesAprendiz - Pagina de mensajes con lista de contactos, panel de conversacion y chat en tiempo real
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarAprendiz from '../../components/SidebarAprendiz/SidebarAprendiz';
import FooterAprendiz from '../../components/FooterAprendiz/FooterAprendiz';
import '../../assets/styles/pages/mensajes.css';

function MensajesAprendiz() {
  return (
    <div className="modulo-aprendiz">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Aprendiz" usuario="Maria Gonzalez | ADSO" notificaciones={5} />
      <SidebarAprendiz activo="mensajes" />
      <main className="contenido-principal">
        <div className="contenedor-alertas">
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-envelope"></i> Mis Mensajes</h1>
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
                  <div className="avatar-contacto">CR</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Carlos Ruiz</h4>
                      <span className="fecha-msg">12:45</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">Claro, te explico como...</span>
                      <span className="contador-no-leidos">2</span>
                    </div>
                  </div>
                </li>
                <li className="contacto">
                  <div className="avatar-contacto">LG</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Laura Gomez</h4>
                      <span className="fecha-msg">Ayer</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">¿Revisaste mi Avance?</span>
                    </div>
                  </div>
                </li>
                <li className="contacto">
                  <div className="avatar-contacto">JP</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Juan Perez</h4>
                      <span className="fecha-msg">Mar</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">Te adjunto los documentos</span>
                    </div>
                  </div>
                </li>
                <li className="contacto">
                  <div className="avatar-contacto">AM</div>
                  <div className="info-contacto">
                    <div className="nombre-contacto">
                      <h4>Ana Martinez</h4>
                      <span className="fecha-msg">Lun</span>
                    </div>
                    <div className="ultimo-msg">
                      <span className="texto-ultimo-msg">Gracias por la retroalimentacion</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="vista-grupo oculto">
                <div className="cabecera-grupo">
                  <div className="avatar-grupo"><i className="fas fa-users"></i></div>
                  <div className="info-grupo">
                    <h4>Chat de Ficha</h4>
                    <p>ADSO-2568 &middot; 12 miembros en linea</p>
                  </div>
                </div>
                <ul className="miembros-grupo">
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">CR</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Carlos Ruiz</span>
                      <span className="estado-miembro en-linea"><i className="fas fa-circle"></i> En linea</span>
                    </div>
                  </li>
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">LG</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Laura Gomez</span>
                      <span className="estado-miembro"><i className="fas fa-circle"></i> Ausente</span>
                    </div>
                  </li>
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">JP</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Juan Perez</span>
                      <span className="estado-miembro en-linea"><i className="fas fa-circle"></i> En linea</span>
                    </div>
                  </li>
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">AM</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Ana Martinez</span>
                      <span className="estado-miembro en-linea"><i className="fas fa-circle"></i> En linea</span>
                    </div>
                  </li>
                  <li className="miembro-grupo">
                    <div className="avatar-miembro">DS</div>
                    <div className="info-miembro">
                      <span className="nombre-miembro">Diana Sanchez</span>
                      <span className="estado-miembro"><i className="fas fa-circle"></i> Desconectado</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel-conversacion">
              <div className="cabecera-chat">
                <div className="avatar-cabecera">CR</div>
                <div className="info-cabecera">
                  <h3>Carlos Ruiz</h3>
                  <p><i className="fas fa-circle icono-mini"></i> En linea</p>
                </div>
              </div>
              <div className="zona-mensajes">
                <div className="separador-fecha"><span>Hoy</span></div>
                <div className="mensaje mensaje-recibido">
                  <div className="avatar-mensaje">CR</div>
                  <div className="burbuja">
                    <p className="texto-mensaje">Hola Maria, he revisado tu proyecto del sistema de gestion academica. ¿Podemos coordinar una reunion para hablar sobre los ajustes?</p>
                    <span className="hora-mensaje">10:23</span>
                  </div>
                </div>
                <div className="mensaje mensaje-propio">
                  <div className="burbuja">
                    <p className="texto-mensaje">¡Hola Carlos! Claro, tengo disponibilidad manana en la manana. ¿Que te parece?</p>
                    <span className="hora-mensaje">10:25 <span className="estado-mensaje"><i className="fas fa-check-double"></i></span></span>
                  </div>
                </div>
                <div className="mensaje mensaje-recibido">
                  <div className="avatar-mensaje">CR</div>
                  <div className="burbuja">
                    <p className="texto-mensaje">Perfecto, te comparto el enlace de Meet para manana a las 10:00.</p>
                    <span className="hora-mensaje">10:30</span>
                  </div>
                </div>
                <div className="mensaje mensaje-propio">
                  <div className="burbuja">
                    <p className="texto-mensaje">Recibido. Muchas gracias, nos vemos manana.</p>
                    <span className="hora-mensaje">10:32 <span className="estado-mensaje"><i className="fas fa-check"></i></span></span>
                  </div>
                </div>
                <div className="separador-fecha"><span>Nuevos Mensajes</span></div>
                <div className="mensaje mensaje-recibido">
                  <div className="avatar-mensaje">CR</div>
                  <div className="burbuja">
                    <p className="texto-mensaje">Claro, te explico como vamos a manejar los comentarios...</p>
                    <span className="hora-mensaje">12:45</span>
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
            <h3>No tienes mensajes aun</h3>
            <p>Cuando recibas o inicies una conversacion, aparecera aqui.</p>
            <a href="#" className="btn-primario"><i className="fas fa-plus"></i> Nuevo mensaje</a>
          </div>
        </div>
      </main>
      <FooterAprendiz />
    </div>
  );
}

export default MensajesAprendiz;
