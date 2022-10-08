<template>
    <div class="maps__cards">
        <div class="map__card" v-for="(card, idx) in cardsList" :key="idx" 
        :class="{'unavailable': card.unavailable}">
            <img :src="require(`@/assets/${card.img}`)" alt="" class="map__card-img">

            <div class="map__card-desc">
                <h4 class="map__card-name">{{ card.unavailable ? 'Игровой режим' : card.name }}</h4>
                <p class="online-players-count">
                    <span class="online-round" v-if="!card.unavailable"></span>
                    {{ card.unavailable ? 'Недоступен' : card.onlineCount() }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Maps',
    props: {
        cardsList: {
            type: Array,
            default: [],
            required: true
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
.maps__cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    justify-items: baseline;

    .map__card {
        max-width: 215px;
        width: 100%;
        position: relative;
        border-radius: 18px;
        overflow: hidden;
        min-height: 250px;
        max-height: 250px;
        height: 100%;

        &-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &-desc {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-left: 15px;
            padding-bottom: 20px;
            background: rgba($color: #000000, $alpha: 0.7);
            row-gap: 8px;

            .online-players-count {
                font-size: 12px;
                color: #928e8e;
                font-weight: 800;
                display: flex;
                column-gap: 2px;
                align-items: center;
                text-transform: capitalize;
                text-shadow: var(--text-shadow);

                & > .online-round {
                    min-width: 7px;
                    max-width: 7px;
                    width: 100%;
                    min-height: 7px;
                    max-height: 7px;
                    height: 100%;
                    background: var(--green-color);
                    display: block;
                    border-radius: 50%;
                }
            }
        }

        &-name {
            font-size: 15px;
            font-weight: 800;
            text-transform: capitalize;
            color: var(--primary-color);
            text-shadow: var(--text-shadow);
        }

        &.unavailable .map__card-desc {
            backdrop-filter: blur(7px);
            align-items: center;
            text-align: center;
            padding-left: 0;
            justify-content: center;
            row-gap: 4px;
            
            .map__card-name {
                font-size: 12px;
                color: #838383;
            }

            .online-players-count {
                font-size: 20px;
                color: var(--red-color);
            }
        }
    }
}
</style>