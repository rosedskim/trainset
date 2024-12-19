<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <slot name="nav-content">
      <h1 class="navbar-brand"></h1>
    </slot>
  </nav>
</template>

<script>
export default {
  name: "BaseNavbar"
};
</script>

<style scoped>
.navbar {
  background: #7e4c64;
}
>>> .nav-link,
.navbar-brand {
  color: #f4f4f4;
  cursor: pointer;
}
.nav-link {
  margin-right: 1em !important;
}
.nav-link:hover {
  background: #f4f4f4;
  color: #7e4c64;
}
.navbar-toggler {
  background: #fff !important;
}
.navbar-nav {
  float: right;
}
.homeLink {
  text-decoration: none;
  color: inherit;
}
.homeLink:hover {
  text-decoration: none;
  color: inherit;
}
#logo {
  max-height: 30px !important;
}
</style>
