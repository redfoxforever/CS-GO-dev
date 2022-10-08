<template>
    <header class="header">
        <div class="container">
            <div class="row">

                <div class="header__desc">
                    <h1 class="header__desc-title">
                        <span class="yellow-text">{{ header.desc.title[0].text }}</span> -
                        {{ header.desc.title[1].text }}
                    </h1>

                    <p class="header__desc-text">{{ header.desc.text }}</p>

                    <div class="header__links">
                        <router-link :to="link.url" class="header__link" v-for="(link, idx) in header.desc.links" :key="idx" :class="{'yellow-link': idx == 0}"> {{ link.name }} </router-link>
                    </div>
                </div>
                
                <img :src="require(`@/assets/${image}`)" alt="" class="header__img">

            </div>
        </div>
    </header>
</template>

<script>
import base from '@/assets/js/base'

export default {
    name: 'Header',
    data() {
        return {
            header: base.home.header,
            image: base.home.header.img
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    padding: 50px 0;

    .row {
        justify-content: space-between;
    }

    &__desc {
        max-width: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;

        &-title {
            font-size: 42px;
            color: var(--primary-color);
            font-weight: 800;
            text-transform: capitalize;

            .yellow-text {
                color: var(--yellow-color);
                text-transform: uppercase;
            }
        }

        &-text {
            font-size: 15px;
            color: var(--gray-color);
            font-weight: 800;
        }

        .header__links {
            display: flex;
            align-items: center;
            gap: 15px;

            .header__link {
                padding: 10px 15px;
                display: block;
                border-radius: 10px;
                border: solid 2px var(--gray-color);
                color: var(--gray-color);
                text-transform: capitalize;
                font-weight: 800;
                font-size: 14px;
                transition: .5s;
                text-shadow: var(--text-shadow);

                &:hover {
                    color: var(--primary-color);
                    background: var(--gray-color);
                }

                &.yellow-link {
                    background: var(--yellow-color);
                    color: var(--black-color);
                    border: 0;
                }
            }
        }
    }

    &__img {
        max-width: 450px;
        width: 100%;
        object-fit: cover;
        border-radius: 160px;
    }
}
</style>