<template>
    <div>
        <blockTitle :name="gameData.az" :view="false"></blockTitle>

            <blockList :games="gameData.popular.data.slice(0, 9)" class="herothree"></blockList>
            <blockList :games="gameData.popular.data.slice(0, 9)" class="herothree"></blockList>
            <blockList :games="gameData.popular.data.slice(0, 9)" class="herothree"></blockList>
              
    </div>
</template>


<script>
import blockTitle from "@/modules/blockTitle"
import blockList from "@/modules/blockList"


export default {
    name: 'Featured',
    props: ['gameData'],
    components: {
        blockTitle,
        blockList
    },  
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.herothree {
    margin-left: 2%;
}

</style>
