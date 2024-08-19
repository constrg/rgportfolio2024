<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const AssetsData = '/data/assets_data.json';
const FrontEnds = ref([]);

const isLoading = ref(true);

onMounted(async () => {
    try {
        const res = await axios.get(AssetsData);
        FrontEnds.value = res.data.FrontEnds;
    } catch (error) {
        console.log('Error Fetching Data', error);
    } finally {
        isLoading.value = false;
    }
});
</script>
<template>
    <div class="front-end">
        <div class="container">
            <h1 class="front-end-title">Front-Ends</h1>

            <template v-if="isLoading">
                <div class="container">
                    <h1 class="loading-title">Loading...</h1>
                </div>
            </template>

            <template v-else>
                <div class="front-end-list">
                    <div class="front-end-item" v-for="(frontend, index) in FrontEnds" :key="index">
                        <img class="front-end-img" draggable="false" :src="frontend.image" :alt="frontend.name">
                        <div class="front-end-overlay">
                            <a class="front-end-link" :href="frontend.link" target="_blank">Visit <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></a>
                        </div>
                    </div>
                </div>
                <a class="see-more-link" href="https://github.com/constrg" target="_blank">See more</a>
            </template>
        </div>
    </div>
</template>

<style scoped>
.front-end
{
    padding-block: 120px;
}

.front-end .front-end-title
{
    font-size: var(--fs-xl);
    color: rgb(var(--clr-accent));
    margin-bottom: 20px;
}

.front-end .loading-title
{
    color: rgb(var(--clr-accent));
    font-size: var(--fs-base);
    text-align: center;
}

.front-end .front-end-list
{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 40px;
}

.front-end .front-end-list .front-end-item
{
    position: relative;
    overflow: hidden;
}

.front-end .front-end-list .front-end-img
{
    width: 100%;
    display: block;
}

.front-end .front-end-list .front-end-item .front-end-overlay
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(var(--clr-dark), 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    transition: all 0.3s ease-in-out;
}

.front-end .front-end-list .front-end-item .front-end-overlay .front-end-link
{
    padding: 20px;
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.front-end .front-end-list .front-end-item .front-end-overlay .front-end-link .arrow-up-right-icon
{
    width: 15px;
    filter: invert(100%);
}

.front-end .front-end-list .front-end-item:hover .front-end-overlay
{
    transform: translateY(0%);
}

.front-end .see-more-link
{
    padding: 20px;
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Laptop */
@media (max-width: 1024px) {
    .front-end .front-end-title
    {
        font-size: var(--fs-lg);
    }
}

/* Tablet */
@media (max-width: 834px) {
    .front-end .front-end-title
    {
        font-size: var(--fs-md);
    }
    .front-end .front-end-list
    {
        grid-template-columns: 1fr;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .front-end .front-end-title
    {
        font-size: var(--fs-sm);
    }
}
</style>