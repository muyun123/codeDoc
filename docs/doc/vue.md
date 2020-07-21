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
- el：类型为字符串,DOM元素或函数。其作用是为实例提供挂载元素。一般来说我们会使用css选择符,或者DOM元素。
- template：类型为字符串。默认会将template值替换挂载元素(el值对应的元素),并合并挂载元素和模板根节点的属性,一般来说,我们会在template里写`<div>hello word</div>`这样的HTML字符串。但这样影响可读性也不利于维护。所以经常用“#tpl”的方式赋值,并且在body内容添加`<script id="tpl" type="x-template">`为标签包含的HTML内容,这样就能将HTML从JS中分离出来
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
- Vue.js实例可以通过data属性定义数据,这些数据可以在实例对应的模板中进行绑定并使用。需要注意的是,如果传入data的是一个对象,vue实例会代理起data对象里的所有属性,而不会对传入的对象进行深拷贝。另外,我们也可以引用vue实例vm中的$data来获取声明的数据
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
- 组件的实例也可以使用data,但需注意：
    - 1)data的值必须是一个函数,并且返回值是原始对象。如果传给组件的data是一个原始对象的话,则在建立多个组件实例时它们就会共用这个data对象,修改其中一个组件实例的数据就会影响到其他组件实例的数据
    - 2)data的属性和props中的不能重名

## methods方法
- 我们可以通过选项属性methods对象来定义方法,并且使用v-on指令来监听DOM事件。
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
Vue.js实例在创建时有一系列的初始化步骤,例如建立数据观察,编译模板,创建数据绑定等。在此过程中,我们可以通过一些定义好的生命周期钩子函数来运行业务逻辑。
- beforeCreate：在实例开始初始化时同步调用。此时数据观测、事件等都尚未初始化
- created：在实例创建之后调用。此时已完成数据绑定、事件方法,但未开始DOM编译,即未挂载到document中。
- beforeMount：
- mounted：在编译结束时调用。此时所有指令已生效,数据变化已能触发DOM更新,但不保证$el已插入文档
- beforeDestroy：在开始销毁实例时调用,此刻实例仍然有效。
- destroyed：在实例被销毁之后调用。此时所有绑定和实例指令都已经解绑,子实例也被销毁。
- beforeUpdate：在实例挂载后,再次更新实例时会调用该方法,此时尚未更新DOM结构。
- updated：在实例挂载之后,再次更新实例并更新完DOM结构后调用。
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
<p>{{fullName 1)</p>//Gavin CLY
```
## 表单控件
>vue.js中提供v-model的指令对表单元素进行双向数据绑定
- Text
  输入框示例,用户输入的内容和vm.message直接绑定
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
<br>单个勾选框,v-model即为布尔值,此时input的value并不影响v-model的值。
```js
<input type="checkbox"v-model-"checked"/>
<span>checked:{{checked}}</span>
```
多个勾选框,v-model使用相同的属性名称,且属性为数组。
```js
<label><input type-"checkbox"value-"1"v-model="multiChecked">1</lable><label>
<input type="checkbox"value="2"v-model="multiChecked">2</1able><label>
<input type-"checkbox"value-"3"v-model-"multiChecked">3</labie>
<p>MultiChecked:{{multichecked.join('l')}}</p>
```

-  Select
>同Checkbox元素一样,Select也分单选和多选两种,多选的时候也需要绑定到一个数组。
    - 单选：
```js
<select v-model="selected">
<option selected>A</option>
<option>B</option>
<option>c</option>
</select>
<span>Selected:{{selected}}</span>
```
    - 多选：
```js
<select v-model="multiSelected" multiple>
<option selected>A</option>
<option>B</option><option>C</option>
</select>
<br>
<span>MultiSelected:{{1multiselected.join('1')}}</span>
```
## class与style绑定
### Class绑定
首先说明的是class属性,我们绑定的数据可以是对象和数组,具体的语法如下：
- 对象语法：v-bind:class接受参数是一个对象,而且可以与普通的class属性共存。

```js
<div class="tab" v-bind:calss="('active'：active,'unactive'：lactive)">
</div>
//vm实例中需要包含
data:{
    active:true
}
//渲染结果为：<div class="tab active"></div>
```
- 数组语法：v-bind:class也接受数组作为参数。
```js
<div v-bind:class-"[classA,classB]"></div>
//vm实例中需要包含
data:{
    classA:'class-a',
    classB:'class-b'
}
//渲染结果为：<div class="class-a class-b"></div>。
```
也可以使用三元表达式切换数组中的class,
`<diy v-bind:class="TclassA,isB？classB："]"></div>`。如果vm.isB=false,则渲染结果为`<div v-bind:class="class-a"></div>`。

