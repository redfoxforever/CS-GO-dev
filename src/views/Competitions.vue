<template>
    
</template>

<script>
import base from '@/assets/js/base'

export default {
    name: 'Competitions',
    data() {
        return {
            base,
            competitionsData: []
        }
    },
    created() {
        const url = 'https://api.sportsdata.io/v3/csgo/scores/json/Competitions?key='

        fetch(`${url}${base.userKey}`)
        .then(res => res.json())
        .then(data => {
            this.competitionsData = JSON.parse(JSON.stringify(data))
            console.log(data);
        })
    },
    mounted() {
        base.navLinks.map(link => {
            link.active = false

            if (link.url == this.$route.name) {
                link.active = true
            }
        })
    }
}
</script>

<style lang="scss" scoped>
</style>