<script setup>
  const sendMessage = () => { console.log("Aooba"); }

</script>

<template>
  <div class="typeMessage__container">
    <img class="typeMessage__img" src="./../static/images/avatars/image-juliusomo.png" alt="Avatar">
    <textarea
      placeholder="Add a comment..."
      class="typeMessage__textarea"
    ></textarea>
    <button @click="sendMessage" class="typeMessage__button">SEND</button>
  </div>
</template>

<style lang="scss" scoped>
  @use "sass:color";

  .typeMessage {
    &__container {
      align-items: flex-start;
      background-color: #fff;
      border-radius: 12px;
      display: flex;
      gap: 16px;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 24px 36px;
    }

    &__img {
      aspect-ratio: 1/1;
      width: 48px;
    }

    &__textarea {
      border-radius: 12px;
      flex-grow: 1;
      height: 120px;
      overflow: auto;
      padding: 10px 16px;
      resize: none;
    }

    &__button {
      background-color: #5358b6;
      border: none;
      border-radius: 12px;
      color: #fff;
      padding: 16px 32px;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: .1rem;
      transition: background-color ease-in-out .3s;

      &:hover {
        cursor: pointer;
        background-color: color.adjust(#5358b6, $lightness: 10%);
      }
    }
  }
</style>
