<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <input type="file" name="" ref="file" @click="img4(this)">

    <img :src="imgbase64">
     <canvas ref="canvas" width="640" height="480"></canvas>
  </div>
</template>

<script>
const imageToBase64 = require('image-to-base64');
const fs = require('fs')
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    imgbase64:'',
  },
  mounted(){
    // this.message({message:'123456789'})
    // console.log(this.message({message:'ceshijsdhj1'}))
    // this.imgTobase3()
  },
  methods:{
    imgTobase3(){
      let _this =this;
       let ctx = this.$refs['canvas'].getContext('2d')
        var img = new Image();
      // ctx.drawImage('../assets/logo.png', 0, 0, 640, 480)
        var imgs = function () {
            ctx.drawImage(img, 0, 0);
            let imgBase = _this.$refs['canvas'].toDataURL("image/jpeg", 1.0);
            _this.imgbase64 = imgBase;
        }
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = 'D:\\vue\\11.png';
      console.log(img.width)
      img.onload = function(){
            imgs()
      };
    },
    async img4(){
      var path2 = this.$refs['file'].files[0];
        var i = await this.getBase64(path2)
        console.log(i)
    },
    getBase64 (file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
