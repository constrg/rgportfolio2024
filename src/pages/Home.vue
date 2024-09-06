<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const AssetsData = '/data/assets_data.json';
const SkillsAndTools = ref([]);

onMounted(async () => {
  const res = await axios.get(AssetsData);
  const data = res.data;
  SkillsAndTools.value = data.SkillsAndTools;
});

</script>

<template>
    <div class="hero" data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
        <div class="container">

            <span class="dev">Hello! I'm Ricardo L. Garcia</span>
            <h1 class="hero-title" >
                I think. <br>
                I design. <br>
                I develop.
            </h1>

            <div class="scroll-down">
                <div class="scroll-down-container">
                    <img class="scroll-down-img" draggable="false" src="../assets/images/scroll-down-img.png" alt="scroll-down-img">
                    <a href="#intro-about-me">
                        <img class="arrow-down-icon" draggable="false" src="../assets/icons/arrow-down-icon.svg" alt="arrow-down-icon">
                    </a>
                </div>
            </div>
        
        </div>

        <div class="skills-and-tools">
            <div class="skills-and-tools-container">
                <img class="skills-and-tools-img" draggable="false" v-for="(skillAndTool, index) in SkillsAndTools" :key="index" :src="skillAndTool.image" :alt="skillAndTool.name" />
                <img class="skills-and-tools-img" draggable="false" v-for="(skillAndTool, index) in SkillsAndTools" :key="index" :src="skillAndTool.image" :alt="skillAndTool.name" />
            </div>
        </div>
    </div>

    <div class="intro-about-me" id="intro-about-me" data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
        <div class="container">
            <p class="intro-about-me-p">
                Hello! <span class="highlight">I'm Ricardo L. Garcia</span>, I have a strong focus on <span class="underline">Web and App Design</span>, <span class="underline">UI/UX Design</span>, <span class="underline">Graphic Design</span>, and <span class="underline">Front-End Development</span>.
                I have a passion for creativity and enjoy exploring new concepts and technologies in the world of design and development.
            </p>
            <button class="know-more-btn"><RouterLink :to="{name: 'about-me'}">Know more about me</RouterLink></button>
        </div>
    </div>


    <div class="works" id="works" data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
        <div class="container">
            <h1 class="works-title">Works</h1>
            <ul class="works-categories">
                <li class="work-category-item"><RouterLink class="work-category-link" :to="{name: 'web-designs'}">Web Designs <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></RouterLink></li>
                <li class="work-category-item"><RouterLink class="work-category-link" :to="{name: 'app-designs'}">App Designs <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></RouterLink></li>
                <li class="work-category-item"><RouterLink class="work-category-link" :to="{name: 'graphic-designs'}">Graphic Designs <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></RouterLink></li>
                <li class="work-category-item"><RouterLink class="work-category-link" :to="{name: 'front-ends'}">Front-Ends <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></RouterLink></li>
            </ul>
        </div>
    </div>



</template>

<style scoped>
/* Hero */
.hero 
{
    padding-block: 120px;
    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('../assets/images/rg-img.jpg');
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid rgb(var(--clr-light), 0.2);
    overflow: hidden;
}

.hero .dev 
{
    font-size: var(--fs-xsm);
    display: block;
    margin-bottom: 10px;
}

.hero .hero-title
{
    font-size: var(--fs-xl);
    margin-bottom: 20px;
    color: rgb(var(--clr-accent));
}

.hero .scroll-down
{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
}

.hero .scroll-down .scroll-down-container
{
    position: relative;
}

.hero .scroll-down .scroll-down-container .scroll-down-img
{
    width: 100%;
    max-width: 150px;
    animation: circular 5s infinite linear;
}

@keyframes circular {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.hero .scroll-down .scroll-down-container .arrow-down-icon
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
}

.hero .skills-and-tools {
    background-color: rgb(var(--clr-light), 0.2);
    padding-block: 20px;
    overflow: hidden;
    width: 100%;
    transform: rotate(-1deg);
}

.hero .skills-and-tools .skills-and-tools-container {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 10s linear infinite;
}

@keyframes marquee {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
}

.hero .skills-and-tools .skills-and-tools-container .skills-and-tools-img {
    display: inline-block;
    margin-inline: 20px;
    vertical-align: middle;
    height: 80px;
}

/* Intro */
.intro-about-me
{
    padding-block: 120px;
    border-bottom: 1px solid rgb(var(--clr-light), 0.2);
}

.intro-about-me .intro-about-me-p
{
    font-size: var(--fs-md);
    margin-bottom: 20px;
}

.intro-about-me .know-more-btn
{
    padding: 20px;
    font-size: var(--fs-sm);
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    transform: rotate(-1deg);
}

/* Works */
.works 
{
    padding-block: 120px;
}

.works .works-title 
{
    font-size: var(--fs-xl);
    margin-bottom: 20px;
    color: rgb(var(--clr-accent));
}

.works .works-categories
{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.works .works-categories .work-category-item
{
    font-size: var(--fs-md);
    border-bottom: 1px solid rgb(var(--clr-light), 0.2);
    padding-bottom: 20px;
}

.works .works-categories .work-category-item .work-category-link
{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.works .works-categories .work-category-item .work-category-link .arrow-up-right-icon
{
    opacity: 0.5;
}

/* Laptop */
@media (max-width: 1024px) {
    .hero .hero-title
    {
        font-size: var(--fs-lg);
    }

    .works .works-title 
    {
        font-size: var(--fs-lg);
    }
}

/* Tablet */
@media (max-width: 834px) {
    .hero .hero-title
    {
        font-size: var(--fs-md);
    }

    .intro-about-me .intro-about-me-p
    {
        font-size: var(--fs-sm);
    }

    .intro-about-me .know-more-btn 
    {
        font-size: var(--fs-base);
    }

    .works .works-title 
    {
        font-size: var(--fs-md);
    }

    .works .works-categories .work-category-item
    {
        font-size: var(--fs-sm);
    }
    
}

/* Mobile */
@media (max-width: 480px) {
    .hero .hero-title
    {
        font-size: var(--fs-sm);
    }

    .hero .skills-and-tools .skills-and-tools-container .skills-and-tools-img {
        height: 60px;
    }
    
    .works .works-title 
    {
        font-size: var(--fs-sm);
    }

    .intro-about-me .intro-about-me-p
    {
        font-size: var(--fs-base);
    }

    .works .works-categories .work-category-item
    {
        font-size: var(--fs-base);
    }
}
</style>