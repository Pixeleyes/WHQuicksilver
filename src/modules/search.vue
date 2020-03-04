<template>
    <div class="search">
		<input :placeholder="string">
	</div>
</template>

<script>
export default {
	name: "slider",
	mounted() {

    },
    props: ['string'],
	methods: {

	}
};
</script>

<style scoped lang="scss">
    .search {
        background:rgba(245, 248, 255, 1);
        padding: 16px 12px;

        input {
            border: none;
            width: 100%;
            font-size: 12px;
            color: rgba(84, 109, 145, 1);
            height: 46px;
            border-radius: 3px;
            box-shadow: 0px 0px 10px 0px rgba(22, 39, 81, 0.15);
            padding: 10px;
            background-image: url(/icons/search.svg);
            background-repeat: no-repeat;
            background-position: right 0px center;
        }
        ::placeholder {
            color: rgba(84, 109, 145, 1);
        }
    }
</style>
