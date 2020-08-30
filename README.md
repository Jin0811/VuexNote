# Vuex

## 1 介绍
vuex是实现组件全局状态（数据）管理的一种机制，可以方便地实现组件之间数据的共享

<br>

## 2 使用vuex统一管理状态的好处
- 能够在vuex当中集中管理共享的数据，易于开发和后期维护
- 能够高效地实现组件之间的数据共享，提高开发效率
- 存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

<br>

## 3 共享数据
一般情况下，只有组件之间共享的数据，才有必要存储到vuex当中，对于组件中的私有数据，依旧存储在组件自身的data中即可

<br>

## 4 vuex安装和基本使用
- 安装vuex：
```javaScript
npm install vuex --save
```
- 导入vuex：
```javaScript
import Vuex from 'vuex'
Vue.use(Vuex);
```
- 创建store对象
```javaScript
const store = new Vuex.Store({
    // state当中存放的就是全局共享的数据
    state: {
        count: 0
    }
});
```
- 将store对象挂载到vue实例中
```javaScript
new Vue({
    el: '#app',
    render: h => h(app),
    router,
    // 在这里挂载store之后，所有的组件就可以直接从store当中获取全局的数据了
    store
});
```
<br>

## 5 vuex的核心概念

### State
- state提供唯一的公共数据源，所有共享的数据都要统一放到store的state当中进行存储
    ```javascript
    // 创建store数据源，提供唯一公共数据
    const store = new Vuex.store({
        state: {
            count: 0
        }
    });
    ```
- 组件访问state中数据的方式
    ```javascript
    // 方式一：
    this.$store.state.全局数据名称

    // 方式二：
    // 从vuex当中按需导入mapState函数
    import { mapState } from 'vuex'
    // 通过刚才导入的mapState函数，将当前组件需求的全局数据映射为当前组件的computed计算属性
    computed: {
        ...mapState(['count']);
    }
    ```
### mutation
- mutation用于变更store当中的数据
  - 建议只通过mutation变更store当中的数据，不可以直接操作store中的数据
  - 通过这种方式虽然比较繁琐，但是可以集中监控所有数据的变化
- mutation的定义和触发
    ```javascript
    // 定义
    mutations: {
        add(state){
            // 变更状态
            // mutations当中的函数不支持异步操作
            state.count++
        }
    }

    // 触发mutation的第一种方式
    additionFun(){
        // 在触发commit时，也可以传递参数
        // add是在vuex的mutations当中定义的函数
        this.$store.commit('add', 5)
    }

    // 触发mutation的第二种方式:
    // 从vuex当中按需导入mapMutations函数
    import { mapMutations } from 'vuex'
    // 将指定的mutations函数，映射为当前组件的methods函数
    methods：{
        ...mapMutations(['add', 'addNum'])
    }
    ```
### Action
- Action用于处理异步任务，如果通过异步操作变更数据，必须通过Action，而不能使用Mutation，但是在Action中还是要通过触发Mutation的方式间接变更数据
    ```javascript
    actions: {
        addAsync(context){
            // 1秒钟之后再增加1
            setTimeout(() => {
                context.commit(add)
            }, 1000)
        }
    }
    ```
- 触发Action
    ```javascript
    // 触发方式一：
    methods: {
        fun(){
            // addAsync是vuex当中的actions定义的函数
            this.$store.dispatch('addAsync', 3)
        }
    }

    // 触发方式二
    // 与state和mutations相同，先按需导入mapActions
    // 再将需要的actions函数映射到methods当中
    import { mapActions } from 'vuex'
    methods：{
        ...mapActions(['addAsync', 'addNumAsync'])
    }
    ```
### Getter
- Getter用于对store当中的数据进行加工处理形成新的数据，类似于Vue的计算属性
- Getter不会修改store当中的数据
- store当中的数据发生变化之后，Getter的数据也会随之变化
- 定义Getter
    ```javascript
    getters: {
        showNum: state => {
            return `当前最新的数量是：${state.count}`
        }
    }
    ```
- 使用getter
    ```javascript
    // 方式一：
    this.$store.getters.名称

    // 方式二：
    // 按需导入mapGetters
    import { mapGetters } from 'vuex'
    // 在计算属性当中展开
    // showNum是vuex的getters当中定义的
    computed: {
        ...mapGetters(['showNum']);
    }
    ```
