<template>
  <div class="container">
    <div class="loginBox">
      <!--    ref挂载表单引用对象  -->
      <a-form-model ref="loginFormRef" :rules="rules" class="loginForm" :model="formdata">
        <!--        prop 绑定校验规则 -->
        <a-form-model-item prop="username">
          <a-input v-model="formdata.username" placeholder="请输入用户名">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-model-item>

        <a-form-model-item prop="password">
          <a-input
              v-on:keyup.enter="login"
              v-model="formdata.password"
              placeholder="请输入密   码"
              type="password">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-model-item>

        <a-form-model-item class="loginBtn">
          <a-button type="primary" style="margin: 10px" @click="login()">登录</a-button>
          <a-button type="info" style="margin: 10px" @click="resetForm()">取消</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: '',
        password: ''
      },
      rules: {
        //输入校验
        username: [
          {required: true, message: "请输入用户名！", trigger: 'blur'},
          {min: 3, max: 7, message: "用户名的长度在3到7个字符！", trigger: 'blur'},
        ],
        password: [
          {required: true, message: "请输入密码！", trigger: 'blur'},
          {min: 6, max: 18, message: "密码的长度在6到18个字符！", trigger: 'blur'},
        ],
      }
    }
  },
  methods: {
    resetForm() {
      this.$refs.loginFormRef.resetFields()
      console.log(this.$refs)
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
            console.log(valid)
            if (!valid) {
              return this.$message.error("输入非法数据，请重新输入。")
            }
            // 解构赋值
            // eslint-disable-next-line no-unused-vars
            // const {data: res} = await this.$http.post("login", this.formdata)
            // if (res.status != 200) {
            //   return this.$message.error(res.message);
            // }
            // localStorage 浏览器关闭的时候，不会清除，sessionStorage 关闭浏览器会清除
            // window.sessionStorage.setItem('token', res.token)
            window.sessionStorage.setItem('token', "dsf")
            await this.$router.push('admin')
          }
      )
    }
  }
}
</script>

<!--scoped只对本页面的元素有效，不会污染其它页面-->
<style scoped>
.container {
  height: 100%;
  background-color: #282c34;

}

.loginBox {
  width: 450px;
  height: 300px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  border-radius: 9px;
}

.loginForm {
  width: 100%;
  position: absolute;
  bottom: 10%;
  padding: 0 20px;
  box-sizing: border-box;

}

.loginBtn {
  display: flex;
  justify-content: flex-end;
}
</style>