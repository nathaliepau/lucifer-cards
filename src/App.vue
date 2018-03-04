<template>
  <div id="app">
    <div class="app-info">
      <h1>{{ title }}</h1>
      <p class="summary">
        {{ summary }}
      </p>
    </div>
    <div class="cards">
      <Card v-for="card in characters" :key="card.id" :title="card.title" :info="card.info" :image="card.image">
      </Card>
    </div>
  </div>
</template>

<script>
import Card from './components/Card/Card.vue';

import LuciferImage from './assets/lucifer.jpg';
import ChloeImage from './assets/chloe.jpg';
import MazeImage from './assets/maze.jpg';
import AmanedielImage from './assets/amanediel.jpg';
import DoucheImage from './assets/douche.jpg';
import LindaImage from './assets/linda.jpg';

export default {
  name: 'app',
  data() {
    return {
      title: "Lucifer Cards",
      summary: "Based upon the characters created by Neil Gaiman, Sam Kieth and Mike Dringenberg for DC Entertainment's Vertigo imprint, Lucifer is the story of the original fallen angel. Bored and unhappy as the Lord of Hell, Lucifer Morningstar has abandoned his throne and retired to L.A., where he owns Lux, an upscale nightclub.",
      characters: [
        { id: 1, title: "Lucifer", info: "He is one of the younger angels and formerly the infamous ruler of Hell. He is commonly known as the Devil or Satan by humans.", image: LuciferImage },
        { id: 2, title: "Chloe", info: "She is a homicide detective working in Los Angeles as a member of the LAPD. While investigating a murder at the Lux nightclub, Chloe encounters Lucifer Morningstar, the former ruler of Hell, who is now living on Earth.", image: ChloeImage },
        { id: 3, title: "Maze", info: "She is the best friend of Lucifer and formerly worked alongside him at the Lux nightclub in Los Angeles before starting a new career as a bounty hunter with the LAPD.", image: MazeImage },
        { id: 3, title: "Amenadiel", info: "The eldest angel, and thus the older brother of Lucifer Morningstar and all the other angels. He came to Earth to convince Lucifer to return to Hell, after Lucifer abdicates the throne.", image: AmanedielImage },
        { id: 3, title: "Douche", info: "A homicide detective in Los Angeles, working as a member of the LAPD. This leads him to interact with Lucifer Morningstar when Lucifer decides to help the LAPD solve cases.", image: DoucheImage },
        { id: 3, title: "Linda", info: "A therapist living in Los Angeles. Lucifer Morningstar, the former ruler of Hell, goes to see her as his therapist, previously in exchange for sex, until she was reminded of the ethics of her job.", image: LindaImage }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Berkshire+Swash');

html, body, #app{
  height: auto;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-image: url(./assets/main.jpg);
  background-size: cover;
  background-position: center center;
  position: relative;
  padding: 3em 0;
}

#app:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg,rgba(255,51,33,.6),transparent);
  background-color: rgba(50,50,90,.7);
}

.app-info {
  text-align: center;
  padding: 0 0 45px 0;
  max-width: 600px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
}

.app-info h1 {
  margin-top: 0;
  margin-bottom: 30px;
  font-family: 'Berkshire Swash', 'Helvetica Neue', serif;
  color: #fff;
  letter-spacing: 2px;
  font-size: 45px;
}

.app-info p {
  font-size: 21px;
  margin: 0;
}

.cards {
  display: flex;
  align-items: center;
  align-content: center;
  margin: 0 10px;
}

@media screen and (max-width: 1500px) {
  .cards {
    flex-wrap: wrap;
  }
}
</style>
