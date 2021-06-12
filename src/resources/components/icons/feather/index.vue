<template>
  <i
    class="feather-icon"
    :class="'fe-' + icon"
    v-if="icon"
  ></i>
</template>

<script>
export default {
  props: ['icon']
}
</script>

<style lang="scss" src="./index.scss"></style>


