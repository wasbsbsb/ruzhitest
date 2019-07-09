import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// 引入redux的核心文件
import { createStore } from 'redux';
// 提供对react支持的库；
import { Provider } from 'react-redux';
// createstore是创建一个存放的仓库
import Login from './Login'


// 创建一个store
let store = createStore(
    (state = {
        zlc: '',
        search: (data) => {
            axios.post('http://wasbsbsb.cn:3000/requer', `last=${data}`)
                .then(function (response) {
                    console.log(`发送后台返回的数据：${response.data}`);
                })
                .catch(function (error) {
                    console.log(error);
             })
        },
    }, action) => {
        switch (action.type) {
            case 'setname':
                return {
                    ...state,
                    zlc: action.zlc
                }
            case 'getName':
                return state.zlc
            default:
                return state
        }
    })


ReactDOM.render(
    <Provider store={store}>
        <Login />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
