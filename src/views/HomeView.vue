<script setup>

</script>

<template>
  <div class="home col-12 col-sm-3 d-flex flex-column h-100">
    <div class="container">
      <header>
        <div class="avatar d-flex align-center justify-content-center">
          <img alt="Vue logo" class="img-thumbnail img-fluid logo rounded-circle" src="@/assets/thichngamtranglogo.svg" width="125" height="125" />
          <img alt="Vue logo" class="img-thumbnail img-fluid logo rounded-circle" src="@/assets/think.png" width="125" height="125" />

        </div>
        <nav class="side-bar d-flex flex-column sticky-top">
          <RouterLink class="p-3" to="/">Home</RouterLink>
          <RouterLink class="p-3" to="/about">About</RouterLink>
          <RouterLink class="p-3" to="/">Home</RouterLink>
          <RouterLink class="p-3" to="/about">About</RouterLink>
          <RouterLink class="p-3" to="/">Home</RouterLink>
          <RouterLink class="p-3" to="/about">About</RouterLink>
          <RouterLink class="p-3" to="/">Home</RouterLink>

        </nav>
      </header>

    </div>
  </div>


</template>
<style>
.side-bar {
  background-color: hsla(160, 100%, 37%, 0.2);


}
</style>