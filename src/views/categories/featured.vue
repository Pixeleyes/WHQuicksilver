<template>
    <div>
        <!-- POPULAR SLOTS -->
        <blockTitle :name="gameData.popular" :view="true"></blockTitle>
        <slider>
            <blockVideo :games="gameData.popular.data.slice(1, 4)" class="hero"></blockVideo>
            <block :games="gameData.popular.data.slice(4, 8)" class="hero"></block>
            <block :games="gameData.popular.data.slice(8, 12)" class="hero"></block>
        </slider>

        <!-- RECENTLY PLAYED -->
        <blockTitle :name="gameData.recent" :view="false"></blockTitle>
        <slider>
            <block :games="gameData.recent.data.slice(0, 3)" class="single"></block>
            <block :games="gameData.recent.data.slice(3, 6)" class="single"></block>
            <block :games="gameData.recent.data.slice(6, 9)" class="single"></block>
        </slider>

        <!-- MUST DROP JACKPOT-->
        <div class="jpbg">
            <blockTitle :name="gameData.mustdrop" :view="true" :hidetext="true"></blockTitle>
            <slider>
                <blockJackpot :games="gameData.popular.data.slice(1, 6)" jackpot="mustdrop"></blockJackpot>
                <block :games="gameData.popular.data.slice(1, 10)" class="nineblock"></block>
            </slider>
        </div>

        <!-- CARD & TABLE -->
        <blockTitle :name="gameData.live" :view="false"></blockTitle>
        <slider>
            <blockLive :games="gameData.live.data.slice(0, 5)" class="herothree"></blockLive>
            <blockLive :games="gameData.live.data.slice(5, 10)" class="herothree"></blockLive>
        </slider>      

        <!-- CARD & TABLE -->
        <blockTitle :name="gameData.cardtable" :view="false"></blockTitle>
        <slider>
            <blockList :games="gameData.cardtable.data.slice(0, 5)"></blockList>
            <blockList :games="gameData.cardtable.data.slice(5, 10)"></blockList>
        </slider>        

        <!-- VEGAS MILLIONS JACKPOT-->
        <div class="jpbg">
            <blockTitle :name="gameData.vegasmillions" :view="true" :hidetext="true"></blockTitle>
            <slider>
                <blockJackpot :games="gameData.popular.data.slice(1, 4)" jackpot="vegasmillions"></blockJackpot>
                <block :games="gameData.popular.data.slice(1, 10)" class="nineblock"></block>
            </slider>
        </div>

        <!-- Themes -->
        <blockTitle :name="gameData.themes" :view="false"></blockTitle>
        <slider>
            <blockThemes :games="gameData.themes.data.slice(0, 3)" class="single"></blockThemes>
            <blockThemes :games="gameData.themes.data.slice(4, 6)" class="single"></blockThemes>
        </slider>    

    </div>
</template>


<script>
import block from "@/modules/block"
import blockVideo from "@/modules/blockVideo"
import blockTitle from "@/modules/blockTitle"
import blockJackpot from "@/modules/blockJackpot"
import blockList from "@/modules/blockList"
import blockLive from "@/modules/blockLive"
import blockThemes from "@/modules/blockThemes"
import slider from "@/modules/slider"

export default {
    name: 'Featured',
    props: ['gameData'],
    components: {
        slider,
        block,
        blockVideo,
        blockTitle,
        blockJackpot,
        blockList,
        blockLive,
        blockThemes
    },  
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";


</style>
