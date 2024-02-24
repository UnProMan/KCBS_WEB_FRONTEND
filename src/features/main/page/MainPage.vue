<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import GoHomePage from '../components/GoHomePage.vue';
import Clock from '../components/Clock.vue';
import Welcome from '../components/Welcome.vue';

</script>

<template>

	<div class="mainpage-container">
		
		<div class="left-container layout__flexColumn">
			<div class="homepage-container">
				<GoHomePage
					iconName="fa-brands fa-youtube"
					href="https://www.youtube.com/@kcbs7444"	
					message="KCBS Youtube"
					color="rgb(255, 0, 0)"
				/>

				<GoHomePage
					iconName="fa-brands fa-instagram"
					href="https://www.instagram.com/koreatech_kcbs"	
					message="KCBS Instagram"
					color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
					transparent
				/>
			</div>

			<Clock class="clock-view" />
		</div>
		
		<Welcome/>
	</div>

</template>

<style lang="scss" scoped>
@import '@/assets/scss/anime.scss';

// ---------------------- PC ----------------------

@media screen and (min-width: 1025px) { 

.mainpage-container {
	display: grid;
	grid-template-columns: 1fr 1.25fr;
	gap: 35px;

	width: 80%;
	height: 80%;

	@include card_fade_in;
}

.left-container {
	gap: 35px;

	width: 100%;
	height: 100%;
}

.homepage-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 45px;
}

.other-container {
	display: grid;
	grid-template-rows: 1fr 3.5fr;
	gap: 35px;

	height: 70%;
}

}


// ---------------------- Phone ----------------------


@media screen and (max-width: 1024px) {

.mainpage-container {
	display: grid;
	grid-template-rows: 1fr 3fr;
	gap: 20px;

	width: 80%;
	height: 85%;

	@include card_fade_in;
}

.homepage-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
}

.clock-view {
	visibility: hidden;
	display: none;
}

}

</style>