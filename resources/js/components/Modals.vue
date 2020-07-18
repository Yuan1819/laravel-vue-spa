<template id="modal">
  <div class="modal">
    <div class="close" @click="close">&times;</div>
    <div class="body">
      <slot name='body' />
    </div>
  </div>
</template>

<script>
export default {
  template: "#modal",
  methods: {
  	close() {
    	this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
