<script setup>

</script>

<template>
  <div class="home col-12 d-flex flex-column h-100">
    <div class="container">
      <header>
        <div class="avatar d-flex align-center justify-content-center">
          <!--          <img alt="Vue logo" class="img-thumbnail img-fluid logo rounded-circle" height="125"-->
          <!--               src="@/assets/thichngamtranglogo.svg" width="125"/>-->
          <!--          <img alt="Vue logo" class="img-thumbnail img-fluid logo rounded-circle" height="125" src="@/assets/think.png"-->
          <!--               width="125"/>-->

        </div>
        <nav class="side-bar d-flex flex-column">
          <ul>
            <li>
              <RouterLink to="/"><i class="bi bi-house-heart-fill"></i><span>Home</span></RouterLink>
            </li>
            <li>
              <RouterLink class="" to="/about"><i class="bi bi-person"></i><span>About</span></RouterLink>
            </li>
            <li>
              <RouterLink class="" to="/"><i class="bi bi-rss-fill"></i><span>Blog</span></RouterLink>
            </li>
          </ul>


        </nav>
      </header>

    </div>
  </div>


</template>
<style>
.side-bar {
  justify-content: center;
  height: 100vh;
  /*background-color: hsla(160, 100%, 37%, 0.2);*/
}

nav.side-bar ul {
  position: fixed;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.side-bar ul li a {
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  align-content: center;
  margin: 10px;
  padding: 15px 18px;
  background-color: hsla(160, 100%, 37%, 0.2);
  height: 56px;
  width: 56px;
  border-radius: 50px;
}

.side-bar a span {
  margin-left: 5px;
}

.side-bar ul li a:hover {
  width: 100%;
}

.side-bar ul li a:hover span {
  display: block;
}

.side-bar a i {
  font-size: 20px;
}

@media (min-width: 992px) {
  .side-bar a {
    width: 56px;
  }

  .side-bar a span {
    display: none;
  }

}
</style>