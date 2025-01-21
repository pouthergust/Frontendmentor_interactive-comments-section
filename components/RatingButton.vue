<script setup lang="ts">
  import { ref } from '@nuxtjs/composition-api'

  const props = defineProps({
    score: {
      type: Number,
      default: 0
    }
  })

  const votes = ref(props.score)
</script>

<template>
  <div class="ratingButton__container">
    <div class="ratingButton__wrapper">
      <button
        class="ratingButton__button --plus"
        @click="votes++"
      >+</button>
      <span class="ratingButton__value ">
        {{ votes }}
      </span>
      <button
        class="ratingButton__button --minus"
        @click="votes > 0 ? votes-- : votes"
      >-</button>
    </div>
  </div>
</template>

<style lang="scss">
$button-radio: 8px;

.ratingButton {
  &__container {
    display: grid;
    place-content: center;
    padding: 0 24px 0 12px;
  }

  &__wrapper {
    align-items: center;
    background-color: #f4f6f9;
    border-radius: $button-radio;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: auto;
    width: fit-content;
  }

  &__value {
    border: none;
    color: #5f5f9e;
    background: none;
    display: block;
    margin: auto;
    pointer-events: none;
    padding: 0 8px;
    text-align: center;
    font-weight: 700;
  }

  &__button {
    background-color: transparent;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 22px;
    padding: 4px 12px;
    transition: background-color 0.3s ease;
    width: 34px;

    &.--plus { border-radius: $button-radio $button-radio 0 0; }
    &.--minus { border-radius: 0 0 $button-radio $button-radio; }

    &:hover {
      background-color: #eaeaeb;
    }
  }
}
</style>
