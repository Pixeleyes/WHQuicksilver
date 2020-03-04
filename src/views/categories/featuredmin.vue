<template>
    <div>
        <!-- POPULAR SLOTS -->
        <blockTitle :name="gameData.popular" :view="true"></blockTitle>
        <slider>
            <block :games="gameData.popular.data.slice(0, 5)" class="herothree"></block>
            <block :games="gameData.popular.data.slice(5, 10)" class="herothree"></block>
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
            <blockTitle :name="gameData.mustdrop" :view="true" :hidetext="false"></blockTitle>
            <slider>
                <block :games="gameData.popular.data.slice(1, 10)" class="nineblock"></block>
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
        <blockTitle :name="gameData.cardtable" :view="true"></blockTitle>
        <slider>
            <block :games="gameData.cardtable.data.slice(0, 5)" class="herothree"></block>
            <block :games="gameData.cardtable.data.slice(5, 10)" class="herothree"></block>
        </slider>        

        <!-- VEGAS MILLIONS JACKPOT-->
        <div class="jpbg">
            <blockTitle :name="gameData.vegasmillions" :view="true" :hidetext="false"></blockTitle>
            <slider>
                <block :games="gameData.popular.data.slice(1, 10)" class="nineblock"></block>
                <block :games="gameData.popular.data.slice(1, 10)" class="nineblock"></block>
            </slider>
        </div>
 

    </div>
</template>


<script>
import block from "@/modules/block"
import blockTitle from "@/modules/blockTitle"
import blockLive from "@/modules/blockLive"
import slider from "@/modules/slider"

export default {
    name: 'Featured',
    props: ['gameData'],
    components: {
        slider,
        block,
        blockTitle,
        blockLive
    },  
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";


</style>
