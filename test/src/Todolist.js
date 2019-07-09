import React from 'react';
import { connect } from 'react-redux';
import './fenge.css';


let List = class List extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    state = {
        list: this.props.list,
        all: '',
        can: '',
        nocan: '',
        active: 0,
        why: [{
            name: '全部',
            function: (index) => {
                let arr = this.props.list;
                console.log(arr);
                let newarr = [];
                arr = arr.map((items) => {
                    items.height = '60px';
                    items.opct = 1;
                    newarr.push(items);
                })
                this.setState({
                    list: this.props.list,
                    active: 0
                })
            }

        }, {
            name: '完成',
            function: (index) => {
                console.log(index)
                let arr = this.props.list;
                console.log(arr);
                let newarr = [];
                arr = arr.map((items) => {
                    if (items.check) {
                        items.height = '60px';
                        items.opct = 1;
                        newarr.push(items);
                    } else {
                        items.height = 0;
                        items.opct = 0;
                        newarr.push(items);
                    }
                })

                this.setState({
                    list: newarr,
                    active: 1
                })
            }

        }, {
            name: '未完成',
            function: (index) => {
                console.log(index)
                let arr = this.props.list;
                console.log(arr);
                let newarr = [];
                arr = arr.map((items) => {
                    if (!items.check) {
                        items.height = '60px';
                        items.opct = 1;
                        newarr.push(items);
                    } else {
                        items.height = '0';
                        items.opct = 0;
                        newarr.push(items);
                    }
                })
                this.setState({
                    list: newarr,
                    active: 2
                })
            }

        }]
    }

    // 点击删除
    setDelt(index) {
        let arr = this.props.list;
        console.log(arr);
        arr.splice(index, 1);
        this.setState({
            list: arr
        })
        console.log(index);
    }

    // 点击勾选
    setok(index) {
        let arr = this.props.list;
        // console.log(arr);
        arr[index].check = !arr[index].check;
        this.setState({
            list: arr
        })

    }

    render() {
        return (
            <div>
                <div className={'list'} >
                    <div className={'top'}>
                        <input type="value" style={{
                            width: "80%",
                            fontSize: '36px'
                        }} ref='values'  /> <input type='button' style={{
                            width: "20%"
                        }} value={'添加'} onClick={() => {
                            let data = this.refs.values.value;
                            if (data) {
                                let arr = this.props.list;
                                arr.unshift({ 'name': data, 'check': false, height: '60px', opct: '1' });
                                this.props.setlist(arr);
                                this.setState({
                                    list: this.props.list
                                })
                            } else {
                                this.refs.values.placeholder = '请输入您想输入的值'
                            }
                        }} />
                    </div>
                    <ul style={{
                        height: "500px",
                        width: "100%",
                        overflow: 'auto',
                    }} >
                        {
                            this.state.list.map((itme, index) => {
                                return (<li key={index} style={{
                                    width: "70%",
                                    height: itme.height,
                                    opacity: itme.opct,
                                    listStyle: "none",
                                    position: "relative",
                                }} className={'list_li'} >
                                    <input type='checkbox' checked={itme.check} onClick={this.setok.bind(this, index)} style={{
                                        width: '30px',
                                        height: "30px",
                                        marginRight: '60PX'
                                    }} />
                                    <span style={{
                                        textDecoration: itme.check ? 'line-through' : ''
                                    }}>
                                        {
                                            itme.name
                                        }
                                    </span>
                                    <span className={'look'} style={{
                                        transform: "rotateZ(45deg)",
                                        position: 'absolute',
                                        right: "0"
                                    }}
                                        onClick={this.setDelt.bind(this, index)}
                                    >+</span>
                                </li>)
                            })
                        }
                    </ul>
                    <hr style={{
                        border: '2px solid #999'
                    }} />
                    {
                        this.state.why.map((items, index) => {
                            return (<div key={index} style={{
                                background: this.state.active === index ? '#ccc' : '',
                            }} onClick={items.function.bind(this, index)} className={'theLast'}>{items.name}</div>)
                        })
                    }
                </div>
            </div>
        )
    }
}
// 建立组件与redux的关系
export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        setlist(arr) {
            dispatch({
                type: 'setlist',
                list: arr
            })
        }
    }
})(List) 