<template>
    <a :href="appLink.url" class="mobile-app-link" target="_blank">{{ appLink.name }}</a>
</template>

<script>
export default {
    name: "App Link",
    data() {
        return {
            appLink: {
                name: 'приложение',
                url: 'https://play.google.com/store/apps/details?id=com.csmoneymobile&hl=ru&gl=US'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.mobile-app-link {
    display: block;
    padding: 10px 14px;
    border-radius: 8px;
    border: solid 2px var(--green-color);
    color: var(--green-color);
    text-transform: capitalize;
    font-size: 13px;
    font-weight: 800;
    background: rgba($color: #60C585, $alpha: 0.35);
    text-shadow: var(--text-shadow);
    max-width: max-content;
    width: 100%;
    height: max-content;
}

</style>