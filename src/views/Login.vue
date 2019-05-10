<template>
	<div id="login">
		<div class="container">
			<h1 class="text-center"><i class="fa fa-quora fa-2x"></i></h1>
			<form @submit.prevent="submit">
			  <div class="form-group" :class="{ 'form-group--error': $v.user.username.$error }">
			    <input type="text" class="form-control" id="username"  placeholder="用户名" v-model.trim="$v.user.username.$model">
			  </div>
			  <div class="error" v-if="!$v.user.username.required">请输入用户名</div>
			  <div class="form-group" :class="{ 'form-group--error': $v.user.userpwd.$error }">
			    <input type="password" class="form-control" id="userpwd" placeholder="密码" v-model.trim="$v.user.userpwd.$model">
			  </div>
		      <div class="error" v-if="!$v.user.userpwd.required">请输入密码</div>
			  <div class="error" v-if="!$v.user.userpwd.minLength">密码至少 {{$v.user.userpwd.$params.minLength.min}} 位</div>
			  <div class="form-group mt-5">
			  	<button type="submit" class="btn btn-primary btn-block">登录</button>
			  </div>
			  <div class="form-group text-right">
			  	<router-link :to="{path: 'register'}">注册</router-link>
			  </div>
			</form>
		</div>
	</div>
</template>

<script>
	import { required, minLength } from 'vuelidate/lib/validators'
    export default {
        name: 'login',
        components:{
        },
        data () {
            return {
            	user: {
            		username: '',
                    userpwd: '',
            	}
            }
        },
        validations: {
        	user: {
        		username: {
        			required,
        		},
        		userpwd: {
        			required,
        			minLength: minLength(6)
        		}
        	}
        },
        methods: {
        	submit() {
		      this.$v.$touch();
		      if (this.$v.$invalid) {
		      	console.log('false')
		      } else{
		      	console.log('true')
		      	this.$router.push({path: 'home'});
		      }
		    }
        },
        created:function () {
            this.$emit('footer', false);
        }
    }
</script>

<style scoped="scoped" lang="scss">
h1{padding: 40px 0;
	i{
		color: #007bff;
		background: #007bff;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to left, #007bff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to left, #007bff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
}
form{
	input{
		border: 0;
		border-bottom: 1px solid #eee;
		border-radius: 0;font-size: .875rem;
	}
	input:hover,input:focus{
		box-shadow: none;
		border-bottom-color:#007bff ;
	}
	.error {
	    font-size: 0.75rem;
	    display: none;
	    margin-left: .75rem;
	    margin-top: -.75rem;
	}
	.form-group--error + .error {
	    display: block;
	    color: #f57f6c;
	}
	.form-group--error input, .form-group--error textarea, .form-group--error input:focus, .form-group--error input:hover {
	    border-color: #f79483;
	}
}
</style>