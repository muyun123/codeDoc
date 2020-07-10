[toc]
# vue
## vue.js的Hello Word
```js
<body>
    <div id="app">
        <h1>{{message}}</h1>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    (()=>{
        var vm = new Vue({
            el:"#app",
            data:{
                message:"hello word"
            }
        })
    })()
</script>
```
## vue.js的组件化
```js
<body>
    <div id="app">
        <h1>{{m}}</h1>
        <Message contend="我是组件"></Message>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    (()=>{
        var Message = Vue.extend({
            name:"Message",
            props:['contend'],
            template:"<h1>{{contend}}</h1>"
        })
        Vue.component('Message',Message)
        var vm = new Vue({
            el:"#app",
            data:{
                m:"hello word"
            }
        })
    })()
</script>
```
## 模板
- el：类型为字符串，DOM元素或函数。其作用是为实例提供挂载元素。一般来说我们会使用css选择符，或者DOM元素。
- template：类型为字符串。默认会将template值替换挂载元素（el值对应的元素），并合并挂载元素和模板根节点的属性，一般来说，我们会在template里写`<div>hello word</div>`这样的HTML字符串。但这样影响可读性也不利于维护。所以经常用“#tpl”的方式赋值，并且在body内容添加`<script id="tpl" type="x-template">`为标签包含的HTML内容，这样就能将HTML从JS中分离出来
```js
<body>
    <div id="app"></div>
    <script id="tpl" type="x-template">
        <div>
            <div>分离的HTML</div>
        </div>
    </script>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    (()=>{       
        var vm = new Vue({
            el:"#app",
            template:'#tpl'
        })
    })()
</script>
```
## data数据
- Vue.js实例可以通过data属性定义数据，这些数据可以在实例对应的模板中进行绑定并使用。需要注意的是，如果传入data的是一个对象，vue实例会代理起data对象里的所有属性，而不会对传入的对象进行深拷贝。另外，我们也可以引用vue实例vm中的$data来获取声明的数据
```js
var data = {a:1}
var vm = new Vue({
    data:data
})
vm.$data === data //true
vm.a === data.a  //true
//设置熟悉也会影响到原始数据
vm.a = 1
data.a = 2
```
- 组件的实例也可以使用data，但需注意：
    - 1)data的值必须是一个函数，并且返回值是原始对象。如果传给组件的data是一个原始对象的话，则在建立多个组件实例时它们就会共用这个data对象，修改其中一个组件实例的数据就会影响到其他组件实例的数据
    - 2)data的属性和props中的不能重名

## methods方法
- 我们可以通过选项属性methods对象来定义方法，并且使用v-on指令来监听DOM事件。
```js
<button v-on:click="alert">alert</button>
new Vue({
    el:"#app",
    data:{a:1},
    methods:{
        alert:function(){
            alert(this.a)
        }
    }
})
```
## 生命周期
Vue.js实例在创建时有一系列的初始化步骤，例如建立数据观察，编译模板，创建数据绑定等。在此过程中，我们可以通过一些定义好的生命周期钩子函数来运行业务逻辑。
- beforeCreate：在实例开始初始化时同步调用。此时数据观测、事件等都尚未初始化
- created：在实例创建之后调用。此时已完成数据绑定、事件方法，但未开始DOM编译，即未挂载到document中。
- beforeMount：
- mounted：在编译结束时调用。此时所有指令已生效，数据变化已能触发DOM更新，但不保证$el已插入文档
- beforeDestroy：在开始销毁实例时调用，此刻实例仍然有效。
- destroyed：在实例被销毁之后调用。此时所有绑定和实例指令都已经解绑，子实例也被销毁。
- beforeUpdate：在实例挂载后，再次更新实例时会调用该方法，此时尚未更新DOM结构。
- updated：在实例挂载之后，再次更新实例并更新完DOM结构后调用。
- activated：需要配合动态组件keep-live属性使用。在动态组件初始化渲染的过程中调用该方法。
- deactivated：需要配合动态组件keep-live属性使用。在动态组件移出的过程中调用该方法。

