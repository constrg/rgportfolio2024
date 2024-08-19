<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const AssetsData = '/data/assets_data.json';
const WebDesigns = ref([]);

const isLoading = ref(true);

onMounted(async () => {
    try {
        const res = await axios.get(AssetsData);
        WebDesigns.value = res.data.WebDesigns;
    } catch (error) {
        console.log('Error Fetching Data', error);
    } finally {
        isLoading.value = false;
    }
});
</script>
<template>
    <div class="web-design"  data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
        <div class="container">
            <h1 class="web-design-title">Web Designs</h1>

            <template v-if="isLoading">
                <h1 class="loading-title">Loading...</h1>
            </template>

            <template v-else>
                <div class="web-design-list" >
                    <div class="web-design-item" v-for="(webDesign, index) in WebDesigns" :key="index">
                        <img class="web-design-img" draggable="false" :src="webDesign.image" :alt="webDesign.name">
                        <div class="web-design-overlay">
                            <a class="web-design-link" :href="webDesign.link" target="_blank">Visit <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></a>
                        </div>
                    </div>
                </div>
            </template>

        </div>
    </div>
</template>

<style scoped>
.web-design
{
    padding-block: 120px;
}

.web-design .web-design-title
{
    font-size: var(--fs-xl);
    color: rgb(var(--clr-accent));
    margin-bottom: 20px;
}

.web-design .loading-title
{
    color: rgb(var(--clr-accent));
    font-size: var(--fs-base);
    text-align: center;
}

.web-design .web-design-list
{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.web-design .web-design-list .web-design-item
{
    position: relative;
    overflow: hidden;
}

.web-design .web-design-list .web-design-img
{
    width: 100%;
    display: block;
}

.web-design .web-design-list .web-design-item .web-design-overlay
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

.web-design .web-design-list .web-design-item .web-design-overlay .web-design-link
{
    padding: 20px;
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.web-design .web-design-list .web-design-item .web-design-overlay .web-design-link .arrow-up-right-icon
{
    width: 15px;
    filter: invert(100%);
}

.web-design .web-design-list .web-design-item:hover .web-design-overlay
{
    transform: translateY(0%);
}

/* Laptop */
@media (max-width: 1024px) {
    .web-design .web-design-title
    {
        font-size: var(--fs-lg);
    }
}

/* Tablet */
@media (max-width: 834px) {
    .web-design .web-design-title
    {
        font-size: var(--fs-md);
    }

    .web-design .web-design-list
    {
        grid-template-columns: 1fr;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .web-design .web-design-title
    {
        font-size: var(--fs-sm);
    }
}
</style>