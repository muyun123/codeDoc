<template>
  <div class="login-wrap">
    <el-form
      ref="form"
      :label-position="labelPosition"
      :model="form"
      label-width="80px"
      class="login-from"
      :rules="rules"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label-position="top" label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return { 
        labelPosition: "top", 
        form: { 
            username: "", 
            password: "" 
        } ,
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
    };
  },
  methods: { 
      onSubmit() {
          this.axios.post('http://localhost:8888/api/private/v1/login',this.form).then((res)=>{
              if(res.data.meta.status==200){
                   this.$message({
                    showClose: true,
                    message: res.data.meta.msg,
                    type: 'success'
                });
                sessionStorage.setItem('token', res.data.data.token);
                this.$router.push({path:'/'})
              }else{
                  this.$message({
                    showClose: true,
                    message: res.data.meta.msg,
                    type: 'error'
                });
              }
          });
          
      } 
 },
};
</script>
<style scoped>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-from {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .login-from .login-btn {
  width: 100%;
}
</style>