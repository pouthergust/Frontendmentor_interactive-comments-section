<script setup lang="ts">

  interface CommentProps {
    id: number
    content: string
    createdAt: string
    score: number
    user: {
      image: {
        png?: string
        webp?: string
      }
      username: string
    }
  }

  defineProps<{
    id: number
    content: string
    createdAt: string
    score: number
    user: {
      image: {
        png?: string
        webp?: string
      }
      username: string
    }
    replies: Array<CommentProps>
  }>()

</script>

<template>
  <div class="comment__list">
    <div class="comment__wrapper">
      <div class="comment__vote">
        <RatingButton :score="score"/>
      </div>
      <div class="comment__main">
        <div class="comment__header">
          <NuxtImg
            :src="user?.image.png ?? user?.image.webp"
            alt="Avatar"
          />
          <p class="comment__name">{{ user?.username }}</p>
          <p class="comment__date">{{ createdAt }}</p>
          <button class="comment__replyButton">
            <NuxtImg
              src="./../static/images/icon-reply.svg"
              alt="Reply"
              width="12"
            />
            Reply
          </button>
        </div>
        <div class="comment__contentWrapper">
          <p class="comment__content">
            {{ content }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="replies" v-for="(replie, i) in replies">
      <div class="comment__replyContainer">
        <div class="comment__replyIndicator"></div>
        <div class="comment__wrapper">
          <div class="comment__vote">
            <RatingButton :score="replie.score" />
          </div>
          <div class="comment__main">
            <div class="comment__header">
              <NuxtImg
                :src="replie.user?.image.png ?? replie.user?.image.webp"
                alt="Avatar"
              />
              <p class="comment__name">{{ replie.user?.username }}</p>
              <p class="comment__date">{{ replie.createdAt }}</p>
              <button class="comment__replyButton">
                <NuxtImg
                  src="./../static/images/icon-reply.svg"
                  alt="Reply"
                  width="12"
                />
                Reply
              </button>
            </div>
            <div class="comment__contentWrapper">
              <p class="comment__content">
                <span v-if="i == 0" class="comment__mention">@{{ user?.username }}</span>
                <span v-if="i !== 0" class="comment__mention">@{{ replies[i - 1].user.username }}</span>
                {{ replie.content }}
              </p>
            </div>
          </div>
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

      &:first-child { margin-top: 1rem; }
      &:last-child { margin-bottom: 1rem; }
    }

    &__wrapper {
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 12px;
      margin: 1rem auto;
      @extend %flex;
    }

    &__replyContainer {
      display: flex;
    }
    &__replyIndicator {
      background-color: #95999b3b;
      margin: 0 24px;
      min-width: 1.5px;
    }

    &__mention {
      font-weight: 700;
      color: #5f5f9e;
      margin-right: 4px;
    }

    &__header {
      @extend %flex;
      gap: 16px;
    }

    &__name {
      font-weight: 700;
      font-size: 16px;
    }

    &__date {
      color: #95999b;
      font-size: 14px;
    }

    &__replyButton {
      background-color: transparent;
      border: none;
      color: #5f5f9e;
      font-size: 16px;
      font-weight: 700;
      margin-left: auto;
      transition: scale .05s ease-in-out;

      &:hover {
        cursor: pointer;
        opacity: .8;
      }

      &:active {
        scale: .95;
      }
    }

    &__content {
      color: #95999b;
    }
  }
</style>
