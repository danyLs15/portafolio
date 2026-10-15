<script>
</script>
<template>
    <div id="contact">
        <h1>
            Contacto
        </h1>
        <hr />
        <div id="container-contact">
            <div id="container-links">
                <h2> Trabajemos juntos </h2>
                <p>¿Tienes un proyecto, una propuesta o una pregunta? Escríbeme por correo o LinkedIn, o déjame un mensaje en el formulario. Con gusto hablamos.</p>
                <div>
                    <a href="mailto:daniellima.dl446@gmail.com" target="_blank"> <i class="fa-solid fa-envelope"></i> Escribeme por correo</a> <br />
                    <a href="https://www.linkedin.com/in/daniel-lima-sánchez-828419286" target="_blank">  <i class="fa-brands fa-linkedin"></i> Daniel Lima Sánchez</a>
                </div>
            </div>
            <div id="container-form">
                <form>
                    <div>
                        <label for="name">Nombre</label> <br />
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label for="email">Correo Electrónico</label> <br />
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label for="message">Mensaje</label> <br />
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <div>
                        <button type="submit">Enviar mensaje <i class="fa fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
    #contact{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* height: 100vh;
        width: 100vw; */
        margin-inline: 100px;
        text-align: center;
        h1{
            text-align: center;
        }

        #container-contact{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 50px;
            margin-top: 8vh;

            div{
                min-height: 70%;
                min-width: 45%;
            }

            #container-links{
                text-align: center;
                font-size: 20px;
                a{
                    text-decoration: none;
                }
            }
        }
        
        #container-form{
            form{
                display: none;
                flex-direction: column;
                gap: 15px;
                text-align: left;

                div{
                    display: flex;
                    flex-direction: column;

                    input, textarea{
                        border-radius: 12px;
                        border: 2px solid gray;
                        border-radius: 12px;
                        padding: 10px;
                    }

                    button{
                        background-color: var(--color-primario);
                        color: white;
                        border: none;
                        border-radius: 12px;
                        padding: 10px;
                        cursor: pointer;
                    }
                }
            }
        }

        @media (max-width: 819px) {
            margin-inline: 20px;
            #container-links{
                text-align: justify;
            }
        }
    }
</style>