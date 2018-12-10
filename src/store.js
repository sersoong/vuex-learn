import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/// 状态，保存数据
const state = {
    count: 0
}

/// 定义改变过程，如何改变状态
const mutations = {
    increment (state) {
        state.count++
    },
    decrement (state) {
        state.count--
    },
    add2 (state) {
        state.count = state.count + 2
    }
}

/// 动作，提交commit（要走哪个过程）
const actions = {
    increment: ({
        commit
    }) => commit('increment'),
    decrement: ({
        commit
    }) => commit('decrement'),
    incrementIfOdd ({
        commit,
        state
    }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync ({
        commit
    }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('add2')
                resolve()
            }, 1000)
        })
    }
}

/// 获取？
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
