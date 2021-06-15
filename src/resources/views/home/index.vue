<template>
  <container class="h-screen flex flex-col items-center justify-center">
    <material-icon name="fingerprint" class="absolute bottom-4" />
    <h1 class="text-3xl font-900 mb-10">Repositórios</h1>
    <button @click="get">Buscar</button>

    <p>usuário: {{ user }}</p>
    <br />
    <ul>
       <li v-for="(repo, index) in repos" :key="index">
          {{ repo.name }} - {{ repo.language }}
       </li>
    </ul>
  </container>
</template>

<script src="./index.js"></script>
