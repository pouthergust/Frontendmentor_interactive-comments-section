<template>
  <div class="background">
    <div class="container">
      <Comment />
      <TypeMessage />

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/pouthergust">Gabriel Henrique</a>.
      </div>
    </div>
  </div>
</template>

<style scoped>
  .attribution { font-size: 11px; text-align: center; }
  .attribution a { color: hsl(228, 45%, 44%); }

  .background {
    background-color: #f5f6fa;
    height: 100vh;
    font-family: "Manrope", serif;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
