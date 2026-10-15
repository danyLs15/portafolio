<script>
</script>
<template>
    <div id="projects" >
        <h1>
            Proyectos
        </h1>
        <hr />
        <div id="container-projects">
            <div hidden>
                <h2>IQ English</h2>
                <p>Aplicación para escuelas de inglés, en ella se pueden agendar y cancelar sesiónes, acceso a el material didactico y llevar un hitorial del progreso.</p>
                <p>Rol: Desarrollador Movil<br>
                    <ul>
                        <li>Correccion de errores.</li>
                        <li>Optimización de procesos.</li>
                        <li>Implementación de nuevas funcionalidades.</li>
                    </ul>
                </p>
            </div>
            <div hidden>
                <h2>CIDESI</h2>
                <p>Plataforma para escuelas de posgrado, en se gestionan alumnos, docentes, administradores, asi mismo se publican conovcatorias de la oferta educativa de las escuelas, ademas de aplicar conovcatorias y llevar la gestion de las clases y el historial academico de los alumnos.</p>
                <p>Rol: Desarrollador Fullstack<br>
                    <ul>
                        <li>Diseño y desarrollo del modulo para la gestión de notificaciones push de la plataforma.</li>
                        <li>Diseño y desarrollo del modulo para la gestión del calendario escolar.</li>
                        <li>Co-desarrollador para el modulo de Grupos, en la gestion de actividades y calculo del promedio en base a la configuracion del grupo.</li>
                    </ul>
                </p>
            </div>
            <div>
                <span>PROFESIONAL</span>
                <h2>Sistemas educativos</h2>
                <p>Desarrollo de soluciones tecnológicas para instituciones educativas.</p>
                <ul>
                    <li>Liderazgo tecnico de proyectos.</li>
                    <li>Gestion y coordinacion de equipos de desarrollo.</li>
                    <li>Desarrollo y mantenimiento de sistemas web y móviles.</li>
                    <li>Integración de API's y servicios web.</li>
                    <li>Despliegue de aplicaciones en la nube.</li>
                </ul>
                <hr>
                <p class="stack">Stack:<span>.NET - C# - SQL Server - JavaScript - Windows Server - GIT</span></p>
            </div>
            <div>
                <span>WEB</span>
                <a href="https://siexa.mx" target="_blank">Ver</a>
                <h2>SIEXA</h2>
                <p>Pagina web oficial empresarial</p>
                <p>Presencia digital y presentacion de servicios</p>
                <span>Desarrollo Web - CEO - Despliegue - API correos</span><br>
                <hr>
                <p class="stack">Stack: <span>Angular - Node.js - Tailwind CSS</span></p>
            </div>
            <div>
                <span>WEB</span>
                <a href="https://genoveva-coaching.com.mx" target="_blank">Ver</a>
                <h2>Genoveva coaching</h2>
                <p>Pagina web coach</p>
                <p>Presencia digital y presentacion de servicios</p>
                <span>Diseño web - Desarrollo Web - SEO - Despliegue</span><br>
                <hr>
                <p class="stack">Stack: <span>React - Node.js - Tailwind CSS</span></p>
            </div>
            <div>
                <span>PERSONAL - EXPERIMENTAL - EN DESARROLLO</span>
                <h2>Sistema de monitoreo de nivel de agua</h2>
                <p>Proyecto personal y experimental enfocado en desarrollar una solución para medir y monitorear el nivel de un depósito de agua.</p>  
                <hr>              
                <p class="stack">Stack:<span>C++ - ESP32 - WebSockets - WiFi</span></p>
            </div>
        </div>
    </div>
</template>
<style>
    #projects{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* height: 100vh; */
        margin-inline: 100px;
        text-align: center;
        h1{
            text-align: center;
        }
         @media (max-width: 992px) {
            margin-inline: 20px;
            
            div{
                flex-wrap: wrap;
                flex:0 0 50%;
                gap:5px;
            }
            #container-projects{
                grid-template-columns: repeat(1, 100%);
                a{
                    margin-left: 80%;
                }
            }
        }
    }
    #container-projects{
        display:grid;
        grid-template-columns: repeat(2, 50%);
        gap: 20px;
        text-align: justify;
        
        div{
            padding: 30px;
            border: 2px solid var(--color-secundario);
            border-radius: 12px;
            /* width: 25%; */
            margin: 10px 0 10px 0;
            position: relative;

            /* @media screen and (max-width: 820px) {
                width: 45%;
            }
            @media screen and (max-width: 500px) {
                width: 100%;
            } */
        }

        #stack{
            position: absolute;
            bottom: 10px;
        }

        hr{
            width: 100%;
        }

        a{
            /* margin-inline: auto; */
            text-decoration: none;
            background-color: var(--color-primario);
            padding: 12px;
            border: none;
            border-radius: 12px;
            font-size: 18px;
            color: white;
            margin-left: 90%;
        }

    }
    ul{
        list-style:disc;
    }
</style>