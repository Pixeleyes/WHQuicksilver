<template>
	<div class="carousel-cell">
		<div class="block-header">
			<ul>
				<li>
					<div>
						<video-player
							class="video-player-box"
							ref="videoPlayer"
							:options="playerOptions"
							:playsinline="true"
							@click="opengame()"
							customEventName="customstatechangedeventname"
						>
						</video-player>
					</div>
				</li>
				<li
					v-for="game in games"
					v-bind:key="game.name"
				>
					<div
						:class="{ new: game.new, exclusive: game.exclusive }" 
						:style="filename(game.name)"
						@click="opengame()"
					>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import "video.js/dist/video-js.css"
import { videoPlayer } from "vue-video-player"

export default {
	data() {
		return {
			playerOptions: {
				muted: true,
				fluid: true,
				controls: false,
				autoplay: true,
				sources: [
					{
						type: "video/mp4",
						src: "/video/eyeofhorus.mp4"
					}
				],
				poster: "/video/eyeofhorus.jpg"
			}
		}
	},
	computed: {
		player() {
			return this.$refs.videoPlayer.player
		}
	},
	name: "block",
	props: ["games", "show"],
	components: {
		videoPlayer
	},
	mounted() {

	},
	methods: {
		filename(str) {
			let result = str
				.replace(/ /g, "_")
				.toLowerCase()
				.replace(/[^a-zA-Z0-9_ ]/g, "")
			return `background-image: url(/tiles/${result}.jpg)`
		},
		playVideo() {
			window.console.log("meep")
			if (this.player.paused()) {
				this.player.play()
			}
		},
		opengame() {
			this.$router.push({ path: 'game' })
		}
	}
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.carousel-cell {
	box-sizing: border-box;
	color: white;
	width: 94%;
	margin-bottom: 15px;
}

.block-header {
	margin-right: 2%;

	ul {
		padding: 0;
		box-sizing: border-box;
		margin: 0;
		width: 100%;
		display: grid;
		grid-gap: $gridgap;
	}

	li {
		list-style-type: none;
		margin: 0;
		width: 100%;
		border-radius: $gridcorners;
		display: grid;
		justify-content: center;
		align-content: center;
		position: relative;
		cursor: pointer;
		padding-top: 100%;

		div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 3px;
			box-sizing: border-box;
			padding: 10px;
			display: grid;
			align-items: center;
			color: $fontprimary;
			font-size: $gridfontsize;
			background-size: 100% 100%;
		}
	}
}

.new::before {
	content: "New";
    width: auto;
    position: absolute;
    top: -4px;
    left: -4px;
    overflow: visible;
    text-shadow: 0px 0px 4px rgba(0, 20, 60, 0.4);
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 600;
    color: white;
    box-shadow: 2px 2px 4px 0px rgba(0, 20, 60, 0.4);
    background: linear-gradient(270deg, rgba(249,194,2,1) 35%, rgba(241,143,1,1) 100%);
}

.exclusive::before {
	content: "Exclusive";
    width: auto;
    position: absolute;
    top: -4px;
    left: -4px;
    overflow: visible;
    text-shadow: 0px 0px 4px rgba(0, 20, 60, 0.4);
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 600;
    color: white;
    box-shadow: 2px 2px 4px 0px rgba(0, 20, 60, 0.4);
    background: linear-gradient(90deg, rgba(1,186,239,1) 35%, rgba(2,222,248,1) 100%);
}

.hero {
	.block-header {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-areas:
				"lead lead lead"
				"one two three";
		}

		li {
			&:nth-child(1) {
				padding-top: 56.25%;
				grid-area: lead;

				div {
					padding: 0px;
				}
			}
		}
	}
}

.herofour {
	.block-header {
		ul {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-areas:
			"lead lead lead lead"
			"one two three four";
		}
	
		li {
			&:nth-child(1) {
				padding-top: 56.25%;
        grid-area: lead;
        
				div {
					padding: 0px;
				}        
			}
		}
	}
}

</style>