### 内联样式绑定
style属性绑定的数据即为内联样式,同样具有对象和数组两种形式：
- 对象语法：直接绑定符合样式格式的对象。
```js
<div v-bind:style="alertStyle"></div>
data:{
    alertstyle:{color:'red',fontSize：120px'}
}

```
除了直接绑定对象外,也可以绑定单个属性或直接使用字符串。

><div v-bind:style-"{fontSize:alertstyle.fontSize,color:'red'}"></div>

- 数组语法：v-bind:style允许将多个样式对象绑定到统一元素上。

><div v-bind:style="[styleobjectA,styleobjectB]"></div>

## 模板渲染 

### 条件渲染

#### v-if/v-else

>v-if和v-else的作用是根据数据值来判断是否输出该DOM元素,以及包含的子元素。

```js
<div v-if="true">yes</div>
<duv v-else>no</div>
```

#### v-show
>与v-if不同的是,v-show元素的使用会渲染并保持在DOM中。v-show只是切换元素的css属性display。

```js
<div v-show="show">show</div>
```

#### v-for

我们可以用 v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法,其中 items 是源数据数组,而 item 则是被迭代的数组元素的别名。

```js
<u1>
    <1i v-for="(item, index) in items ">
        <h3>{{ item. title}}</h3>
        <p>{{ item. description})</p>
    </1i>
</ul>

var vm = new Vue((
    el:'# app', 
    data:{
        items:[
            {title:' title-1', description:' description-1'},
            { title:' title-2', description:' description-2'),
            { title:' title-3', description:' description-3'},
            { title:' title-41', description:' description-4'}
        ]
    }
});
```

