let x, y;
let newX, newY;
let $card, $card_width, $card_height;
const $body_rect = document.body.getBoundingClientRect();

export default {
  name: 'Card',
  props: {
    title: String,
    info: String,
    image: String,
  },
  data() {
    return {
        isTurned: false,
        clickInfoIsShown: false,
        oldInfo: this.title
    }
  },
  methods: {
    turnCard: function(e) {
        this.isTurned = !this.isTurned;
        if (this.isTurned) {
          this.title = this.oldInfo;
        }
    },
    mouseLeaveHandler: function() {
      this.showClickMessage();
      this.removeSkewClasses();
    },
    showClickMessage: function() {
        if (!this.isTurned) {
            this.clickInfoIsShown = !this.clickInfoIsShown;
            this.title = this.clickInfoIsShown ? 'Click for more info' : this.oldInfo;
        }
    },
    transformCard: function(e) {
      $card = e.target.closest('.card-container');
      $card_width = $card.getBoundingClientRect().width;
      $card_height = $card.getBoundingClientRect().height;
      x = e.offsetX;
      y = e.offsetY;
      if (x > ($card_width / 2)) {
        $card.classList.add('right');
        $card.classList.remove('left');
      } else {
        $card.classList.add('left');
        $card.classList.remove('right');
      }
      if (y > ($card_height / 2)) {
        $card.classList.add('bottom');
        $card.classList.remove('top');
      } else {
        $card.classList.add('top');
        $card.classList.remove('bottom');
      }
    },
    removeSkewClasses: function() {
      $card.classList.remove('top');
      $card.classList.remove('right');
      $card.classList.remove('bottom');
      $card.classList.remove('left');
    }
  }
}