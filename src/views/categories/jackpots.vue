<template>
    <div>
        <!-- MUST DROP JACKPOT-->
        <div class="jpbg">
            <blockTitle :name="gameData.mustdrop" :view="true" :hidetext="true"></blockTitle>
            <slider>
                <blockJackpot :games="gameData.popular.data.slice(1, 6)" jackpot="mustdrop"></blockJackpot>
                <block :games="gameData.popular.data.slice(1, 10)" class="nineblock"></block>
            </slider>
        </div>

        <div style="padding-bottm: 20px"></div>
        <!-- VEGAS MILLIONS JACKPOT-->
        <div class="jpbg">
            <blockTitle :name="gameData.vegasmillions" :view="true" :hidetext="true"></blockTitle>
            <slider>
                <blockJackpot :games="gameData.popular.data.slice(1, 4)" jackpot="vegasmillions"></blockJackpot>
                <block :games="gameData.popular.data.slice(1, 10)" class="nineblock"></block>
            </slider>
        </div>
    </div>
</template>


<script>
import block from "@/modules/block"
import blockTitle from "@/modules/blockTitle"
import blockJackpot from "@/modules/blockJackpot"
import slider from "@/modules/slider"

export default {
    name: 'Featured',
    props: ['gameData'],
    components: {
        slider,
        block,
        blockTitle,
        blockJackpot
    },  
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";


</style>
