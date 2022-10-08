<template>
    <div class="tags__box">
        <button class="tag-btn" v-for="(btn, idx) in tagsList" :key="idx" :class="[{'active': btn.active}, {'locked': btn.locked}]" @click="addActive(idx, $event)">
            {{ btn.name }}
            <span class="locked-filter" v-if="btn.locked">
                <i class="fas fa-lock"></i>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Tags',
    props: {
        tagsList: {
            type: Array,
            default: [ 
                { 
                    name: 'tag1',
                    locked: false,
                    active: true
                }, 
                { 
                    name: 'tag2',
                    locked: false,
                    active: false
                }, 
                { 
                    name: 'tag3',
                    locked: false,
                    active: false
                }, 
                { 
                    name: 'tag4',
                    locked: false,
                    active: false
                }, 
                { 
                    name: 'tag5',
                    locked: false,
                    active: false
                },
                { 
                    name: 'tag5',
                    locked: true,
                    active: false
                },
                { 
                    name: 'tag5',
                    locked: true,
                    active: false
                },
            ],
            required: true
        }
    },
    methods: {
        addActive(id, event) {
            this.tagsList.map(tag => {
                tag.active = false
            })

            this.tagsList[id].active = true

            this.$emit('filterMaps', event)
        }
    }
}
</script>

<style lang="scss" scoped>
.tags__box {
    width: 100%;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    align-items: center;

    .tag-btn {
        padding: 10px;
        font-size: 15px;
        border-radius: 7px;
        color: var(--gray-color);
        text-transform: capitalize;
        cursor: pointer;
        border: solid 2px var(--gray-color);
        font-weight: 800;
        background: transparent;
        transition: .5s;
        text-shadow: var(--text-shadow);
        position: relative;

        &.active {
            color: var(--primary-color);
            border: solid 2px var(--green-color);
            background: rgba($color: #60C585, $alpha: 0.3);
            transition: .5s;

            &:hover {
                color: var(--primary-color);
                background: var(--green-color);    
            }
        }

        &:hover {
            color: var(--primary-color);
            background: var(--gray-color);
        }

        &.locked {
            pointer-events: none;
            user-select: none;

            & > .locked-filter {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                display: grid;
                place-items: center;
                color: var(--red-color);
                backdrop-filter: blur(2px);
            }
        }
    }
}
</style>