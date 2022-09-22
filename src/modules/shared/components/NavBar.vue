<template>
  <div>
    <!--router-link para naevgar entre rutas-->
    <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <!--name -> nombre que le puese en el router y le envio parametros por defecto-->
    <router-link :to="{ name: 'pokemon-id', params: { id: 143 } }"
      >Pokemon por id</router-link
    >
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
a.router-link-active {
  color: #42b983;
}
</style>
