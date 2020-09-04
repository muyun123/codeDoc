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
```js
<div v-bind:style-"{fontSize:alertstyle.fontSize,color:'red'}"></div>
```
- 数组语法：v-bind:style允许将多个样式对象绑定到统一元素上。
```js
<div v-bind:style="[styleobjectA,styleobjectB]"></div>
```
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
>\<button v-on:click="say">Say</button>

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

### 与传统事件绑定的区别
如果你之前没有接触过Angularis,ReactJS这类框架,或许会对Vue.js这种事件监听方式感到困惑。毕竟我们一开始接受的理念就是将HTML和IS隔离开编写。但其实Vue.js事件处理方法和表达式都严格绑定在当前视图的ViewModel上,所以并不会导致维护困难。

而这么写的好处在于：
- 无需手动管理事件。ViewModal被销毁时,所有的事件处理器都会自动被删除,让我们从获取DOM绑定事件然后在特定情况下再解绑这样的事情中解脱出来。
- 解耦。ViewModel代码是纯粹的逻辑代码,和DOM无关,有利于我们写自动化测试用例。

还有个与以往不同的细节是,我们在处理ul、li这种列表,尤其是下拉刷新这种需要异步加载数据的列表时,往往会把li事件代理到ul上,这样异步加载进来的新数据就不需要再次绑定事件。而Vue.js这类的框架由于不需要手动添加事件,往往直接会把事件绑定在i上,类似这样：<liv-repeat="item in items" v-on:click="clickLi"></li>,理论上每次新增li的时候都会进行同i个数的事件绑定,比用事件代理多耗了些性能。但在实际运用中并没有什么特别的性能瓶颈影响,而且我们也省去在代理中处理e.target的步骤,让事件和DOM元素关系更紧密、简单。

## Vue.extend()
组件化开发也是Vue.js中非常重要的一个特性,我们可以将一个页面看成一个大的根组件,里面包含的元素就是不同的子组件,子组件也可以在不同的根组件里被调用。在上述例子中,可以看到在一个页面中通常会声明一个Vue的实例 new Vue({})作为根组件,那么如何生成可被重复使用的子组件呢？Vue.js 提供了Vue.extend(options)方法,创建基础Vue构造器的“子类”,参数options对象和直接声明Vue实例参数对象基本一致,使用方法如下：
```js
var Child=Vue.extend({
    template:'#child',
    //不同的是,e1和data选项需要通过函数返回值赋值,避免多个组件实例共用一个数据
    data:function(){}
        return()
    }
})
Vue.component('child',Child)//全局注册子组件
<child></child>//子组件在其他组件内的调用方式
```

# 指令

指令是Vue.js中一个重要的特性,主要提供了一种机制将数据的变化映射为DOM行为。那什么叫数据的变化映射为DOM行为？前文中阐述过Vue.js是通过数据驱动的,所以我们不会直接去修改DOM结构,不会出现类似于ul).append(<li>one</li>)这样的操作。当数据变化时,指令会依据设定好的操作对DOM进行修改,这样就可以只关注数据的变化,而不用去管理DOM的变化和状态,使得逻辑更加清晰,可维护性更好。

## 内置指令
### v-bind
v-bind主要用于动态绑定DOM元素属性(attribute),即元素属性实际的值是由vm实例中的data属性提供的。例如：
```js
<img v-binf:src="avatar">
new Vue({
    data:(
        avatar:"....png"
    )
})
```
v-bind可以简写为：,上述例子即可简写为<img:src='avatar'/>。

v-bind还拥有三种修饰符,分别为.sync、once、.camel,作用分别如下。

### v-model
该指令主要用于input、select、textarea标签中,具有lazy、number、debounce(2.0废除)、trim这些修饰符。

### v-if/v-else/v-show 
v-if/v-else/v-show这三个指令主要用于根据条件展示对应的模板内容。v-if和v-show的主要区别就在于,v-if在条件为false的情况下并不进行模板的编译,而v-show则会在模板编译好之后将元素隐藏掉。v-if的切换消耗要比v-show高,但初始条件为false的情况下,v-if的初始渲染要稍快。

### v-for
v-for也是用于模板渲染的指令

### v-on 
v-on指令主要用于事件绑定,用法：
```js
<button v-on:click='onClick'></button>
```
v-on可以简写为：
```js
<button Qclick='onClick'></button>
```
修饰符包括.stop、prevent、.capture、self 以及指定按键.{keyCodelkeyAlias}。

在Vue.js2.0中,在组件上使用v-on指令只监听自定义事件,即使用semit触发的事件;如果要监听原生事件,需要使用修饰符,native,例如`<my-component v-on:click.native="onClick"></my-component>`。

### v-text 
v-text,参数类型为String,作用是更新元素的textContent。{{}}文本插值本身也会被编译成textNode的一个v-text指令。而与直接使用{{}}不同的是,v-text 需要绑定在某个元素上,能避免未编译前的闪现问题。例如：
```js
<span v-text="msg"></span>
```
如果直接使用<span>{{msg}}</span>,在生命周期beforeCreated期间,此刻msg数据尚未编译至{{msg}}中,用户能看到一瞬间的{{msg)},然后闪现为There is a message,而用v-text的话则不会有这个问题.

### v-HTML 
v-HTML,参数类型为String,作用为更新元素的innerHTML,接受的字符串不会进行编译等操作,按普通HTML处理。同v-text类似,{{{}}}插值也会编译为节点的v-HTML指令,v-HTML也需要绑定在某个元素上且能避免编译前闪现问题。例如：
```js
<div>{{{HTML}}}/div>
<div v-HTML="HTML"></div>
```
### V-pre 
v-pre指令相对简单,就是跳过编译这个元素和子元素,显示原始的{{}}Mustache标签,用来减少编译时间。例如：
```js
<div v-pre>{{uncompiled}}</div>
var vm=new Vue({
    el:'#app',
    data:{
      uncompiled:'Thers is an uncompiled element,
    }
});
```

