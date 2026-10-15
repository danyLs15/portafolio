<script>
import { onMounted } from "vue";
import Me from './components/Me.vue';
import Skills from './components/Skills.vue';
import Project from './components/Project.vue';
import Contact from './components/Contac.vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: { Me, Skills, Project, Contact },
  setup() {
    onMounted(() => {
      // gsap.registerPlugin(ScrollTrigger);

      // const sections = gsap.utils.toArray(".section");

      // sections.forEach((section, i) => {
      //   if (i < sections.length - 1) {
      //     let next = sections[i + 1];

      //     gsap.timeline({
      //       scrollTrigger: {
      //         trigger: section,
      //         start: "top top",   // cuando entra a viewport
      //         end: "+=100%",  // cuando sale de viewport
      //         scrub: true,
      //         pin: true,
      //         toggleActions: "play none none reverse"
      //       }
      //     })
      //     .to(section, { opacity: 1, duration: 1, ease: "none" })
      //     .fromTo(next, { opacity: 1 }, { opacity: 0, duration: 1, ease: "none" }, "<");
      //   }
      // });
    });
  }
};
</script>

<template>
  <main>
    <div id="navbar">
      <ul id="items">
        <li><a href="#me">Inicio</a></li>
        <!-- <li><a href="#">Sobre mi</a></li> -->
        <li><a href="#habilidadesYcertificaciones">Habilidades y Certificaciones</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </div>
    <section class="section"><Me /></section>
    <section class="section"><Skills /></section>
    <section class="section"><Project /></section>
    <section class="section"><Contact /></section>
  </main>
</template>

<style>
* {
  font-family: Roboto;
  /* color: #fff;
  background-color: #000; */
}

        hr{
            width: 10%;
            margin-inline: auto;
            background-color: var(--color-primario);
            /* border: 1px solid white; */
        }

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  opacity: 1;
}

#navbar {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 10px;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-secundario);
  border-radius: 12px;
  border: 2px solid var(--color-primario);

  #items {
    list-style: none;
    display: flex;
    gap: 25px;
    padding: 10px 20px;
    background: none;

    li {
      background: none;
      a {
        background: none;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        transition: color 0.3s;

        &:hover {
          color: var(--color-primario);
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 600px) {
    
      top: 8px;
      left: 8px;
      width: calc(100% - 16px);
      border-radius: 10px;

      #items {
        gap: 8px 16px;
        padding: 10px 12px;

        a {
          font-size: 0.9rem;
        }
      }
  }
}
</style>
