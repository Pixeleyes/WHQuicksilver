<template>
	<div class="carousel-cell" :class="jackpot">
		<div class="block-header">
			<ul>
				<li class="grad">
					<div class="jackblock">
						<div class="cen">
							<img :src="'/'+jackpot+'.png'" />
						</div>
					</div>
				</li>
				<li v-for="game in games" v-bind:key="game.name">
					<div
						:class="{ new: game.new, exclusive: game.exclusive }"
						:style="filename(game.name)"
					></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "jackblock",
	props: ["games", "jackpot"],
	methods: {
		filename(str) {
			let result = str
				.replace(/ /g, "_")
				.toLowerCase()
				.replace(/[^a-zA-Z0-9_ ]/g, "")
			return `background-image: url(/tiles/${result}.jpg)`
		}
	}
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";



.grad {
	background: rgb(0, 51, 129);
	background: linear-gradient(
		37deg,
		rgba(0, 51, 129, 1) 0%,
		rgba(92, 37, 141, 1) 100%
	) !important;
    border-radius: 3px;
    overflow: visible;
}



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
			box-sizing: border-box;
            padding: 10px;
            border-radius: 3px;
			display: grid;
			align-items: center;
			color: $fontprimary;
			font-size: $gridfontsize;
			background-size: 100% 100%;
		}
	}
}

.mustdrop {
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
            }
            .jackblock {
                background: url("/mustdrop_info.png");
                background-size: cover;
                .cen {
                    width: 60% !important;
                    margin: 0 auto;
                    position: relative !important;

                    img {
                        position: absolute !important;
                        top: -55px !important;
                        width: 100% !important;
                    }
                }
            }
		}
	}
}

.vegasmillions {
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

			}			
            .jackblock {
                background: url("/vegasmillions_info.png");
                background-size: cover;
                .cen {
                    width: 44% !important;
                    margin: 0 auto;
                    position: relative !important;

                    img {
                        position: absolute !important;
                        top: -55px !important;
                        width: 100% !important;
                    }
                }
            }
		}
	}
}
</style>
