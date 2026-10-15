<script setup>
import { ref } from 'vue'

const skills = [
  {
    title: 'Desarrollo backend',
    description: 'Desarrollo con .NET, uso de bases de datos relacionales, lógica optimizada y fácil de mantener.'
  },
  {
    title: 'APIS',
    description: 'Desarrollo e integro APIs para conectar aplicaciones y facilitar el intercambio de información.'
  },
  {
    title: 'Integración de Servicios',
    description: 'Conecto plataformas y servicios web para que trabajen juntos de forma consistente.'
  },
  {
    title: 'Soluciones a la medida',
    description: 'Desarrollo de soluciones personalizadas según las necesidades del cliente.'
  }
]

const openItems = ref([])

function toggleDescription(index) {
  if (openItems.value.includes(index)) {
    openItems.value = openItems.value.filter((item) => item !== index)
    return
  }

  openItems.value = [...openItems.value, index]
}
</script>

<template>
  <div id="habilidadesYcertificaciones">
    <h1>Habilidades</h1>
    <hr>

    <p id="descripHabilidades">
      Desarrollo de software multiplataforma, con experiencia en desarrollo web y desarrollo movil, creando soluciones
      pensado en las necesidades del cliente y con un enfoque en la experiencia de usuario.
    </p>

    <ol>
       <li v-for="(skill, index) in skills" :key="skill.title" ><!--@click="toggleDescription(index)" -->
        <!-- <p class="skill-row"> -->
          <span class="tittle">{{ skill.title }}</span>
          <!-- <span class="toggle-icon">{{ openItems.includes(index) ? '-' : '+' }}</span> -->
        <!-- </p> -->

        <p > <!-- v-show="openItems.includes(index)" -->
          {{ skill.description }}
        </p>
      </li>
    </ol>

    <div>
      <p><i class="fa-brands fa-dart-lang"></i> Dart</p>
      <p><i class="fa-brands fa-flutter"></i> Flutter</p>
      <p> .NET</p>
      <p> C#</p>
      <p>WPF</p>
      <p><i class="fa-brands fa-html5"></i> Html</p>
      <p><i class="fa-brands fa-angular"></i>Angular</p>
      <p><i class="fa-brands fa-react"></i> React</p>
      <p><i class="fa-brands fa-vuejs"></i> Vue</p>
      <p><i class="fa-brands fa-js"></i> JavaScript</p>
    </div>

    <h1>Certificaciones</h1>

    <div>
      <ul id="container-certifications">
        <li><img src="../assets/flutter-seeklogo.svg" /> <span class="tittle">Flutter - Móvil: De 0 a experto</span> Udemy</li>
        <li><img src="../assets/c-sharp-c-seeklogo.svg" /> <span class="tittle">Foundational C# with Microsoft</span>FreeCodeCamp</li>
        <li><img src="../assets/net-core-seeklogo.svg" /> <span class="tittle">Master API RESTful con ASP.NET CORE web API</span>Udemy</li>
      </ul>
    </div>
  </div>
</template>

<style>
#habilidadesYcertificaciones {
  /* height: 100vh; */
  margin-inline: 100px;
  /* gap: 50px; */

  h1 {
    text-align: center;
  }

  p#descripHabilidades {
    width: 60%;
    font-size: 18px;
    margin-inline: auto;
    text-align: center;
  }

  ol{
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 50%);

    li{
      padding: 30px;
      /* margin: 14px; */
      border: 2px solid var(--color-secundario);
      border-radius: 12px;

    }
  }

  ol li {
    margin: 10px;
    font-size: 20px;
  }

  .tittle {
    font-weight: bold;
    margin-right: auto;
  }
  .skill-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .toggle-icon {
    display: inline-block;
    min-width: 20px;
    text-align: center;
    font-weight: bold;
    color: black;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    margin-top: 8px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 992px) {
    margin-inline: 20px;
    p#descripHabilidades{
      width: 100%;
      text-align: justify;
    }
    div{
      flex-wrap: wrap;
      flex:0 0 50%;
      gap:5px;
    }
    ol, ul{
      grid-template-columns: repeat(1, 100%);
    }
  }
}

#container-certifications {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  li {
    padding: 13px;
    margin: 14px;
    border: 2px solid var(--color-secundario);
    border-radius: 12px;
    display: flex;
    align-items: center;
  }

  img {
    width: 40px;
    margin-right: 10px;
  }
}
</style>