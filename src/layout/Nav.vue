<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isNavActive = ref(false);

const scrollHandler = () => {
    isNavActive.value = window.scrollY > 0;
}

onMounted(() => {
    window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
});
</script>
<template>
    <nav :class="['nav', [isNavActive ? 'nav-active' : '']]">
        <ul class="nav-list">
            <li class="nav-item"><RouterLink class="nav-link" :to="{name: 'home'}">Home</RouterLink></li>
            <li class="nav-item"><a class="nav-link" href="./#works">Works</a></li>
            <li class="nav-item"><a class="nav-link" href="mailto:ricardolacadgarcia@gmail.com">Email Me</a></li>
            <li class="nav-item"><a class="nav-link" href="./rgresume2024.pdf" download="rgresume2024">DL Resume</a></li>
        </ul>
    </nav>
</template>

<style scoped>
.nav 
{
    position: sticky;
    top: 0;
    z-index: 999;
}

.nav.nav-active
{
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}

.nav .nav-list
{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

}

.nav .nav-list .nav-item
{
    padding-block: 20px;
    text-align: center;
    border-right: 1px solid rgb(var(--clr-light), 0.2);
    border-bottom: 1px solid rgb(var(--clr-light), 0.2);
    width: 100%;
    transition: all 0.3s ease-in-out;
}

.nav .nav-list .nav-item:nth-child(even)
{
    border-right: unset;
}

.nav .nav-list .nav-item:hover 
{
    background-color: rgb(var(--clr-light), 0.1);
}
</style>