### v-cloak  
v-cloak指令相当于在元素上添加了一个[v-cloak]的属性,直到关联的实例结束编译。
官方推荐可以和css规则[v-cloak]{display:none}一起使用,可以隐藏未编译的Mustache标签直到实例准备完毕。例如：
```js
<div v-cloak>{{msg}</div>
```
### v-once 
v-once 用于标明元素或组件只渲染一次,即使随后发生绑定数据的变化或更新,该元素或组件及包含的子元素都不会再次被编译和渲染。这样就相当于我们明确标注了这些元素不需要被更新,所以v-once的作用是最大程度地提升了更新行为中页面的性能,可以略过一些明确不需要变化的步骤。使用方式如下：
```js
<span v-once>{{msg))</span>
<my-component v-once:msg='msg'></my-component>
```
## 自定义指令基础
除了内置指令外,Vue.js也提供了方法让我们可以注册自定义指令,以便封装对DOM元素的重的处理行为,提高代码复用率。本小节主要说明了如何创建、注册自定义指令,以及讲述指令的相关属性钩子函数,更深一步地了解指令在Vue.js中起到的作用。

### 指令的注册
我们可以通过Vue.directive(id,definition)方法注册一个全局自定义指令,接收参数id和定义对象。id是指令的唯一标识,定义对象则是指令的相关属性及钩子函数。例如：
Vue.directive('global-directive',definition);//我们暂时只注册了这个指令,并没有赋予这个指令任何功能。我们可以在模板中这么使用：
```js
<div v-global-directive></div>
```
而除了全局注册指令外,我们也可以通过在组件的directives选项注册一个局部的自定义指令。例如：
```js
var comp=Vue.extend({
    directives:{
        '1ocalDirective'：{}//可以采用驼峰式命名
    }
});
```
该指令就只能在当前组件内通过v-local-directive的方式调用,而无法被其他组件调用。

### 指令的定义对象
我们在注册指令的同时,可以传入definition定义对象,对指令赋予一些特殊的功能。这个定义对象主要包含三个钩子函数;bind、update和unbind。

bind：只被调用一次,在指令第一次绑定到元素上时调用。

update：指令在bind之后以初始值为参数进行第一次调用,之后每次当绑定值发生变化时调用,update 接收到的参数为new Value和oldValue unbind：指令从元素上解绑时调用,只调用一次。

这三个函数都是可选函数,但注册一个空指令肯定没有意义,来看下面这个例子,会使我们对整个指令周期有更明确的认识。
```js
<div v-if="isExist"v-my-directive="param"></div>
Vue.directive('my-directive',{
bind:function(){
    console.log('bind',arguments);
},
update:function(newValue,oldValue){
    console.log('update',newValue,oldValue)
),
unbind:function(){
    console.log('unbind',arguments);
}
})
var vm=new Vue({
    el:'#app',
    data:(
        param:'first',
        isExist:true
    )
})
```
另外,如果我们只需要使用update函数时,可以直接传入一个函数代替定义对象：
```js
Vue.directive('my-directive',function(value)(
//该函数即为update函数
));
```
上述例子中,可以使用my-directive指令绑定的值是data中的param属性。也可以直接绑定字符串常量,或使用字面修饰符,但这样的话需要注意update方法将只调用一次,因为普通字符串不能响应数据变化。例如：

```js
<div v-my-directive="constant string"/></div>//->value为undefined,因为data中没有对应的属性
<div v-my-direcitve="iconstant string'"></div>//->value 为constant string,绑定字符串需要加单引号
<div v-my-directive.literal="constant string"></div>
//->value为constant string,利用字面修饰符后无需使用单引号
```
除了字符串外,指令也能接受对象字面量或任意合法的JavaScript表达式。例如：
```js
<div v-my-directive="{title:'Vue.js',author:'You'}"></div>
<div v-my-directive="isExist？'yes'：'no'"></div>
//update Object ftitte:"Vwe.js",author:"You"}undefined update no undefined
```
注意此时对象字面量不需要用单引号括起来,这和字符串常量不一样。

### 指令实例属性
除了了解指令的生命周期外,还需要知道指令中能调用的相关属性,以便我们对相关DOM进行操作。在指令的钩子函数内,可以通过this来调用指令实例。下面就详细说明指令的实例属性。
- el：指令绑定的元素。
- vm：该指令的上下文ViewModel,可以为new Vue0的实例,也可以为组件实例。
- expression;指令的表达式,不包括参数和过滤器。
- arg：指令的参数。
- name：指令的名字,不包括v-前缀。
- modifiers：一个对象,包含指令的修饰符。
- descriptor：一个对象,包含指令的解析结果。
我们可以通过以下这个例子,更直观地了解到这些属性：

```js
<div v-my-msg:console.log="content"></div>
Vue.directive('my-msg',{
    bind:function(){
        console.log('~~bind-~');
        console.log('e1',this.el);
        console.log('name',this.name);
        console.log('vm',this.vm);
        console.log('expression',this.expression);
        console.log('arg',this.arg);
        console.log('modifiers',this.modifiers);
        console.log('descriptor',this.descriptor);
    },
    update: function(newValue, oldValue){
        var keys=Object.keys(this. modifiers); 
        window[this.arg][keys[0]](newValue);
    }, 
    unbind: function(){
    }
}); 
var vm = new Vue({
    el:'#app', 
    data:{
        content:'there is the content'
    }
});
```

## 指令的