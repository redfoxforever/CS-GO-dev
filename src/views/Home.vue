<template>
  <Header/>

  <main class="main">
    <section class="maps__section">
      <div class="container">
        <div class="row">

          <Tags :tagsList="tagsList" @filterMaps="filterMaps"/>

          <Maps :cardsList="filteredMaps"/>
        </div>
      </div>
    </section>
  </main>

</template>

<script>
import Header from '@/components/Header.vue'
import Tags from '@/components/Tags.vue'
import base from '@/assets/js/base'
import Maps from '@/components/Maps.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Tags,
    Maps
  },
  data() {
    return {
      base,
      tagsList: base.mapsTags(),
      filteredItems: [],
      allMaps() {
        let allmaps = JSON.parse(JSON.stringify(this.base.allMaps))

        allmaps.forEach(function (map) {
          map.onlineCount = function() {
            return this.unavailable ? 0 : Math.floor(Math.random() * 1500 + 1) + 1000
          }
        })

        return allmaps
      }
    }
  },
  computed: {
    filteredMaps() {
      return this.filteredItems.length ? this.filteredItems : this.allMaps()
    },
  },
  methods: {
    filterMaps(e) {
      this.filteredItems = []
      const wordForFilter = e.target.innerText.toLowerCase()
      const allMaps = this.allMaps()

      allMaps.map(map => {
        if (map.category == wordForFilter) {
          this.filteredItems.push(map)
        }        
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding: 50px 0;
  
  .row {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }
}
</style>
