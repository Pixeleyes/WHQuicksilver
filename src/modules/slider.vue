<template>
	<flickity ref="flickity" :options="flickityOptions">
		<slot></slot>
	</flickity>
</template>

<script>
import Flickity from "vue-flickity"
export default {
	name: "slider",
	data() {
		return {
			flickityOptions: {
				initialIndex: 0,
				prevNextButtons: false,
				pageDots: false,
				wrapAround: false,
				freeScroll: false,
				dragThreshold: 2,
				friction: 0.2
				//cellAlign: 'left'
			}
		}
	},
	components: {
		Flickity
	},
	mounted() {
		(function() {
			let touchingCarousel = false,
				touchStartCoords
			document.body.addEventListener("touchstart", function(e) {
				if (e.target.closest(".flickity-slider")) {
					touchingCarousel = true
				} else {
					touchingCarousel = false
					return
				}
				touchStartCoords = {
					x: e.touches[0].pageX,
					y: e.touches[0].pageY
				}
			})
			document.body.addEventListener(
				"touchmove",
				function(e) {
					if (!(touchingCarousel && e.cancelable)) {
						return
					}
					let moveVector = {
						x: e.touches[0].pageX - touchStartCoords.x,
						y: e.touches[0].pageY - touchStartCoords.y
					}
					if (Math.abs(moveVector.x) > 7) e.preventDefault()
				},
				{ passive: false }
			)
		})()
	},
	methods: {
		next() {
			this.$refs.flickity.next()
		},
		previous() {
			this.$refs.flickity.previous()
		},
		loadgame() {
			this.$emit("lg")
		},
		rerender() {
			this.$refs.flickity.rerender()
		}
	}
}
</script>

<style scoped lang="scss"></style>
