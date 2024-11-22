<script setup lang="ts">
import ProjectsArticle from '@/components/ProjectsArticle.vue';
</script>

<template>
  <main>
    <aside>
      <ul>
        <li><a href="#top">DORANCONET</a></li>
        <li><a href="#read_it">Read It</a></li>
        <li><a href="#cinemood">Cinemood</a></li>
        <li><a href="#puissance">Puissance4</a></li>
        <li><a href="#moustiquaire">3Moustiquaire</a></li>
        <li><a href="#pickomino">Pickomino</a></li>
        <li><a href="#particules">Particules</a></li>
      </ul>
    </aside>
    <div>
      <h2>Here are my projects</h2>
      <ProjectsArticle id="DORANCONET" img="/doranconet.png" url="https://github.com/DevsAreAlsoHumans/DORANCONET">
        <template #title>DORANCONET</template>
        <template #description>
          DORANCONET is a project started at school and realized in PHP. This application is a kind of mini social
          network
          based on a large database of people. It's built in PHP with a MySQL database and uses the Pico CSS library for
          the front end. The application is still under development and will be deployed once we've reached a working
          version.
        </template>
      </ProjectsArticle>

      <ProjectsArticle id="read_it" img="/read_it.png" url="https://github.com/Tchoup7790/Read-It">
        <template #title>Read_it</template>
        <template #description>
          Read It is a personal project I created to practice native PHP in preparation for the DORANCONET project. This
          application allows users to create or read articles by leaving comments. It's built in PHP with a MySQL
          database and uses the Pico CSS library for the front end.
        </template>
      </ProjectsArticle>

      <ProjectsArticle id="cinemood" img="/cinemood.png" url="https://github.com/Tchoup7790/SAE-Cinemood">
        <template #title>Cinemood </template>
        <template #description>
          Cinemood is a film search platform, where the selection is based on the your geographical location. This
          project was a team study. We used API to retrieve movie and weather data. The front-end was developed with
          React, while the back-end uses Express to manage APIs and requests. The application was deployed using Docker.
        </template>
        <template #image>
          <img src='/cinemood.png'>
        </template>
      </ProjectsArticle>

      <ProjectsArticle id="puissance" img="/puissances.png" url="https://github.com/Tchoup7790/SAE-puissanceQuatre">
        <template #title>Puissance 4 </template>
        <template #description>
          Puissance 4 is a solo project carried out as part of my studies, where I implemented the server logic for the
          board game “Puissance 4”. This project was realized in Go (Golang) and allows two players to compete online.
          The back-end manages the game logic, validation rules and game management. management.
        </template>
      </ProjectsArticle>

      <ProjectsArticle id="moustiquaire" img="moustiquaire.png" url="https://github.com/Tchoup7790/SAE-3Moustiquaire">
        <template #title>3 Moustiquaires </template>
        <template #description>
          3 Moustiquaires is a study project for groups of 4, involving the creation of a fictitious online sales site
          for luxury mosquito nets. The project is based on Laravel for the back-end, and a database provided by the
          school. We developed a complete e-commerce site, with product, user, order and payment management.
        </template>
      </ProjectsArticle>

      <ProjectsArticle id="pickomino" img="/pickomino.png" url="https://github.com/Tchoup7790/SAE-Pickomino">
        <template #title>Pickomino </template>
        <template #description>
          Pickomino is the digital adaptation of the famous board game, developed in a group of 4 using Kotlin and
          JavaFX. The project involves recreating the rules of the game in an interactive, multiplayer version, with a
          graphical interface that simulates the physical experience of the game. The application allows several players
          to compete online, respecting the rules of the game and calculating scores in real time. This project enabled
          me to strengthen my object-oriented programming skills with Kotlin, while exploring the creation of graphical
          interfaces with JavaFX.
        </template>
      </ProjectsArticle>

      <ProjectsArticle id="particules" img="/particules.png" url="https://github.com/Tchoup7790/SAE-Particules">
        <template #title>Particules </template>
        <template #description>
          Particules is my very first solo computer project for school. The objective was to create a particle
          generator, with different visual effects, using Go. The project involves simulating particles in motion, using
          elements such as gravity and friction to achieve attractive visual effects.
        </template>
      </ProjectsArticle>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 4rem 0;
}

h2 {
  text-wrap: balance;
  padding: 1rem;
}

aside {
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 10vw;
  z-index: 1;
  left: 20px;
  top: 0;
}

ul,
li {
  list-style: none;
  text-decoration: none;
  text-align: start;
  padding: 0;
  margin: 0;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

a {
  line-height: 2.5;
  text-transform: capitalize;
}



@media (min-width: 1025px) {
  div {
    gap: 0;
  }

  aside {
    display: flex;
  }
}
</style>
