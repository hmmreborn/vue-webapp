<template>
	<div class="page">
		<the-header  title='设置' hideArrow></the-header>
		<section class="page-content">
			<div class="top position-relative">
				<img src="../assets/0.gif" class="img-fluid"/>
				<button class="btn btn-primary btn-camera"><i class="fa fa-camera fa-lg"></i></button>
			</div>
			<div class="middle">
				<ul class="list-group list-group-flush">
				  <li class="list-group-item"><i class="fa fa-cog fa-lg text-primary"></i>&emsp;手机</li>
				  <li class="list-group-item"><i class="fa fa-cog fa-lg text-danger"></i>&emsp;密码设置</li>
				  <li class="list-group-item"><i class="fa fa-cog fa-lg text-warning"></i>&emsp;通用设置</li>
				  <li class="list-group-item"><i class="fa fa-cog fa-lg text-success"></i>&emsp;版本信息</li>
				  <li class="list-group-item"><i class="fa fa-cog fa-lg text-info"></i>&emsp;关于我们</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";
	export default {
	  components: {
	    TheHeader
	  },
	  created:function () {
        this.$emit('footer', true);
      }
	}
</script>
<style scoped="scoped" lang="scss">
.btn-camera{
	position: absolute;
	bottom: -32px;
	right: 15px;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	z-index: 1;
}
.middle{
	color: #666;
	padding-top: 1rem;
	background-color: #fff;
	.list-group-item{
		border: 0;
		padding: 1rem 1.25rem;
		font-size: .875rem;
	}
}
</style>