<template>
    <div class="carousel-cell">
        <div class="block-header">
            <ul>
                <li v-for="game in games" v-bind:key="game.name">
                    <div :style="filename(game.name)">{{ game.name }}</div>
                </li>                
            </ul>
        </div>
    </div>
</template>


<script>

export default {
	name: 'block',
	props: ['games', 'show'],
	methods: {
		filename(str) {
			let result = str.replace(/ /g,"_").toLowerCase().replace(/[^a-zA-Z0-9_ ]/g, "");
			return `background-image: url(/svg/${result}.svg)`;
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
		background: white;
		border-radius: $gridcorners;
		display: grid;
		justify-content: center;
		align-content: center;
		position: relative;
		cursor: pointer;
		padding-top: 100%;
		overflow: hidden;

		div {
			position: absolute;
			top: 0;
			color: rgba(46, 64, 104, 1);
			font-weight: 600;
			left: 0;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 10px 10px 15% 10px;;
			display: grid;
			align-items: end;
			font-size: $gridfontsize;
			background-size: 50% 50%;
			background-repeat: no-repeat;
			background-position: center 30%;
			
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
			}			&:nth-child(2) {
				padding-top: 100%;
				grid-area: leadb;
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


.carousel-cell {
	&.noscroll {
		width: 100%;
	}
}
.noscroll {
	.block-header {
		margin-right: 2%;
		margin-left: 2%;
	}
}
</style>
