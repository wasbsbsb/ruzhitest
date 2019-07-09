import React from 'react';
import { connect } from 'react-redux';

let Login = class Login extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        return (
            <div>
                {/* 修改的时候变动值 */}
                <input type='text' ref='user' onChange={() => {
                    this.props.setname(this.refs.user.value)
                }} />
                {/* 提交数值 */}
                <input type='button' value="提交" onClick={
                    () => {
                        this.props.search(this.refs.user.value)
                    }
                } />
                {/* 获取redux的值 */}
                <input type="text" defaultValue={this.props.zlc} />

                <div>  </div>
            </div>
        )
    }

}
// 建立组件与redux的关系
export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        setname(str) {
            dispatch({
                type: 'setname',
                zlc: str
            })
        }
    }
})(Login) 