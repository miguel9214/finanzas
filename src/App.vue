<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Finanzas Personales</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/incomes">Income</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reports">Report</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/expenses">Expenses</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin-bottom: 20px;
}

.navbar-nav .nav-link {
  color: #2c3e50;
}

.navbar-nav .nav-link:hover {
  color: #42b983;
}

.navbar-nav .nav-link.active {
  color: #42b983;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PHBhdGggZmlsbC1ydWxlPSJyb3VuZCIgZmlsbC1vcGFjaXR5PSJub25lIiBkPSJNMTAsNUg4TDE4LDIuNUwyMiw2IE0xMiw4IEw2LDIuNUMxMiwzIEw2LDIuNSIgLz48L3N2Zz4=");
}
</style>
