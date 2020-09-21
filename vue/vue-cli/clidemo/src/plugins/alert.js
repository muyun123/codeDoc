import Vue from 'vue'
import alret from './alert.vue'

var info = Vue.extend(alret)
var vm = new info({
    name: 'message',
    el: document.createElement('div'),
    data() {
        return {
            info: '错误提示！'
        }
    }
})

var Msg = {}
Msg.install = function (Vue, options) {
    Vue.prototype.message = function (obj) {
        let defaultObj = {
            type:'info',
            message:'错误提示！',
            time:3000
        }
        let newobj = Object.assign(defaultObj,obj);
        // console.log(vm)
        if(newobj.type==='info'){
            vm.info = newobj.message
        }
        document.body.appendChild(vm.$el);
        setTimeout(() => {
            document.body.removeChild(vm.$el)
            vm = null
        }, newobj.time)
    }
};

Vue.use(Msg)

export default Msg;