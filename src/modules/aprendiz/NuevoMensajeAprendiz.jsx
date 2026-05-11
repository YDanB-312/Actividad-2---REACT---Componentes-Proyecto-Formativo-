// NuevoMensajeAprendiz - Pagina de formulario para redactar y enviar un nuevo mensaje a un contacto
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarAprendiz from '../../components/SidebarAprendiz/SidebarAprendiz';
import FooterAprendiz from '../../components/FooterAprendiz/FooterAprendiz';
import '../../assets/styles/pages/nuevo-mensaje.css';

function NuevoMensajeAprendiz() {
  return (
    <div className="modulo-aprendiz">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Aprendiz" usuario="Maria Gonzalez | ADSO" notificaciones={5} />
      <SidebarAprendiz activo="mensajes" />
      <main className="contenido-principal">
        <div className="contenedor-nuevo-msg">
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-comment"></i> Nuevo mensaje</h1>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>
          <div className="card-msg">
            <div className="mensaje-feedback mensaje-exito oculto">
              <i className="fas fa-check-circle"></i>
              <span>Operacion realizada exitosamente.</span>
            </div>
            <div className="mensaje-feedback mensaje-error oculto">
              <i className="fas fa-exclamation-circle"></i>
              <span>Ha ocurrido un error. Intenta nuevamente.</span>
            </div>
            <form action="#">
              <div className="grupo-formulario">
                <label className="etiqueta">Destinatario</label>
                <div className="destinatario-info">
                  <div className="avatar-usuario-sm">CR</div>
                  <div>
                    <p className="nombre-destinatario">Carlos Ruiz</p>
                    <p className="rol-destinatario">Instructor - ADSO-2568</p>
                  </div>
                  <a href="#" className="btn-secundario btn-sm"><i className="fas fa-address-book"></i> Cambiar</a>
                </div>
              </div>
              <div className="grupo-formulario">
                <label htmlFor="mensaje" className="etiqueta">Mensaje</label>
                <textarea id="mensaje" className="textarea-mensaje" placeholder="Escribe tu mensaje..." required name="contenido"></textarea>
              </div>
              <div className="acciones-formulario">
                <button type="submit" className="btn-primario"><i className="fas fa-paper-plane"></i> Enviar mensaje</button>
                <a href="#" className="btn-secundario"><i className="fas fa-times"></i> Cancelar</a>
              </div>
            </form>
          </div>
        </div>
      </main>
      <FooterAprendiz />
    </div>
  );
}

export default NuevoMensajeAprendiz;
