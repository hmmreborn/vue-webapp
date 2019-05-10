<template>
	<div class="page">
		<the-header  title='办公' hideArrow></the-header>
		<section class="page-content">
			<div class="box-shadow" style="background: #0081ea;border-radius: 0;">
				<div class="d-flex flex-row justify-content-center align-content-center">
					<div class="p-3 mx-3 text-center text-white-50">
						<span class="fa-stack fa-2x">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
						</span>
						<p class="text-white">我的申请</p>
					</div>
					<div class="p-3 mx-3 text-center text-white-50">
						<span class="fa-stack fa-2x">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-edit fa-stack-1x fa-inverse"></i>
						</span>
						<p class="text-white">我的审批</p>
					</div>
				</div>
			</div>
			<div class="box-shadow">
				<div class="d-flex flex-row justify-content-between align-content-center">
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-primary">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-check fa-stack-1x fa-inverse"></i>
						</span>
						<p>请休假申请</p>
					</div>
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-danger">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-money fa-stack-1x fa-inverse"></i>
						</span>
						<p>费用报销</p>
					</div>
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-success">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-plane fa-stack-1x fa-inverse"></i>
						</span>
						<p>出差申请</p>
					</div>
				</div>
				<div class="d-flex flex-row justify-content-between align-content-center">
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-warning">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-cart-plus fa-stack-1x fa-inverse"></i>
						</span>
						<p>物品申购</p>
					</div>
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-info">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-hand-pointer-o fa-stack-1x fa-inverse"></i>
						</span>
						<p>未打卡</p>
					</div>
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-primary">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-calendar-plus-o fa-stack-1x fa-inverse"></i>
						</span>
						<p>加班申请</p>
					</div>
				</div>
				<div class="d-flex flex-row justify-content-between align-content-center">
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-success">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-thumb-tack fa-stack-1x fa-inverse"></i>
						</span>
						<p>用印申请</p>
					</div>
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-danger">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-desktop fa-stack-1x fa-inverse"></i>
						</span>
						<p>IT运维</p>
					</div>
					<div class="p-3 text-center">
						<span class="fa-stack fa-2x  text-dark">
						  <i class="fa fa-circle fa-stack-2x"></i>
						  <i class="fa fa-plus fa-stack-1x fa-inverse"></i>
						</span>
						<p>添加模板</p>
					</div>
				</div>
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
.page-content{
	p{
		font-size: .875rem;
		color: #666;
	}
	.box-shadow{
		margin-bottom: 1rem;
		background-color: #fff;
		border-radius: 4px;
	}
	
}
</style>