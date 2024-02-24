<script setup>
import { formatDateTime } from '@/components/functions/formatFunc';
import BaseCard from '@/components/base/BaseCard.vue';

const deg = 6;
const hr = document.getElementsByClassName('hr');
const mn = document.getElementsByClassName('mn');
const sc = document.getElementsByClassName('sc');
const text = document.getElementsByClassName('datetime-text');

setInterval(() => {
    const day = new Date();

    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;

    if (hr && mn && sc) {
        hr[0].style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn[0].style.transform = `rotateZ(${mm}deg)`;
        sc[0].style.transform = `rotateZ(${ss}deg)`;
    }
    text[0].innerText = formatDateTime(new Date());
}, 1000);

</script>

<template>
    
    <BaseCard class="layout__flexColumn">
        <div class="clock">
            <div class="hour">
                <div id="hr" class="hr"></div>
            </div>
            <div class="min">
                <div id="mn" class="mn"></div>
            </div>
            <div class="sec">
                <div id="sc" class="sc"></div>
            </div>
        </div>

        <div class="datetime-text"></div>

    </BaseCard>
</template>

<style lang="scss" scoped>

.layout__flexColumn {
    gap: 40px;
    text-align: center;
    justify-content: center;
    align-items: center;

    height: 70%;
}

.clock{
    width: 20vw; 
    height: 20vw; 

    display:flex; 
    justify-content: center; 
    align-items: center;

    background: url("@/assets/clock.png");
    background-size: cover;
    border: 4px solid #091921;
    border-radius: 50%;
}

.clock:before {
    content: '';
    position: absolute;

    width: 15px;
    height: 15px;    

    background:#000;
    border-radius: 50%;
    z-index : 10;
}

.clock .hour,
.clock .min,
.clock .sec{
    position: absolute;
}

.clock .hour .hr{
    width: 10vw;
    height: 10vw;
}

.clock .min .mn{
    width: 12vw;
    height: 12vw;
}

.clock .sec .sc{
    width: 12.5vw;
    height: 12.5vw;
}

.hr, .mn, .sc{
    display: flex; 
    justify-content: center; 
    border-radius: 50%;
}

.hr:before{
    content: '';
    position: absolute;

    width: 8px;
    height: 5vw;    
    
    background:#ff105e;
    z-index : 10;
    border-radius: 6px 6px 0 0;
}

.mn:before{
    content: '';
    position: absolute;

    width: 4px;
    height: 7vw;    

    background:#ff105e;
    z-index : 10;
    border-radius: 6px 6px 0 0;
}

.sc:before{
    content: '';
    position: absolute;

    width: 2px;
    height: 7.5vw;    

    background:#000;
    z-index : 10;
    border-radius: 6px 6px 0 0;
}

.datetime-text {
    font-size: 1.8vmin;
    font-weight: 500;
}

</style>