<template>
  <flickity ref="flickity" class="menuPad" :options="flickityOptions">

    <div v-for="item in type.sub" v-bind:key="item.title" :style="css(item.width)" class="carousel-cell">
      <div class="block" :class="{ active: isactive === item.slug }" @click="menuClick(item.slug)" >{{item.title}}</div>
    </div>

  </flickity>
</template>

<script>
import Flickity from "vue-flickity";
export default {
  name: "subNav",
  data() {
    return {
      isactive: null,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        freeScroll: false,
        dragThreshold: 2,
        friction: 0.2,
        contain: true,
        percentPosition: false,
        cellAlign: 'left'
      }
    };
  },
  components: {
    Flickity
  },
  props: ['type', 'active'],
  watch: { 
    active: function(newVal) { // watch it
      if (!newVal) {
        this.isactive = 'featured'
      } else {
        this.isactive = newVal
      }
    }
  },
  mounted() {
    if (!this.active) {
      this.isactive = 'featured'
    } else {
      this.isactive = this.active
    }
    
    (function() {
      var touchingCarousel = false,
        touchStartCoords;

      document.body.addEventListener("touchstart", function(e) {
        if (e.target.closest(".flickity-slider")) {
          touchingCarousel = true;
        } else {
          touchingCarousel = false;
          return;
        }

        touchStartCoords = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        };
      });

      document.body.addEventListener(
        "touchmove",
        function(e) {
          if (!(touchingCarousel && e.cancelable)) {
            return;
          }

          var moveVector = {
            x: e.touches[0].pageX - touchStartCoords.x,
            y: e.touches[0].pageY - touchStartCoords.y
          };

          if (Math.abs(moveVector.x) > 7) e.preventDefault();
        },
        { passive: false }
      );
    })();
  },
  methods: {
    changeSub(e){
      this.current = e
      this.$emit('subLoad', e)
    },
		css(str) {
			return `width: ${str}px`;
    },
    menuClick(name) {
      if (name === 'featured') {
        this.$router.push({ path: `/${this.type.slug}`}).catch(err => {console.log(err)})
      } else {
        this.$router.push({ path: `/${this.type.slug}/${name}`}).catch(err => {console.log(err)})
      }
    },
  }
};
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.menuPad {
  padding-top: 11px;
  box-shadow: 0px 0px 10px 0px rgba(0, 20, 60, 0.12);
  color: rgba(46, 64, 104, 1);
  font-size: 12px!important;

  .carousel-cell {
    height: 30px;
    margin: 0px;
    padding: 0px;
    padding-left: 3px;

    .block {
      width: 100%;
      height: 100%;
      padding: 4px;
      font-size: 12px;
    }

    .active {
      font-weight: 600;
      border-bottom: 2px solid rgba(24, 48, 96, 1)
    }
  }
}

</style>
