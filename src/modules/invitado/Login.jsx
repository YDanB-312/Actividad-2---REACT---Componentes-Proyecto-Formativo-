/*
Componente: Login
Función: Página de inicio de sesión del sistema
Propósito: Permite a los usuarios autenticarse en la plataforma ProyecTwin
*/

import '../../assets/styles/pages/login.css'
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar'
import FooterSimple from '../../components/FooterSimple/FooterSimple'

export default function Login() {
  return (
    <div className="modulo-invitado">
      <GovernmentBar />

      <main className="contenedor-login">
        <div className="tarjeta-login">
          <div className="formulario-login">
            <div className="encabezado-login">
              <img src="/images/Logo-ProyecTwin.png" alt="Logo ProyecTwin" />
              <h1>Proyec<span>Twin</span></h1>
              <p>Plataforma de Gestión de proyectos - SENA</p>
            </div>

            <form action="../Home/Home.html">
              <div className="grupo-campo">
                <label><i className="fas fa-envelope"></i> Correo Electrónico</label>
                <input type="email" placeholder="tu@correo.com" required name="correo" />
              </div>

              <div className="grupo-campo">
                <label><i className="fas fa-lock"></i> Contraseña</label>
                <div className="contenedor-password">
                  <input type="password" placeholder="????????????????????????" required name="password" />
                </div>
              </div>

              <div className="opciones-login">
                <label><input type="checkbox" name="recordarme" /> Recordarme</label>
                <a href="recuperar_contrasena.html">¿Olvidaste tu contraseña?</a>
              </div>

              <button type="submit" className="btn-primario">
                <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
              </button>

              <div className="separador"><span>O</span></div>

              <a href="../Register/register.html" className="btn-secundario">
                <i className="fas fa-user-plus"></i> Crear una cuenta nueva
              </a>
            </form>

            <div className="info-prueba">
              <h4><i className="fas fa-info-circle"></i> Usuarios de prueba</h4>
              <div className="item-prueba">
                <span className="badge badge-exito">Aprendiz</span>
                <span className="texto-prueba">maria@correo.com / 123456</span>
              </div>
              <div className="item-prueba">
                <span className="badge badge-advertencia">Instructor</span>
                <span className="texto-prueba">carlos@correo.com / 123456</span>
              </div>
            </div>
          </div>

          <div className="panel-info-login">
            <div>
              <h2>Bienvenido a ProyecTwin</h2>
              <p>El sistema de gestión y detección de Similitudes para proyectos de formación del SENA.</p>
              <ul>
                <li><i className="fas fa-check-circle"></i> Gestiona tus proyectos de formación</li>
                <li><i className="fas fa-check-circle"></i> Detecta Similitudes con otros proyectos</li>
                <li><i className="fas fa-check-circle"></i> Realiza seguimiento de Avances</li>
                <li><i className="fas fa-check-circle"></i> Comunícate con instructores y aprendices</li>
                <li><i className="fas fa-check-circle"></i> Evalúa Propuestas y Avances en tiempo real</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  )
}
