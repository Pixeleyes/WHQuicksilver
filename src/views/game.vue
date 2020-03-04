<template>
	<div class="wrapper">
		<div class="grid">
           
           <div class="game">
               
               <h2>GAME LOAD</h2>
               <div class="close" @click="backone()">
                   Close Game
               </div>
            
            </div>
			
		</div>
		
	</div>
</template>

<script>



export default {
	name: "page",
	components: {

	},
	data() {
		return {

		}
	},
	mounted() {
    
    },

	methods: {
        backone() {
            this.$router.go(-1)
        }
	}
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.close {
    background: white;
    padding: 8px;
    border-radius: 5px;
    color: $bgcolor

}

.game {
    width: 100%;
    height: 100vh;
    background: $bgcolor;
    display: grid;
    align-items: center;
    justify-items: center;
    color: white;
}

.wrapper {
	.grid {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
		background: white;
		
	}  
}


</style>
