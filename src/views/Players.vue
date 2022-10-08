<template>
    <main class="main">
        <section class="players__section">
            <div class="container">
                <div class="row">

                    <p class="players-title">{{ playersData.length ? 'все игроки' : 'нету игроков' }}</p>

                    <div class="players__cards">
                        <div class="player__card" v-for="(player, idx) in playersData" :key="idx">
                            <p class="player__card-name">
                                имя: 
                                <span>{{ player.CommonName }}</span>
                            </p>
                            <p class="player__card-id">ид игрока: <span>{{ player.PlayerId }}</span></p>
                            <p class="player__card-gender">пол: <span>{{ player.Gender == 'Male' ? 'мужчина' : 'женщина' }}</span></p>
                            <p class="player__card-born-date">страна рождения: <span>{{ player.BirthCountry }}</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>

<script>
import base from '@/assets/js/base'

export default {
    name: 'Players',
    data() {
        return {
            base,
            playersData: []
        }
    },
    created() {
        const url = 'https://api.sportsdata.io/v3/csgo/scores/json/Players?key='

        fetch(`${url}${base.userKey}`)
        .then(res => res.json())
        .then(data => {
            this.playersData = JSON.parse(JSON.stringify(data))
        })
        .catch(error => {
            console.error(error)
        })
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    padding: 50px 0;

    .players__section {
        width: 100%;

        .row {
            flex-direction: column;
            align-items: flex-start;
            row-gap: 35px;
        }

        .players-title {
            color: var(--primary-color);
            text-transform: capitalize;
            font-size: 36px;
            font-weight: 800;
        }

        .players__cards {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .player__card {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;
            padding: 15px;
            border-radius: 15px;
            background: rgba($color: #60C585, $alpha: 0.3);
            border: solid 3px var(--green-color);
            color: var(--primary-color);
            text-transform: capitalize;
            text-shadow: var(--text-shadow);
        }
    }
}

</style>