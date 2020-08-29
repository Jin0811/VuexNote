# vuex_demo

## vuex的核心概念

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
