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

           <div class="hero-img">
                <img class="rg-id" src="../assets/images/rg-id.png" alt="rg-id" draggable="false">
           </div>

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
                Hello! <span class="highlight">I'm Ricardo L. Garcia</span>, I have a strong focus on <span class="underline">web and app Design</span>, <span class="underline">UI/UX</span>, <span class="underline">graphic design</span>, and <span class="underline">front-end development</span>.
                I have a passion for creativity and enjoy exploring new concepts and technologies in the world of design and development.
            </p>
            <button class="about-me-btn"><RouterLink class="about-me-link" :to="{name: 'about-me'}">About me <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></RouterLink></button>
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
    padding-block: 60px;
    overflow: hidden;
}

.hero-img
{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.hero-img .rg-id
{
    width: 100%;
    max-width: 600px;
    transform:
    perspective(1000px)
    rotateX(10deg)
    rotateY(10deg)
    rotateZ(-5deg);
    box-shadow: -20px 20px 30px 0 rgb(var(--clr-dark), 0.3);
    transition-duration: 0.3s;
}

.hero-img .rg-id:hover 
{
    transform: unset;
    box-shadow: 0 0 30px 0 rgb(var(--clr-dark), 0.3);
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
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
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
}

.intro-about-me .intro-about-me-p
{
    font-size: var(--fs-md);
    margin-bottom: 20px;
}

.intro-about-me .about-me-btn
{
    padding: 20px;
    font-size: var(--fs-sm);
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    border-radius: 5px;
    transform: rotate(-1deg);
}

.intro-about-me .about-me-btn .about-me-link 
{
    display: flex;
    align-items: flex-end;
    column-gap: 20px;
}

.intro-about-me .about-me-btn .arrow-up-right-icon
{
    filter: invert(100%);
    opacity: 0.5;
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

    .intro-about-me .about-me-btn 
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