需要注意的是Vue.js对data中数组的原生方法进行了封装,所以在改变数组时能触发视图更新,但以下两种情况是无法触发视图更新的：
- 通过索引直接修改数组元素,例如vm.items[0]={title:'title-changed'};
- 无法直接修改“修改数组”的长度,例如：`vm.items.length=0`对于第一种情况,Vue.js提供了sset方法,在修改数据的同时进行视图更新,可以写成：
    - vm.items.$set(0,{title:'title-changed'}或者vm.$set(items[O",{title:title-also-changed}),这两种方式皆可以达到效果。

在列表渲染的时候,有个性能方面的小技巧,如果数组中有唯一标识id,例如：
```js
<div v-for="item in items" v-bind:key="item.id"><!-- 内容 --></div>
```
这样,Vue.js在渲染过程中会尽量复用原有对象的作用域及DOM元素。

v-for除了可以遍历数组外,也可以遍历对象,与$index类似,作用域内可以访问另一内置变量$key,也可以使用(key,value)形式自定义key变量。

#### template标签用法
 上述的例子中,v-show和v-if指令都包含在一个根元素中,那是否有方式可以将指令作用到多个兄弟DOM元素上？Vue.js提供了template标签,我们可以将指令作用到这个标签上,但最后的渲染结果里不会有它。

 同样,template标签也支持使用v-for指令,用来渲染同级的多个兄弟元素。

 ## 事件绑定与监听
当模板渲染完成之后,就可以进行事件的绑定与监听了。Vue.js提供了v-on指令用来监听DOM事件,通常在模板内直接使用,而不像传统方式在is中获取DOM元素,然后绑定事件。例如：
><button v-on:click="say">Say</button>

 ### 方法及内联语句处理器
通过v-on可以绑定实例选项属性methods中的方法作为事件的处理器,v-on：后参数接受所有的原生事件名称。例如：
```js
<button v-on:click="say">Say</button>
var vm=new Vue({
        el:'#app',
        data:{
            msg:'Hello Vue.js'
        },
        methods:{
        say:function(){
         alert(this.msg);
        }
    }
});
```
单击button,即可触发say函数,弹出alert框Hello Vue.js'。

Vue.is也提供了v-on的缩写形式,我们可以将模板中的内容改写为`<button @click='say'>Say</button>`,这两句语句是等价的。

除了直接绑定methods函数外,v-on 也支持内联JavaScript语句,但仅限一个语句。例如：
```js
<button v-on:click="sayFrom('from param')">Say</button>
var vm=new Vue({
    el:'#app',
    data:{
        msg:'He11o Vue.js'
    },
    methods:{
        sayFrom:function(from){
          alert(this.msg+''+from);
    }
});
```
在直接绑定methods函数和内联JavaScript语句时,都有可能需要获取原生DOM事件对象,以下两种方式都可以获取：
```js
<button v-on:click="showEvent">Event</button>
<button v-on:click="showEvent($event)">showEvent</button>
<button v-on:click="showEvent()">showEvent</button>//这样写获取不到event 
var vm=new Vue({
    el:'#app',
    methods:{
        showEvent:function(event){
        console.log(event);
    }
});
```
同一元素上也可以通过v-on绑定多个相同事件函数,执行顺序为顺序执行,例如：
><div v-on:click="sayFrom('first')" v-on:click="sayFrom('second)">

### 修饰符
Vue.js为指令v-on提供了多个修饰符,方便我们处理一些DOM事件的细节,并且修饰符可以串联使用。主要的修饰符如下。
- .stop：等同于调用event.stopPropagation()
- .prevent：等同于调用event.preventDefault()
- .capture：使用capture 模式添加事件监听器。
- .self：只当事件是从监听元素本身触发时才触发回调。
使用方式如下：
```js
<a v-on:click.stop='doThis'></a>
<form v-on:submit.prevent="onSubmit"></form> //阻止表单默认提交事件
<form v-on:submit.stop.prevent="onSubmit"></form> //阻止默认提交事件且阻止冒泡
<form v-on:submit.stop.prevent></form>//也可以只有修饰符,并不绑定事件
```
可以尝试运行以下这个例子,更好地理解修饰符在其中起到的作用。
```js
var vm=new Vue({
    el:'#app',
    methods:{
        sayself(msg){
            alert(msg);
        }
    }
});
<div v-on:click="sayself('click from inner')" v-on:click.self="sayself('click from self')">
<button v-on:click="sayself('button click')">button</button>
<button v-on:click.stop="sayself('just button click')">button</button>
</div>
```
除了事件修饰符之外,v-on还提供了按键修饰符,方便我们监听键盘事件中的按键。例如：
```js
<input v-on:keyup.13="submit"/>//监听input的输入,当输入回车时触发Submit函数(回车的keycode值为13),用于处理常见的用户输入完直接按回车键提交)
```
Vue.is给一些常用的按键名提供了别称,这样就省去了一些记keyCode的事件。全部按键别名为：enter、tab、delete、esc、space、up、down、left、right。例如：
>\<input v-on:keyup.enter="submit"/>

Vue.is也允许我们自己定义按键别名,例如：
>Vue.directive('on').keyCodes.f1=112;//即可以使用\<input v-on:keyup.fl="help"/>

Vue.js 2.0中可以直接在Vue.config.keyCodes里添加自定义按键别名,无需修改v-on指令,例如：
>Vue.config.keyCodes.f1=12。

