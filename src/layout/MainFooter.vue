<template>
  <footer
    :class="{[`footer-${type}`]: type}"
    :data-background-color="backgroundColor"
    class="footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link to="home" class="logo">Takuetsu</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Designed by
        <a href="https:///www.invisionapp.com" target="_blank">Invision</a>. Coded by
        <a href="https://github.com/cristijora" target="_blank">Cristi Jora</a> and
        <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style>
.logo {
  font-size: 20px;
}
</style>
