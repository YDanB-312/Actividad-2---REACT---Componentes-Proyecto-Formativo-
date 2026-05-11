/*
Pagina: Home
Funcion: Pagina de inicio del sistema
Proposito: Presentar la plataforma ProyecTwin a los visitantes
*/

import '.././../assets/styles/pages/index.css'
import GovernmentBar from '../../components/GovernmentBar/GovernmentBar'
import FooterHome from '../../components/FooterHome/FooterHome'

export default function Home() {
  return (
    <div className="modulo-invitado">
      <GovernmentBar />

      <header className="header-principal">
        <div className="contenedor-header">
          <div className="grupo-izquierdo">
            <img src="/images/Logo-ProyecTwin.png" alt="Logo" className="logo-header-img" />
            <span className="titulo-header">ProyecTwin</span>
          </div>

          <div className="grupo-derecho">
            <img src="/images/logo-sena-blanco.png" alt="SENA" className="logo-sena-header" />

            <div className="buttons">
              <a href="#" className="btn-primario">Ingresar</a>
              <a href="#" className="btn-secundario">Registrarme</a>
            </div>
          </div>
        </div>
      </header>

      <main className="contenido-principal">
        <div className="home-container">

          <div className="hero-section">
            <h1 className="hero-titulo">
              Bienvenido a <span>ProyecTwin</span>
            </h1>
            <p className="hero-descripcion">
              Plataforma inteligente de gestion y deteccion de Similitudes para proyectos de formacion del SENA.
              Optimiza tus proyectos, evita duplicidades y fomenta la originalidad academica.
            </p>
            <div className="hero-botones">
              <a href="#" className="btn-primario">
                <i className="fas fa-sign-in-alt"></i> Ingresar Ahora
              </a>
              <a href="#" className="btn-secundario">
                <i className="fas fa-user-plus"></i> Crear Cuenta
              </a>
            </div>
          </div>

          <div className="usuarios-section">
            <h3 className="usuarios-titulo">Acceso por Rol</h3>
            <p className="usuarios-subtitulo">ProyecTwin se adapta a las necesidades de cada miembro de la comunidad SENA</p>

            <div className="usuarios-grid">
              <div className="tarjeta-usuario aprendiz">
                <div className="tarjeta-usuario-icono">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3>Aprendiz</h3>
                <p>Gestiona tus proyectos de formacion, registra Avances y recibe retroalimentacion.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Crear nuevos proyectos</li>
                  <li><i className="fas fa-check"></i> Registrar Avances</li>
                  <li><i className="fas fa-check"></i> Recibir Notificaciones</li>
                </ul>
              </div>

              <div className="tarjeta-usuario instructor">
                <div className="tarjeta-usuario-icono">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Instructor</h3>
                <p>Revisa Propuestas, evalua Avances y gestiona el progreso de tus aprendices.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Revisar Propuestas</li>
                  <li><i className="fas fa-check"></i> Evaluar Avances</li>
                  <li><i className="fas fa-check"></i> Generar reportes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="como-funciona">
            <h3 className="como-funciona-titulo">Como Funciona ProyecTwin?</h3>

            <div className="pasos-grid">
              <div className="paso">
                <div className="paso-numero">1</div>
                <h4>Registrate</h4>
                <p>Crea tu cuenta como aprendiz o instructor segun tu rol en el SENA.</p>
              </div>
              <div className="paso">
                <div className="paso-numero">2</div>
                <h4>Sube tu Proyecto</h4>
                <p>Registra tu Propuesta y el sistema analizara automaticamente Similitudes.</p>
              </div>
              <div className="paso">
                <div className="paso-numero">3</div>
                <h4>Recibe Evaluacion</h4>
                <p>Instructores revisan y aprueban Propuestas con herramientas inteligentes.</p>
              </div>
              <div className="paso">
                <div className="paso-numero">4</div>
                <h4>Registra Avances</h4>
                <p>Documenta el progreso de tu proyecto y recibe retroalimentacion continua.</p>
              </div>
            </div>
          </div>

          <div className="tarjetas-container">
            <div className="tarjeta">
              <div className="tarjeta-icono tarjeta-icono-buscar">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="tarjeta-titulo">Deteccion de Similitudes</h3>
              <p className="tarjeta-texto">
                Analizamos automaticamente tus Propuestas para identificar Similitudes con otros proyectos.
              </p>
            </div>

            <div className="tarjeta">
              <div className="tarjeta-icono tarjeta-icono-gestionar">
                <i className="fas fa-tasks"></i>
              </div>
              <h3 className="tarjeta-titulo">Gestion de Proyectos</h3>
              <p className="tarjeta-texto">
                Administra Propuestas, registra Avances y mantente organizado durante todo el ciclo.
              </p>
            </div>

            <div className="tarjeta">
              <div className="tarjeta-icono tarjeta-icono-seguimiento">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="tarjeta-titulo">Seguimiento de Avances</h3>
              <p className="tarjeta-texto">
                Registra y revisa el progreso con herramientas de seguimiento academico.
              </p>
            </div>
          </div>

          <div className="estadisticas-section">
            <h3 className="estadisticas-titulo">ProyecTwin en Numeros</h3>
            <div className="estadisticas-grid">
              <div>
                <div className="estadistica-numero">150+</div>
                <div className="estadistica-label">Proyectos Gestionados</div>
              </div>
              <div>
                <div className="estadistica-numero">95%</div>
                <div className="estadistica-label">Deteccion Precisa</div>
              </div>
              <div>
                <div className="estadistica-numero">300+</div>
                <div className="estadistica-label">Usuarios Activos</div>
              </div>
              <div>
                <div className="estadistica-numero">24/7</div>
                <div className="estadistica-label">Disponibilidad</div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3 className="cta-titulo">
              <i className="fas fa-rocket"></i>
              Listo para transformar tus proyectos?
            </h3>
            <p className="cta-texto">
              Unete a la comunidad academica del SENA y lleva tus proyectos de formacion al siguiente nivel.
            </p>
            <a href="#" className="btn-primario">
              <i className="fas fa-user-plus"></i> Comenzar Ahora
            </a>
          </div>

        </div>
      </main>

      <FooterHome />
    </div>
  )
}
