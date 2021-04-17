<template>
  <section :class="sectionClass">
    <div class="section__title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="section__body">
      <slot></slot>
    </div>
    <div class="section__footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    outlined: Boolean,
  },
  computed: {
    sectionClass(): string {
      return [
        'section',
        this.outlined && 'section--outlined'
      ]
        .filter(x => x)
        .join(' ')
    }
  }
})
</script>


<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  &--outlined {
    border-color: #aaa;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
  }
  &__body {
    padding: 12px 0;
  }
  &__footer {

  }
}
</style>