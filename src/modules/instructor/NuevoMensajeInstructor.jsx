import GovernmentBar from '../../components/GovernmentBar/GovernmentBar';
import Header from '../../components/Header/Header';
import SidebarInstructor from '../../components/SidebarInstructor/SidebarInstructor';
import FooterInstructor from '../../components/FooterInstructor/FooterInstructor';
import '../../assets/styles/pages/nuevo-mensaje.css';

function NuevoMensajeInstructor() {
  return (
    <div className="modulo-instructor">
      <GovernmentBar />
      <Header titulo="ProyecTwin - Panel del Instructor" usuario="Carlos Ruiz | Instr. ADSO" notificaciones={8} />
      <SidebarInstructor activo="mensajes" />
      <main className="contenido-principal">
        <div className="contenedor-nuevo-msg">
          <div className="encabezado-pagina">
            <h1 className="titulo-pagina"><i className="fas fa-comment"></i> Nuevo mensaje</h1>
            <a href="#" className="btn-secundario"><i className="fas fa-arrow-left"></i> Volver</a>
          </div>
          <div className="card-msg">
            <div className="mensaje-feedback mensaje-exito oculto">
              <i className="fas fa-check-circle"></i>
              <span>Operación realizada exitosamente.</span>
            </div>
            <div className="mensaje-feedback mensaje-error oculto">
              <i className="fas fa-exclamation-circle"></i>
              <span>Ha ocurrido un error. Intenta nuevamente.</span>
            </div>
            <form action="#">
              <div className="grupo-formulario">
                <label className="etiqueta">Destinatario</label>
                <div className="destinatario-info">
                  <div className="avatar-usuario-sm">AM</div>
                  <div>
                    <p className="nombre-destinatario">Ana Martínez</p>
                    <p className="rol-destinatario">Aprendiz - ADSO-2568</p>
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
      <FooterInstructor />
    </div>
  );
}

export default NuevoMensajeInstructor;
