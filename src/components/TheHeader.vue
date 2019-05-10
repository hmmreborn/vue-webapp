<template>
	<header class="page-header flex flex-pack-justify">
	    <div class="page-header--left" :hidearrow='hideArrow'>
	      <i class="arrow"></i>
	      <slot name='left'></slot>
	    </div>
	    <div class="page-header--middle flex flex-align-center">
	      <span class="page-header--title" v-if='!$slots.title'>{{title}}</span>
	      <slot name='title'></slot>
	    </div>
	    <div class="page-header--right flex flex-align-center flex-pack-center">
	      <slot name='right'></slot>
	    </div>
	</header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    hideArrow: {
      type: Boolean,
      required: false,
      default: false
    },
    back: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
  	return {
  	}
  },
  methods: {
    goback() {
    	console.log('back')
    }
  }
};
</script>

<style lang="scss" scoped="scoped">

</style>