<template>
  <nav class="navbar">
    <div class="logo">UniStay</div>
    <ul class="nav-links">
      <li><a href="/">Início</a></li>
      <li><a href="/alojamentos">Alojamentos</a></li>
      <li><a href="/eventos">Eventos</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
