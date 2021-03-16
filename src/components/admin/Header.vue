<template>
  <a-button type="danger" @click="logout()">退出</a-button>

</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      window.sessionStorage.clear('token')
      this.$router.push('/login')

    }
  }
}
</script>

<style scoped>

</style>