<template>
	<div class="carousel-cell">
		<div class="block-header">
			<ul>
				<li v-for="game in games" v-bind:key="game.name">
					<div
						:class="{ new: game.new, exclusive: game.exclusive }"
						:style="filename(game.name)"
						@click="opengame()"
					></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "block",
	props: ["games"],
	methods: {
		filename(str) {
			let result = str
				.replace(/ /g, "_")
				.toLowerCase()
				.replace(/[^a-zA-Z0-9_ ]/g, "")
			return `background-image: url(/tiles/${result}.jpg)`
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
			}
		}
	}
}

.herotwo {
	.block-header {
		ul {
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-areas:
				"leada leada leadb leadb"
				"one two three four";
		}

		li {
			&:nth-child(1) {
				padding-top: 100%;
				grid-area: leada;
			}
			&:nth-child(2) {
				padding-top: 100%;
				grid-area: leadb;
			}
		}
	}
}

.herothree {
	.block-header {
		ul {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
			grid-template-areas:
				"leada leada leada leadb leadb leadb"
				"one one two two three three";
		}

		li {
			&:nth-child(1) {
				padding-top: 100%;
				grid-area: leada;
			}
			&:nth-child(2) {
				padding-top: 100%;
				grid-area: leadb;
			}
			&:nth-child(3) {
				padding-top: 100%;
				grid-area: one;
			}
			&:nth-child(4) {
				padding-top: 100%;
				grid-area: two;
			}
			&:nth-child(5) {
				padding-top: 100%;
				grid-area: three;
			}
		}
	}
}

.nineblock {
	.block-header {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
}

.nineblockhero {
	.block-header {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-areas:
				"leada leada ."
				"leada leada ."
				". . .";
		}

		li {
			&:nth-child(1) {
				padding-top: 100%;
				grid-area: leada;

				div {
					background: #ffffff40 !important;
				}
			}
		}
	}
}

.nineblockbanner {
	.block-header {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-areas:
				"leada leada leada"
				"leada leada leada"
				". . .";
		}

		li {
			&:nth-child(1) {
				padding-top: 65.55%;
				grid-area: leada;

				div {
					background: #ffffff40 !important;
				}
			}
		}
	}
}

.single {
	.block-header {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-areas:
				"lead lead lead"
				"one two three";
		}
	}
}
</style>
