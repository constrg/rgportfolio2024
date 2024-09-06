<script setup></script>
<template>
    <div class="about-me" data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
        <div class="container">
            <h1 class="about-me-title">About Me</h1>
            <p class="about-me-p">
                Hello! <span class="highlight">I'm Ricardo L. Garcia</span>, a 23-year-old computer science professional from Quezon City, Philippines. I hold a Bachelor of Science in Computer Science from the Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST).
                With a strong passion for innovation and problem-solving, I specialize in <span class="underline">Web and App Design</span>, <span class="underline">UI/UX</span>, <span class="underline">Graphic Design</span>, and <span class="underline">Front-End Development</span>. I am committed to leveraging my skills to create engaging and effective digital experiences. I am willing to be train and enhance my tech skills. Welcome to my portfolio!
            </p>
            <div class="about-me-action-links">
                <a class="about-me-action-link" href="mailto:ricardolacadgarcia@gmail.com">Email Me <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></a>
                <a class="about-me-action-link" href="./rgresume2024.pdf" download="rgresume2024">DL Resume <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-me
{
    padding-block: 120px;
}

.about-me .about-me-title
{
    font-size: var(--fs-xl);
    color: rgb(var(--clr-accent));
    margin-bottom: 20px;
}

.about-me .about-me-p
{
    font-size: var(--fs-sm);
    margin-bottom: 40px;
}

.about-me .about-me-action-links
{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
}

.about-me .about-me-action-links .about-me-action-link
{
    padding: 20px;
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
    transform: rotate(-1deg);
    display: flex;
    align-items: flex-end;
    column-gap: 20px;
}

.about-me .about-me-action-links .about-me-action-link .arrow-up-right-icon
{
    filter: invert(100%);
    opacity: 0.5;
}

/* Laptop */
@media (max-width: 1024px)
{
    .about-me .about-me-title
    {
        font-size: var(--fs-lg);
    }
}

/* Tablet */
@media (max-width: 834px)
{
    .about-me .about-me-title
    {
        font-size: var(--fs-md);
    }
}

/* Mobile */
@media (max-width: 480px)
{
    .about-me .about-me-title
    {
        font-size: var(--fs-sm);
    }

    .about-me .about-me-p
    {
        font-size: var(--fs-base);
    }
}
</style>