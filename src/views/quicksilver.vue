<template>
	<div class="wrapper">
		<div class="grid">
            <titleNav></titleNav>
			<mainNav 
                :items="menuData" 
                :active="currentCat" 
                @game="navGoto($event)">
            </mainNav>
            <subNav
                v-if="showSubnav"
                :type="currentSub"
                :active="activeSub" 
                :key="subKey()" 
                >
            </subNav>
            <searchBar :string="searchString()"></searchBar>


            <category-featured :gameData="gameData" v-if="currentCat === 'featured'"></category-featured>

            <category-slots :gameData="gameData" v-if="currentCat === 'slots' && !activeSub"></category-slots>

            <category-jackpots :gameData="gameData" v-if="currentCat === 'jackpots' && !activeSub"></category-jackpots>

            <category-live :gameData="gameData" v-if="currentCat === 'live' && !activeSub"></category-live>

            <div v-if="activeSub && activeSub != 'featured'">
                <blockTitle :name="gameData[activeSub]" :view="false"></blockTitle>					
                <div class="quickgame">
                    <div v-for="game in gameData[activeSub].data" v-bind:key="game.name" :style="filename(game.name)">
                    </div>
                </div>
            </div>




			<div style="margin-bottom:60px"></div>
			<div class="footer"></div>
			
		</div>
		
	</div>
</template>

<script>
import mainNav from "@/modules/mainNav"
import subNav from "@/modules/subNav"
import titleNav from "@/modules/titleNav"
import searchBar from "@/modules/search"

import blockTitle from "@/modules/blockTitle"

import gameData from "@/data/games";
import jackpotData from "@/data/jackpots";
import menuData from "@/data/menu";

import categoryFeatured from "@/views/categories/featured";
import categorySlots from "@/views/categories/slots";
import categoryJackpots from "@/views/categories/jackpots";
import categoryLive from "@/views/categories/live";



export default {
	name: "page",
	components: {
		mainNav,
        subNav,
        titleNav,
        searchBar,
        blockTitle,
        categoryFeatured,
        categorySlots,
        categoryJackpots,
        categoryLive
	},
	data() {
		return {
            currentCat: 'featured',
            currentSub: null,
            activeSub: '',
            showSubnav: false,
            gameData: gameData,
            jackpotData: jackpotData,
            menuData: menuData,
		}
	},
	mounted() {
        this.currentCat = this.$route.params.category
        if (!this.currentCat) { this.currentCat = 'featured'}
        this.currentSub = this.menuData[this.currentCat]
        this.activeSub = this.$route.params.subcategory
            if (this.currentSub.sub) {
                this.showSubnav = true
            } else {
                this.showSubnav = false
            }        
    },
    watch: {
        $route(to) {
            this.currentCat = to.params.category
            if (!this.currentCat) { this.currentCat = 'featured'}
            this.activeSub = to.params.subcategory
            this.currentSub = this.menuData[this.currentCat]
            if (this.currentSub.sub) {
                this.showSubnav = true
            } else {
                this.showSubnav = false
            }
        }
    },
	methods: {
		navGoto(e) {
            this.currentCat = e
            this.currentSub = this.menuData[e].sub
        },
		filename(str) {
			let result = str.replace(/ /g,"_").toLowerCase().replace(/[^a-zA-Z0-9_ ]/g, "");
			return `background-image: url(/tiles/${result}.jpg)`;
        },
        subKey() {
            if (this.currentSub) {
                return (this.currentSub.slug ? `sub-${this.currentSub.slug}` : 'featured');
            }
            return 'featured'
        },        
        searchString() {
            return (this.currentSub.search ? this.currentSub.search : null);
        }
	}
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.quickgame {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
    margin: 0 12px 22px 12px;
}

.quickgame > div {
    width: 100%;
    height: 100%;
    padding-top: 100%;
    display: block;
	border-radius: 3px;
	background-size: cover;
	box-shadow: 0px 2px 6px 2px rgba(0, 20, 60, 0.15);
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
    .footer {
        background: url('/footer.jpg');
        width: 100%;
        background-size: 100% 100%;
        position: fixed;
        bottom: 0;
        z-index: 1000000;
        padding-top: calc(45 / 375 * 100%);
    }   
}


</style>
