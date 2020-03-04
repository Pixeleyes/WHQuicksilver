<template>
    <div>
        <!-- POPULAR SLOTS -->
        <blockTitle :name="gameData.roulette" :view="true"></blockTitle>
        <slider>
            <block :games="gameData.roulette.data.slice(0, 4)" class="hero"></block>
            <block :games="gameData.roulette.data.slice(4, 8)" class="hero"></block>
        </slider>
        <!-- POPULAR SLOTS -->
        <blockTitle :name="gameData.blackjack" :view="true"></blockTitle>
        <slider>
            <blockList :games="gameData.blackjack.data.slice(0, 5)" class="herothree"></blockList>
        </slider>
        <!-- POPULAR SLOTS -->
        <blockTitle :name="gameData.popular" :view="true"></blockTitle>
        <slider>
            <block :games="gameData.cardtable.data.slice(0, 5)" class="herothree"></block>
            <block :games="gameData.cardtable.data.slice(5, 10)" class="herothree"></block>
        </slider>             
    </div>
</template>


<script>
import block from "@/modules/block"
import blockTitle from "@/modules/blockTitle"
import blockList from "@/modules/blockList"
import slider from "@/modules/slider"

export default {
    name: 'Featured',
    props: ['gameData'],
    components: {
        slider,
        block,
        blockTitle,
        blockList
    },  
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";


</style>
