<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import GoHomePage from '../components/GoHomePage.vue';
import Clock from '../components/Clock.vue';
import ShowDateTime from '../components/ShowDateTime.vue';
import Welcome from '../components/Welcome.vue';

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

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
					message="KCBS Facebook"
					color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
					transparent='true'
				/>
			</div>

			<Clock/>
		</div>
		
		<Welcome/>
	</div>

</template>

<style lang="scss" scoped>
@import '@/assets/scss/anime.scss';

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

// iframe {
// 	border-radius: 16px;
// 	box-shadow: 0px 4px 12px rgba(var(--gray) / 0.5);

// 	width: 100%;
// 	height: 100%;
// }

</style>