<template>
    <div class="not-found">
        <div class="container">
            <h1 class="not-found-title">404 Not Found!</h1>
        </div>
    </div>
</template>

<style scoped>
.not-found
{
    padding-block: 120px;
}

.not-found-title
{

    font-size: var(--fs-xl);
    color: rgb(var(--clr-accent));
    text-align: center;
}

/* Laptop */
@media (max-width: 1024px)
{
    .not-found-title
    {
        font-size: var(--fs-lg);
    }
}

/* Tablet */
@media (max-width: 834px)
{
    .not-found-title
    {
        font-size: var(--fs-md);
    }
}

/* Mobile */
@media (max-width: 480px)
{
    .not-found-title
    {
        font-size: var(--fs-sm);
    }
}
</style>