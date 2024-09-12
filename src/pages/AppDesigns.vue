<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const AssetsData = '/data/assets_data.json';
const AppDesigns = ref([]);

const isLoading = ref(true);

onMounted(async () => {
    try {
        const res = await axios.get(AssetsData);
        AppDesigns.value = res.data.AppDesigns;
    } catch (error) {
        console.log('Error Fetching Data', error);
    } finally {
        isLoading.value = false;
    }
});

</script>
<template>
    <div class="app-design" data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
        <div class="container">
            <h1 class="app-design-title">App Designs</h1>

            <template v-if="isLoading">
                <h1 class="loading-title">Loading...</h1>
            </template>

            <template v-else>
                <div class="app-design-list">
                    <div class="app-design-item" v-for="(appDesign, index) in AppDesigns" :key="index">
                        <img class="app-design-img" draggable="false" :src="appDesign.image" :alt="appDesign.name">
                        <div class="app-design-overlay">
                            <a class="app-design-link" :href="appDesign.link" target="_blank">Visit <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></a>
                        </div>
                    </div>
                </div>
            </template>

        </div>
    </div>
</template>

<style scoped>
.app-design
{
    padding-block: 60px;
}

.app-design .app-design-title
{
    font-size: var(--fs-xl);
    color: rgb(var(--clr-accent));
    margin-bottom: 20px;
}

.app-design .loading-title
{
    color: rgb(var(--clr-accent));
    font-size: var(--fs-base);
    text-align: center;
}

.app-design .app-design-list
{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.app-design .app-design-list .app-design-item
{
    position: relative;
    overflow: hidden;
    border-radius: 5px;
}

.app-design .app-design-list .app-design-img
{
    width: 100%;
    display: block;
}

.app-design .app-design-list .app-design-item .app-design-overlay
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

.app-design .app-design-list .app-design-item .app-design-overlay .app-design-link
{
    padding: 20px;
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    border-radius: 5px;
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.app-design .app-design-list .app-design-item .app-design-overlay .app-design-link .arrow-up-right-icon
{
    width: 15px;
    filter: invert(100%);
}

.app-design .app-design-list .app-design-item:hover .app-design-overlay
{
    transform: translateY(0%);
}

/* Laptop */
@media (max-width: 1024px) {
    .app-design .app-design-title
    {
        font-size: var(--fs-lg);
    }
}

/* Tablet */
@media (max-width: 834px) {
    .app-design .app-design-title
    {
        font-size: var(--fs-md);
    }
    .app-design .app-design-list
    {
        grid-template-columns: 1fr;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .app-design .app-design-title
    {
        font-size: var(--fs-sm);
    }
}
</style>