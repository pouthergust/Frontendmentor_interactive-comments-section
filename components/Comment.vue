<template>
  <div class="comment__list">
    <div class="comment__wrapper">
      <div class="comment__vote">
        <button>+</button><input type="number"/><button>-</button>
      </div>
      <div class="comment__main">
        <div class="comment__header">
          <img src="./../public/images/avatars/image-amyrobson.png" alt="Avatar">
          <p class="comment__name">John Doe</p>
          <p class="comment__date">2022-01-01</p>
          <button class="comment__replyButton">
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
    }
  }
</style> 