<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">


#app {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .flickity-viewport {
    overflow: visible!important;
    position: relative;
    height: 100%;
}




html {
  padding: 0;
  margin: 0;
  background: #394150;
}

/* Resets */
:focus {
    outline: 0px;
}

body {
	margin: 0;
	overflow: hidden;
}

html {
	line-height: 1.15; /* 1 */
	width: 100vw;
	overflow-x: hidden;
	-webkit-text-size-adjust: 100%; /* 2 */
}

a {
	background-color: transparent;
}

img {
	border-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	clear: both;
	margin: 0;
	font-weight: 400;
}

p {
	margin-bottom: 1.5em;
}

html {
	box-sizing: border-box;
}

*,
*:before,
*:after {
	/* Inherit box-sizing to make it easier to change the property for components that leverage other behavior; see https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
	box-sizing: inherit;
}

ul,
ol {
	margin: 0 0 1.5em 3em;

	list-style: none;
}

li > ul,
li > ol {
	margin-bottom: 0;
	margin-left: 1.5em;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
	outline: none;
}
</style>
