<template>
	<div class="page">
		<the-header  title='通讯录' hideArrow></the-header>
		<section class="page-content" @scroll='scroll' ref='content'>
		  <!-- 搜索 -->
		  <div class="search">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="搜索" aria-label="Username">
		    </div>
		  </div>
	      <!-- 右侧导航 -->
	      <div class="navs flex flex-v flex-pack-justify">
	        <span v-for='(item, index) in navs' :key='item' @click='gotoNav(index)'>{{item}}</span>
	      </div>
	
	      <!-- 首字母标签 -->
	      <div class="acr" :acr='acr'>
	        <div class="acr-list" :style="'transform: translate3d(0,'+(acrIndex * -40)+'px,0);'">
	          <div class="item" v-for='(item, index) in labels' :key='index'>{{item}}</div>
	        </div>
	      </div>
	
	      <!-- 列表 -->
	      <div class="tags" v-for='({label, cities}, index) in tag.list' :key='index'>
	        <div class="tag-title">{{label}}</div>
	        <ul class="tag-cells">
	          <li v-for='(item, index) in cities' :key='index'>{{label}}--{{item}}</li>
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
  },
  mounted() {
    this.$nextTick(() => {
      this.offset = this.initOffsetTop();
      console.log(this.offset);
      this.body = this.$refs.content;
      let offsetCalc = this.offset.slice();
      offsetCalc.forEach((item, index) => {
        this.offsetList.push([item, offsetCalc[index + 1]]);
      });
    });
  },
  methods: {
    scroll(evt) {
      const offsetTop = this.body.scrollTop;
      const label = this.getArea(offsetTop);
      if (label !== this.acr) {
        this.acr = label;
      }
    },
    getArea(number) {
      // 判断所处区间
      let label = "";
      number += 80;
      for (let i = 0, size = this.offsetList.length; i < size; i++) {
        let [start, end] = this.offsetList[i];
        if (number >= start && number < (end || 999999)) {
          label = this.labels[i];
          this.acrIndex = i;
          break;
        }
      }
      return label;
    },
    gotoNav(index) {
      const offset = this.offset[index];
      this.body.scrollTop = offset;
    },
    initOffsetTop() {
      const cells = [...document.querySelectorAll(".tags")];
      const offset = [];
      cells.forEach(item => {
        offset.push(item.offsetTop || 0);
      });
      return offset;
    },
    clean() {
      this.inputValue = "";
    },
    submit() {},
    makeWords() {
      return "abcdefghijklmnopqrstuvwxyz".split("").map(i => i.toUpperCase());
    }
  },
  data() {
    return {
      acr: "",
      acrIndex: -1,
      inputValue: "",
      offset: [],
      offsetList: [],
      labels: this.makeWords(),
      body: null,
      tag: {
        list: this.makeWords().map(item => {
          return {
            label: item,
            cities: ["人事", "行政", "IT专员", "仓储", "财务", "采购", "客服"]
          };
        })
      },
      navs: this.makeWords()
    };
  }
}
</script>
<style scoped="scoped" lang="scss">
	.page{background-color: #f7f8fa;}
	.page-content {
	  .head {
	    height: 40px;
	    line-height: 40px;
	    padding: 0 10px;
	    color: #999;
	    font-size: 12px;
	  }
	  .acr {
	    z-index: 1;
	    position: absolute;
	    width: 100%;
	    height: 40px;
	    overflow: hidden;
	    transform: translate3d(0, 0, 0);
	    .acr-list {
	      position: absolute;
	      transform: translate3d(0, 0, 0);
	      transition: transform 0.5s;
	    }
	    .item {
	      @extend .head;
	    }
	    &[acr=""] {
	      display: none;
	    }
	  }
	  .tag-title {
	   @extend .head;
	  }
	  .tag-cells {
	    background: #fff;
	    list-style: none;margin: 0;padding: 0;
	    li {
	      margin-left: 10px;
	      padding: 11px 0;
	      border-bottom: 1px solid #eee;
	      font-size: 15px;
	      color: #333;
	      cursor: pointer;
	      &:last-child {
	        border: 0;
	      }
	    }
	  }
	  .navs {
	    z-index: 2;
	    position: fixed;
	    right: 10px;
	    top: 100px;
	    bottom: 60px;
	    text-align: center;
	    color: #5d9ed3;
	    font-size: 10px;
	    span {
	      cursor: pointer;
	    }
	  }
	  .search{
	  	margin: 10px;
	  	input{
	  		padding:8px 20px;
	  		border: 0;
	  		border-radius:20px;
	  		background-color: rgba(255,255,255,.5);
	  		font-size:.875rem; 
	  		&:focus{
	  			border: 0;
	  			box-shadow: none;
	  		}
	  	}
	  }
}
</style>