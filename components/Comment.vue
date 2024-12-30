<template>
  <div class="comment__list">
    <div class="comment__wrapper">
      <div class="comment__vote">
        <RatingButton />
      </div>
      <div class="comment__main">
        <div class="comment__header">
          <NuxtImg src="./../public/images/avatars/image-amyrobson.png" alt="Avatar" />
          <p class="comment__name">amyrobson</p>
          <p class="comment__date">1 month ago</p>
          <button class="comment__replyButton">
            <NuxtImg src="./../public/images/icon-reply.svg" alt="Reply" />
            Reply
          </button>
        </div>
        <div class="comment__content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum nam numquam officia minima quae dolores dolorum dignissimos. Numquam sed ipsum facilis odit et obcaecati ipsam reiciendis molestiae illum, provident explicabo!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  %flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .comment {

    &__list {
      padding: 24px 0;
    }

    &__wrapper {
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 12px;
      @extend %flex;
    }

    &__header {
      @extend %flex;
      gap: 16px;
    }

    &__replyButton {
      margin-left: auto;
      background-color: transparent;
      border: none;
    }
  }
</style> 