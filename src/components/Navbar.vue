<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Finanzas Personales</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/income">Income</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/report">Report</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/expenses">Expenses</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>

  
  <style>
  .navbar {
    margin-bottom: 20px;
  }
  </style>
  