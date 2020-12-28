 

const Game = new Vue({
  el: "#game",
  data: {
    hits: 0,
    health: 100,
    ended: false,
    
  },
  methods: {
    hitBag() {
      this.life_bar.style.width = this.health;
    },
    punch() {
      this.health -= 10;
      this.hits += 10;
      if (this.health <= 0) this.ended = true;
    },
    restart() {
      this.health = 100;
      this.hits = 0;
      this.ended = false;
    },
  },
  computed: {

  },
});


