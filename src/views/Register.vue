<template>
	<div id="register">
		<div class="container">
			<h1 class="text-center"><i class="fa fa-quora fa-2x"></i></h1>
			<form @submit.prevent="submit">
			  <div class="form-group" :class="{ 'form-group--error': $v.user.name.$error }">
			    <input type="text" class="form-control" id="name"  placeholder="用户名" v-model.trim="$v.user.name.$model">
			  </div>
			  <div class="error" v-if="!$v.user.name.required">请输入用户名</div>
			  <div class="error" v-if="!$v.user.name.minLength">用户名至少{{$v.user.name.$params.minLength.min}}位</div>
			  
			  <div class="form-group" :class="{ 'form-group--error': $v.user.email.$error }">
			    <input type="email" class="form-control" id="email"  placeholder="邮箱" v-model.trim="$v.user.email.$model">
			  </div>
			  <div class="error" v-if="!$v.user.email.required">请输入邮箱</div>
			  <div class="error" v-if="!$v.user.email.email">请输入正确邮箱格式</div>
			  
			  <div class="form-group" :class="{ 'form-group--error': $v.user.password1.$error }">
			    <input type="password" class="form-control" id="password1" placeholder="密码" v-model.trim="$v.user.password1.$model">
			  </div>
		      <div class="error" v-if="!$v.user.password1.required">请输入密码</div>
			  <div class="error" v-if="!$v.user.password1.strongPassword">强密码需要有字母、数字、特殊字符，并且长度超过8个字符</div>
			  
			  <div class="form-group" :class="{ 'form-group--error': $v.user.password2.$error }">
			    <input type="password" class="form-control" id="password2" placeholder="确认密码" v-model.trim="$v.user.password2.$model">
			  </div>
		      <div class="error" v-if="!$v.user.password2.required">请输入密码</div>
			  <div class="error" v-if="!$v.user.password2.sameAsPassword">密码不匹配</div>
			  
			  <div class="form-group mt-5">
			  	<button type="submit" class="btn btn-primary btn-block">注册</button>
			  </div>
			  <div class="form-group text-right">
			  	<router-link :to="{path: 'login'}">登录</router-link>
			  </div>
			</form>
		</div>
	</div>
</template>

<script>
	import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
    export default {
        name: 'login',
        components:{
        },
        data () {
            return {
            	user: {
            		name: null,
			        email: null,
			        password1: null,
			        password2: null
            	}
            }
        },
        validations: {
        	user: {
        		name: {
        			required,
        			minLength: minLength(2)
        		},
        		email: {
        			required,
        			email
        		},
        		password1: {
			        required,
			        strongPassword(password1) {
			          return (
			            /[a-z]/.test(password1) && //checks for a-z
			            /[0-9]/.test(password1) && //checks for 0-9
			            /\W|_/.test(password1) && //checks for special char
			            password1.length >= 8
			          );
			        }
			    },
			    password2: {
			        required,
			        sameAsPassword: sameAs("password1")
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
		      	this.$router.push({path: 'login'});
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
		border-radius: 0;
		font-size: .875rem;
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