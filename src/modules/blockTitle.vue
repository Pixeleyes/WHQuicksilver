<template>
    <div class="title">
        <h2 v-if="!hidetext">{{ name.title }}</h2>
        
        <div v-if="view" class="viewall" @click="menuClick(name.link)">View All</div>
        <p v-if="!hidetext">{{name.desc}}</p>
    </div>
</template>


<script>

export default {
    name: 'blockTitle',
    props: ['name', 'view', 'hidetext'],
    methods: {
        menuClick(name) {
            this.$router.push({ path: `${name}`}).catch(err => {console.log(err)})
        }
    }  
}
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.title {
    font-size: 16px;
    color: $fontprimary;
    text-align: left;
    padding: 10px 12px 5px 12px;
    display: grid;
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    grid-template-areas: 't t'
                         'd m';
    align-items: center;

    h2 {
        font-size: 16px;
        font-weight:500;
        color: rgba(46, 64, 104, 1);
        grid-area: t;
    }

    p {
        font-size: 12px;
        color: #546d91;
        grid-area: d;
        margin-top: 5px;
        margin-bottom: 5px;
    }
}

.viewall {
	text-align: right;
    cursor: pointer;
    background: white;
    color:rgba(34, 144, 199, 1);
    font-size: 12px;
    font-weight: 600;
    padding: 4px;
    border-radius: 3px;
    grid-area: m;
}

.nova {
    .viewall {
        display: none;
    }
}

</style>
