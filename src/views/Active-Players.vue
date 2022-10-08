<template>
    
</template>

<script>
import base from '@/assets/js/base'

export default {
    name: 'Active Players',
    data() {
        return {
            base
        }
    },
    created() {
        const url = 'https://api.sportsdata.io/v3/csgo/scores/json/ActiveMemberships?key='

        fetch(`${url}${base.userKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
}
</script>

<style lang="scss" scoped>

</style>