<template>
    <main class="main">
        <section class="teams__section">
            <div class="container">
                <div class="row">

                    <p class="teams-title">
                        {{ teamsData.length ? 'все команды' : 'нету командов' }}
                    </p>

                    <div class="teams__cards">
                        <div class="team__card" v-for="(team, idx) in teamsData" :key="idx">
                            <p class="team__card-name">имя команды: <span>{{ team.Name }}</span></p>
                            <p class="team__card-areaname">название области: 
                                <span>{{ team.AreaName }}</span>
                            </p>

                            <hr>

                            <a :href="team.Website" class="team__card-website" target="_blank">
                                вебсайт: <span>{{ team.Website ? team.Website : 'нету сайта' }}</span> 
                            </a>
                            <p class="team__card-founded">
                                дата: <span>{{ team.Founded ? team.Founded : 'нету даты' }}</span>
                            </p>
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
    name: 'Teams',
    data() {
        return {
            base,
            teamsData: []
        }
    },
    created() {
        const url = 'https://api.sportsdata.io/v3/csgo/scores/json/Teams?key='

        fetch(`${url}${base.userKey}`)
        .then(res => res.json())
        .then(data => {
            this.teamsData = JSON.parse(JSON.stringify(data))
        })
        .catch(error => {
            console.error(error)
        })
    }
}
</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    padding: 50px 0;

    .teams__section {
        width: 100%;

        .row {
            flex-direction: column;
            align-items: flex-start;
            row-gap: 35px;
        }

        .teams-title {
            color: var(--primary-color);
            text-transform: capitalize;
            font-size: 36px;
            font-weight: 800;
        }

        .teams__cards {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .team__card {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;
            padding: 15px;
            border-radius: 15px;
            background: rgba($color: #60C585, $alpha: 0.3);
            border: solid 3px var(--green-color);
            text-transform: capitalize;
            text-shadow: var(--text-shadow);
            font-weight: 800;

            & > p, a  {
                color: var(--green-color);
                & > span {
                    color: var(--primary-color);
                }
            }

            & > a > span {
                text-transform: lowercase;
            }

            hr {
                width: 100%;
                height: 2px;
                background: var(--green-color);
                border: none;
            }
        }
    }
}

</style>