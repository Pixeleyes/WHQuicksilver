<template>
    <div>
        <!-- Blackjack -->
        <blockTitle :name="gameData.blackjack" :view="false"></blockTitle>
        <slider>
            <blockLive :games="gameData.blackjack.data.slice(0, 5)" class="herothree"></blockLive>
            <blockLive :games="gameData.blackjack.data.slice(5, 10)" class="herothree"></blockLive>
        </slider>
        <!-- Game Show -->
        <blockTitle :name="gameData.roulette" :view="false"></blockTitle>
        <slider>
            <blockLive :games="gameData.roulette.data.slice(0, 5)" class="herothree"></blockLive>
            <blockLive :games="gameData.roulette.data.slice(5, 10)" class="herothree"></blockLive>
        </slider>
        <!-- Roulette -->
        <blockTitle :name="gameData.blackjack" :view="false"></blockTitle>          
    </div>
</template>


<script>
import blockTitle from "@/modules/blockTitle"
import blockLive from "@/modules/blockLive"
import slider from "@/modules/slider"

export default {
    name: 'Featured',
    props: ['gameData'],
    components: {
        slider,
        blockTitle,
        blockLive
    },  
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";


</style>
