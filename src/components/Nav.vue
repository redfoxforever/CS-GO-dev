<template>
    <nav class="nav">
        <div class="container">
            <div class="row">
                
                <div class="nav__collapse">
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in base.navLinks" :key="idx">
                            <router-link :to="`/${link.url}`" class="nav__list-link" :class="{'active': link.active }" @click="addActive(idx)"> 
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>

                    <AppLink/>
                </div>

                <div class="user-profile">
                    <img :src="user.avatar" alt="" class="user-avatar">

                    <div class="user-info">
                        <p class="user-name">{{ user.fullName }}</p>

                        <div class="user-balance">
                            <span class="balance-num">{{ user.balance }}</span>
                            <span class="balance-currency">{{ user.currency }}</span>
                        </div>
                    </div>
                </div>
                
                <button class="notification-btn nav-btn" @click="showModal">
                    <i class="far fa-bell"></i>
                </button>

                <button class="sign-out-btn nav-btn">
                    <i class="far fa-sign-out"></i>
                </button>

                <Transition name="fade">
                    <div class="nav__modal" v-show="modalActive"  @click="showModal">
                        
                    <Transition name="translate">
                        <div class="nav__modal-dialog" v-show="modalActive" @click.stop>
                            <p class="dialog-text">нет сообщений</p>

                            <button class="hide-modal" @click="showModal">закрыть</button>
                        </div>
                    </Transition>
                    

                    </div>
                </Transition>
                
            </div>
        </div>
    </nav>
</template>

<script>
import base from '@/assets/js/base.js';
import AppLink from './App-Link.vue';

export default {
    name: "Nav",
    data() {
        return {
            base,
            user: {
                avatar: require('@/assets/img/user-avatar.jpg'),
                fName: 'redfox',
                lName: 'forever',
                fullName: 'redfox forever',
                currency: 'rub',
                balance: Math.floor(Math.random() * 1500 + 1) + 1000
            },
            modalActive: false
        }
    },
    components: {
        AppLink
    },
    methods: {
        addActive(id) {
            this.base.navLinks.map(link => {
                link.active = false
            })

            this.base.navLinks[id].active = true
        },
        showModal() {
            this.modalActive = !this.modalActive
        }
    }
}

</script>

<style lang="scss" scoped>

@keyframes rotateNotify {
    0% {
       rotate: 0deg; 
    }
    35% {
        rotate: 35deg;
    }
    70% {
        rotate: -30deg;
    }
    100% {
        rotate: 0deg;
    }
}

.nav {
    width: 100%;
    background: #171717;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px 0;
    position: sticky;
    top: 0;
    z-index: 2022;
    
    .row {
        column-gap: 25px;
        row-gap: 15px;
        justify-content: space-between;
        flex-wrap: unset;
    }

    .nav-btn {
        min-width: 30px;
        max-width: 30px;
        width: 100%;
        min-height: 30px;
        max-height: 30px;
        height: 100%;
        border-radius: 8px;
        font-size: 18px;
        border: 0;
        background: transparent;
        color: var(--primary-color);
        cursor: pointer;
    }

    .nav__collapse {
        max-width: 830px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        .nav__list {
            max-width: 650px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;

            &-link {
                color: var(--gray-color);
                font-weight: 800;
                text-transform: capitalize;
                text-shadow: var(--text-shadow);
                transition: .4s;
                
                &.active {
                    color: var(--green-color);
                }

                &:hover {
                    color: var(--green-color);
                }
            }
        }
    }

    .user-profile {
        display: flex;
        column-gap: 10px;
        user-select: none;
        align-items: center;

        .user-avatar {
            max-width: 35px;
            min-width: 35px;
            width: 100%;
            max-height: 35px;
            min-height: 35px;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;    
        }

        .user-info {
            max-width: max-content;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 5px;

            .user-name {
                color: var(--primary-color);
                font-size: 12px;
                text-transform: capitalize;
                font-weight: 700;
            }

            .user-balance {
                font-size: 12px;
                font-weight: 700;
                display: flex;
                column-gap: 3px;

                .balance-num {
                    color: var(--green-color);
                }

                .balance-currency {
                    color: var(--green-color);
                    text-transform: uppercase;
                    opacity: 0.5;
                }
            }
        }
    }

    .notification-btn {
        background: #715C2D;
        color: var(--yellow-color);

        i {
            transition: .4s;
            animation: rotateNotify 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
        }
    }

    .sign-out-btn {
        background: #401E1B;
        color: var(--red-color);
    }

    .nav__modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        transition: .5s;
        background: rgba(0, 0, 0, 0.6);
        padding-top: 45px;

        &-dialog {
            max-width: 300px;
            width: 100%;
            height: max-content;
            padding: 10px;
            border-radius: 15px;
            background: rgba($color: #60C585, $alpha: 0.5);
            border: solid 2px var(--green-color);
            transition: .4s;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 20px;

            .dialog-text {
                font-size: 17px;
                color: var(--primary-color);
                text-transform: capitalize;
                font-weight: 800;
                text-shadow: var(--text-shadow);
            }

            button {
                border: solid 2px var(--green-color);
                border-radius: 8px;
                width: 100%;
                background: rgba($color: #60C585, $alpha: 0.8);
                padding: 5px 0;
                cursor: pointer;
                font-size: 15px;
                color: var(--primary-color);
                text-transform: capitalize;
                font-weight: 800;
                text-shadow: var(--text-shadow);
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.translate-enter-active,
.translate-leave-active {
  transition: transform 0.5s;
}

.translate-enter-from,
.translate-leave-to {
  transform: translateY(-150%);
}

.translate-leave-from,
.translate-enter-to {
  transform: translateY(35%);
}

</style>