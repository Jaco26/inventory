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
    }
  },
  methods: {
    whatup() {
      return ''
    }
  }
})
</script>

