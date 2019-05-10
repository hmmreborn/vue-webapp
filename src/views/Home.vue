<template>
	<div class="page">
	   <the-header title='首页' hideArrow></the-header>
	   <section class="page-content">
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			  <ol class="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div class="carousel-inner">
			    <div class="carousel-item active">
			      <img class="d-block w-100" src="http://bpic.588ku.com/back_pic/03/92/82/0157e3f2f0a3dd2.JPG" alt="First slide">
			    </div>
			    <div class="carousel-item">
			      <img class="d-block w-100" src="http://bpic.588ku.com/back_pic/03/92/82/0157e3f2f0a3dd2.JPG" alt="Second slide">
			    </div>
			    <div class="carousel-item">
			      <img class="d-block w-100" src="http://bpic.588ku.com/back_pic/03/92/82/0157e3f2f0a3dd2.JPG" alt="Third slide">
			    </div>
			  </div>
			</div>
			<div class="four d-flex flex-row justify-content-between align-items-center">
			  <div class="p-3 text-center" v-for="list in lists"> <img :src="list.src" width="48"/><p class="m-0">{{list.msg}}</p></div>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item d-flex justify-content align-items-center" v-for="(item, index) in items">
				    <img :src="item.imgsrc" width="40"/>
				    {{ item.title }}
				    <span class="badge badge-primary badge-pill">{{index +1}}</span>
				</li>
			</ul>
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
      },
      data() {
      	return {
      		items: [
			      { title: '通知公告', msg: '公告信息', imgsrc: '../../static/icon/icon-notice.png'},
			      { title: '系统消息', msg: '消息提醒', imgsrc: '../../static/icon/icon-message.png'},
			      { title: '工作日历', msg: '日程提醒', imgsrc: '../../static/icon/icon-calendar.png'},
			      { title: '财务统计', msg: '统计报表', imgsrc: '../../static/icon/icon-finance.png'},
		    ],
		    lists: [
		    	{msg: '待办', src: '../../static/icon/icon-daibai.png'},
		    	{msg: '工作联系单', src: '../../static/icon/icon-worklist.png'},
		    	{msg: '在线调查', src: '../../static/icon/icon-online.png'},
		    	{msg: '意见箱', src: '../../static/icon/icon-ideabox.png'}
		    ]
      	}
      }
	}
</script>

<style lang="scss" scoped="scoped">
.page{background-color: #fff;
	.four{color: #666;font-size: .875rem;}
	.list-group-item{
		border: 0;
		border-top: 1px solid #eee;
		color:#666;
		img{margin-right: 20px;}
		span{position: absolute;right: 15px;}
	}
}
</style>