## 计算属性
```js
var vm=new Vue({
    e1：'#app,
    data:{
        firstName:'Gavin',
        lastName:'CLY'
        },
    computed:{
        fullName:function(){
            //this 指向vm实例
            return this.firstName+''+this.lastName
        }}
    });
<p>{{fullName 1）</p>//Gavin CLY
```
## 表单控件
>vue.js中提供v-model的指令对表单元素进行双向数据绑定
- Text
  输入框示例，用户输入的内容和vm.message直接绑定
  ```js
  <input type="type" v-model="message">
  ```
- radio
单选框
```js
<input type="radio" value="male" v-model="gender"/>
```
gender值即为选中的radio元素的value值

- Checkbox <br>Checkbox分两种情况：单个勾选框和多个勾选框。
<br>单个勾选框，v-model即为布尔值，此时input的value并不影响v-model的值。
```js
<input type="checkbox"v-model-"checked"/>
<span>checked:{{checked}}</span>
```
多个勾选框，v-model使用相同的属性名称，且属性为数组。
```js
<label><input type-"checkbox"value-"1"v-model="multiChecked">1</lable><label>
<input type="checkbox"value="2"v-model="multiChecked">2</1able><label>
<input type-"checkbox"value-"3"v-model-"multiChecked">3</labie>
<p>MultiChecked:{{multichecked.join（'l'）}}</p>
```

-  Select
>同Checkbox元素一样，Select也分单选和多选两种，多选的时候也需要绑定到一个数组。
    - 单选：
```js
<select v-model="selected">
<option selected>A</option>
<option>B</option>
<option>c</option>
</select>
<span>Selected:{（selected}）</span>
```
    - 多选：
```js
<select v-model="multiSelected" multiple>
<option selected>A</option>
<option>B</option><option>C</option>
</select>
<br>
<span>MultiSelected:（1multiselected.join（'1"）}）</span>
```
## class与style绑定
### Class绑定
首先说明的是class属性，我们绑定的数据可以是对象和数组，具体的语法如下：
- 对象语法：v-bind:class接受参数是一个对象，而且可以与普通的class属性共存。

```js
<div class-"tab"v-bind:calss-"（'active'：active，'unactive'：lactive）">
</div>
//vm实例中需要包含
data:{
    active:true
}
//渲染结果为：<div class="tab active"></div>
```
- 数组语法：v-bind:class也接受数组作为参数。
```js
<div v-bind:class-"[classA，classB]"></div>
//vm实例中需要包含
data:{
    classA；'class-a'，
    classB:'class-b'
}
//渲染结果为：<div class="class-a class-b"></div>。
```
也可以使用三元表达式切换数组中的class，
`<diy v-bind:class="TclassA，isB？classB："]"></div>`。如果vm.isB=false，则渲染结果为`<div v-bind:class="class-a"></div>`。

### 内联样式绑定
style属性绑定的数据即为内联样式，同样具有对象和数组两种形式：
- 对象语法：直接绑定符合样式格式的对象。
```js
<div v-bind:style="alertStyle"></div>
data:{
    alertstyle:{color:'red'，fontSize：120px'}
}

```
除了直接绑定对象外，也可以绑定单个属性或直接使用字符串。
><div v-bind:style-"{fontSize:alertstyle.fontSize，color:'red'}"></div>

- 数组语法：v-bind:style允许将多个样式对象绑定到统一元素上。
><div v-bind:style="[styleobjectA，styleobjectB]"></div>

## 模板渲染
### 条件渲染
#### v-if/v-else
>v-if和v-else的作用是根据数据值来判断是否输出该DOM元素，以及包含的子元素。

```js
<div v-if="true">yes</div>
<duv v-else>no</div>
```
#### v-show
>与v-if不同的是，v-show元素的使用会渲染并保持在DOM中。v-show只是切换元素的css属性display。
```js
<div v-show="show">show</div>
```

#### v-for

我们可以用 v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。

