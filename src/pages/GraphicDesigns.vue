<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const AssetsData = '/data/assets_data.json';
const GraphicDesigns = ref([]);

const isLoading = ref(true);

onMounted(async () => {
    try {
        const res = await axios.get(AssetsData);
        GraphicDesigns.value = res.data.GraphicDesigns;
    } catch (error) {
        console.log('Error Fetching Data', error);
    } finally {
        isLoading.value = false;
    }
});
</script>
<template>
    <div class="graphic-design" data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
        <div class="container">
            <h1 class="graphic-design-title">Graphic Designs</h1>

            <template v-if="isLoading">
                <h1 class="loading-title">Loading...</h1>
            </template>

            <template v-else>
                <div class="graphic-design-list">
                    <div class="graphic-design-item" v-for="(graphicDesign, index) in GraphicDesigns" :key="index">
                        <img class="graphic-design-img" draggable="false" :src="graphicDesign.image" :alt="graphicDesign.name">
                    </div>
                </div>
                <a class="see-more-link" href="https://drive.google.com/drive/folders/1zHE5o7xD6i4CKfvnWLoGiag9pkMxNyMs" target="_blank">See more</a>
            </template>

        </div>
    </div>
</template>

<style scoped>
.graphic-design
{
    padding-block: 60px;
}

.graphic-design .graphic-design-title
{
    font-size: var(--fs-xl);
    color: rgb(var(--clr-accent));
    margin-bottom: 20px;
}

.graphic-design .loading-title
{
    color: rgb(var(--clr-accent));
    font-size: var(--fs-base);
    text-align: center;
}

.graphic-design .graphic-design-list
{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 40px;
}

.graphic-design .graphic-design-list .graphic-design-item
{
    position: relative;
    overflow: hidden;
}

.graphic-design .graphic-design-list .graphic-design-img
{
    width: 100%;
    display: block;
}

.graphic-design .see-more-link 
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
    .graphic-design .graphic-design-title
    {
        font-size: var(--fs-lg);
    }
}

/* Tablet */
@media (max-width: 834px) {
    .graphic-design .graphic-design-title
    {
        font-size: var(--fs-md);
    }
    .graphic-design .graphic-design-list
    {
        grid-template-columns: 1fr;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .graphic-design .graphic-design-title
    {
        font-size: var(--fs-sm);
    }
}
</style>