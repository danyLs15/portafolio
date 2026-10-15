<script>
    import Animation from './animation.vue';

    export default {
    components: { Animation }
    }
</script>
<template>
    <div id="me" style="opacity: 1 !important;">
        <div id="info-me">
            <h1> Daniel Lima Sánchez</h1>
            <h2> <i class="fa-solid fa-code"></i> Ingeniero de software, creando soluciones digitales prácticas y funcionales.</h2>
            <a href="#contact" id="contact-link">Contactame</a>
            <a href="#projects" id="projects-link">Proyectos</a>
        </div>
        <div id="img-me">
            <Animation />
        </div>
    </div>
</template>
<style>
    #me{
        display: flex;
        justify-content: center;
        width: 100vw;
        margin-inline: 100px;

        #info-me{
            width: 40%;
        }

        #img-me{
            width: 60%;
        }

        h1{
            font-size: 40px;
            margin-bottom: 20px;
        }
        h2{
            font-size: 21px;
            margin-bottom: 30px;
        }

        a#contact-link{
            /* margin-inline: auto; */
            text-decoration: none;
            background-color: var(--color-primario);
            padding: 12px;
            border: none;
            border-radius: 12px;
            font-size: 18px;
            color: white;
        }
        a#projects-link{
            margin-inline: auto;
            color: var(--color-secundario);
            text-decoration:dashed;
            padding: 12px;
            border: none;
            font-size: 18px;
        }

        @media (max-width: 819px) {
                flex-wrap: wrap;
                margin-inline: 20px;
                flex: 0 0 50%;

            /* Invertimos el orden */
            #img-me {
                order: 1; /* Pasa a ser el primero */
                width: 100%; /* Ocupa todo el ancho disponible */
            }
            
            #info-me {
                order: 2; /* Pasa a ser el segundo */
                width: 100%; /* Ocupa todo el ancho disponible */
                text-align: center;
            }
        }
    }
</style>