<template>
  <div class="carousel-cell">
    <div class="block-header-list">
      <ul>
        <li v-for="game in games" v-bind:key="game.name">
          <div :style="filename(game.name)" :class="{ new: game.new, exclusive: game.exclusive }" class="image"></div>
          <div class="text">
            <h5>Game Description &amp; Tags</h5>
            <h4>{{ game.name }}</h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "blockList",
  props: ["games", "show"],
  methods: {
    filename(str) {
      let result = str
        .replace(/ /g, "_")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9_ ]/g, "");
      return `background-image: url(/tiles/${result}.jpg)`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.carousel-cell {
  box-sizing: border-box;
  color: white;
  width: 94%;
  margin-bottom: 15px;
}


.block-header-list {
  margin-right: 2%;

  ul {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0
  }

  li {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 6fr;
    position: relative;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 0px 1px 0px 0px rgba(215, 227, 255, 1)
  }

    li:first-child {
    box-shadow: 0px 1px 0px 0px rgba(215, 227, 255, 1), 0px -1px 0px 0px rgba(215, 227, 255, 1);
  }


  .image {
    //background: $gridcolor;
    background: white;
    padding-top: 100%;
    border-radius: 3px;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .text {
    color: $fontprimary;
    text-align: left;
    margin-left: 10px;
    align-self: center;

    h4{
      font-size:12px;
      font-weight: 600;
      color: rgba(46, 64, 104, 1);


    }


    h5 {
      font-size:10px;
      color: rgba(84, 109, 145, 1);
      margin-bottom: 4px;
    }
  }
}

</style>
