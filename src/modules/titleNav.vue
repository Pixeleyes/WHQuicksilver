<template>
    <div class="titleblock">
        <div class="titlebg"></div>
        <div class="toptitle">
            <div class="breadcrumb">Sports</div>
            <h2>Gaming</h2>
            <div class="close">
            </div>
        </div>
        <div class="bg">
			<div class="rule"></div>
		</div>
    </div>
</template>

<script>
export default {
    name: "titleNav"
}

</script>

<style scoped lang="scss">
@import "@/style/global.scss";

.titleblock {
	display: grid;
	grid-template-columns: 100%;
	grid-template-areas: "content";

    .titlebg {
        background: url(/header.jpg);
        background-size: 100% 100%;
        grid-area: content;
        padding-top: calc(164 / 750 * 100%);
    }

    .bg {
        background: $bgcolor;

        .rule {
            width: 94%;
            margin: 0 auto;
            border-bottom: 1px solid #314064;
        }
    }

    .toptitle {

        padding: 16px 12px 10px 12px;
        color:white;
        grid-area: content;

        h2 {
            text-align: left;
            font-size: 20px;
            font-weight: 600;
            padding-top: 3%;
        }
        .breadcrumb {
            text-align: left;
            font-weight: normal;
            font-size: 12px;
            color: #98accc;
            margin-bottom: 0px;

            &:before {
                content: "";
                width: 20px;
                height: 10px;
                display: inline-block;
                background-color: #98accc;
                mask-image: url(/icons/arrow.svg);
                mask-repeat: no-repeat;
            }

        }
    }
}





</style>
