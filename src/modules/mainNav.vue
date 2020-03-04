<template>
  <flickity ref="flickity" class="menuPad" :options="flickityOptions">
    <div v-for="(item, key) in items" v-bind:key="item.title" class="carousel-cell">
      <div 
        class="block" 
        :class="{ active: active === item.title }"
        :style="icon(key)" 
        @click="menuClick(key)">{{ item.title }}</div>
    </div>
  </flickity>
</template>

<script>
import Flickity from "vue-flickity";
export default {
  name: "mainNav",
  data() {
    return {
      isactive: this.active,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        freeScroll: false,
        dragThreshold: 2,
        friction: 0.2,
        contain: true,
        cellAlign: 'left'
      }
    };
  },
  components: {
    Flickity
  },
  props: ["items", "active"],
  watch: { 
	active: function(newVal) { // watch it
      this.isactive = newVal
	}
  },
  mounted() {
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
    menuClick(name) {
      console.log(name)
    if (name === 'featured') {
      this.$router.push({ path: `/` }).catch(err => {console.log(err)})
    } else {
      this.$router.push({ path: `/${name}` }).catch(err => {console.log(err)})
    }
	},
	icon(str) {
		if (str === this.active) {
			return `background-image: url(/icons/icon_${str}_w.svg); color: white; font-weight:600;`;
		}
		return `background-image: url(/icons/icon_${str}.svg);`;
	}
  }
};
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.menuPad {
  z-index: 100;
	background: $bgcolor;

	.carousel-cell {
		width: 20%;
		height: 74px;
		margin: 0px;
		padding: 0px;
		padding-left: 15px;
		background: $bgcolor;

		.block {
			width: 100%;
			height: 100%;
			background-size: 30% 30%;
			background-position: center 15px;
			background-repeat: no-repeat;
			font-size: 12px;
			display: grid;
			align-items: end;
			padding-bottom: 15px;
			color: #98accc;
		}
		.active::before {
			content: "";
			width: 20px;
			height: 70px;
			position: absolute;
			background-image: url(/arr.svg);
			bottom: 0;
			width: 100%;
			background-repeat: no-repeat;
			background-position: center;
		}
	}
}

</style>