# Redux三大核心
## 单一数据源
整个应用的state被存储在一颗object tree中, 并且这个 object tree 只存在于唯一一个store中

## state是只读的
唯一改变 **state** 的方法就是要触发action。 这个 **action** 是一个用于描述已发生事件的普通对象,类似于 vuex 的 mutation

## 使用纯函数执行修改
为了描述 action 如何改变 state tree, 需要编写一个reducers
+ Reducers 只是一些纯函数(输入参数, 返回一个对象的函数), 它接收先前的 state 和 action, 并且返回新的 state, 可以复用、 可以控制顺序、 传入附加参数

## 只要 store.dispatch(action), 就会触发绑定的reducer

# react-redux
## Provider
+ Provider **包裹** 在根组件最外层, 使所有的子组件都可以拿到 State
+ Provider 接收 **store** 作为 **props**, 然后通过 context 往下传递, 这样 react 中任何组件都可以通过 context 获取到store

## connect
+ Provider 内部组件如果想要使用到 state 中的数据, 就必须要 connect 进行一层包裹封装, 换一句话来说就是必须要被 connect 进行加强
+ connect 就是方便我们组件能够获取到 store 中的 state

### connect(...)(Component)
#### connect函数第一次执行内部有四个参数, 返回的也是函数, 再一次执行传入需要加强(获取顶级数据store)的组件
#### 参数
+ mapStateToProps(state, ownProps) 这个函数允许我们将store中的数据作为props绑定到组件上 
    - state: redux 中的 store 
    - ownProps: 自己的store
+ mapDispatchToProps(dispatch, ownProps) 将action作为props绑定到我们自己的函数中
    - dispatch 就是 store.dispatch
    - ownProps 自己的props
+ mergeProps(stateProps, dispatchProps, ownProps) 不管是 stateProps 还是 dispatchProps, 都需要和 ownProps merge之后才会被赋值给组件。通常情况下可以不传这个参数, connect 就会使用Object.assign替代该方法
+ options 定制connector行为