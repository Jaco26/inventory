<template>
  <JRow>
    <JCol>
      <JSection outlined title="Maintainers"></JSection>
    </JCol>
    <JCol>
      <JSection outlined title="Orgs">
        What's up
      </JSection>
    </JCol>
    <JCol>
      <JSection outlined title="Stocks"></JSection>
    </JCol>
  </JRow>
  <JRow>
    <JCol>
      <button @click="whatup">What's up server??</button>
      {{res}}
    </JCol>
  </JRow>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      orgs: [],
      maintainers: [],
      res: ''
    }
  },
  methods: {
    async whatup() {
      const res = await fetch('/api/ping')
      this.res = await res.text()
    }
  }
})
</script>

