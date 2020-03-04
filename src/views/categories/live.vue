<template>
    <div>
        <!-- Blackjack -->
        <blockTitle :name="gameData.liveblackjack" :view="true"></blockTitle>
        <slider>
            <blockLive :games="gameData.liveblackjack.data.slice(0, 5)" class="herothree"></blockLive>
            <blockLive :games="gameData.liveblackjack.data.slice(5, 10)" class="herothree"></blockLive>
        </slider>
        <!-- Game Show -->
        <blockTitle :name="gameData.liveroulette" :view="true"></blockTitle>
        <slider>
            <blockLive :games="gameData.liveroulette.data.slice(0, 5)" class="herothree"></blockLive>
            <blockLive :games="gameData.liveroulette.data.slice(5, 10)" class="herothree"></blockLive>
        </slider>
     
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
