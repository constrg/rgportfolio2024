<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="copy">
                <p class="dev">Ricardo L. Garcia</p>
                <p class="all-rights">&copy; All rights reserved 2024.</p>
                <ul class="sm-links">
                    <a class="sm-link" href="mailto:ricardolacadgarcia@gmail.com" target="_blank"><img class="sm-img" src="../assets/icons/email-icon.svg" alt="email-icon"></a>
                    <a class="sm-link" href="https://github.com/constrg" target="_blank"><img class="sm-img" src="../assets/icons/github-icon.svg" alt="email-icon"></a>
                    <a class="sm-link" href="https://www.linkedin.com/in/ricardolacadgarcia" target="_blank"><img class="sm-img" src="../assets/icons/linkedin-icon.svg" alt="email-icon"></a>
                    <a class="sm-link" href="https://www.behance.net/ricardolacadgarcia" target="_blank"><img class="sm-img" src="../assets/icons/behance-icon.svg" alt="email-icon"></a>
                    <a class="sm-link" href="https://ph.pinterest.com/ricardolacadgarcia" target="_blank"><img class="sm-img" src="../assets/icons/pinterest-icon.svg" alt="email-icon"></a>
                </ul>
            </div>
            <ul class="quick-links">
                <h1>QUICK LINKS</h1>
                <li class="quick-item"><RouterLink class="quick-link" :to="{name: 'home'}">Home</RouterLink></li>
                <li class="quick-item"><RouterLink class="quick-link" :to="{name: 'about-me'}">Know more about me</RouterLink></li>
                <li class="quick-item"><a class="quick-link" href="./#works">Works</a></li>
            </ul>
            <div class="footer-action-links">
                <a class="footer-action-link" href="mailto:ricardolacadgarcia@gmail.com">Email me <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></a>
                <a class="footer-action-link" href="./rgresume2024.pdf" download="rgresume2024">DL Resume <img class="arrow-up-right-icon" src="../assets/icons/arrow-up-right-icon.svg" alt="arrow-up-right-icon"></a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer
{
    padding-block: 100px;
    background-color: rgb(var(--clr-accent));
    color: rgb(var(--clr-dark));
}

.footer .footer-container 
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.footer .copy .all-rights
{
    font-size: var(--fs-xsm);
    margin-bottom: 20px;
}

.footer .copy .sm-links 
{
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.footer .copy .sm-links .sm-img
{
    width: 30px;
}

.footer .quick-links
{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.footer .footer-action-links
{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.footer .footer-action-links .footer-action-link
{
    background-color: rgb(var(--clr-dark));
    padding: 20px;
    width: 100%;
    color: rgb(var(--clr-accent));
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.footer .footer-action-links .footer-action-link .arrow-up-right-icon
{
    opacity: 0.5;
}

@media (max-width: 834px) 
{
    .footer .footer-container 
    {
        grid-template-columns: 1fr;
    }
}
</style>