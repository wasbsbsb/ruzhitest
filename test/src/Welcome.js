import React from 'react';
import { connect } from 'react-redux';

let Welcome = class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        return (
            <div style={{
                fontSize: '36px',
                textAlign: 'center',
                width: "300px",
                height: "100px",
                position: 'absolute',
                bottom: '-160px'
            }}>
                Welcome here
            </div>
        )
    }

}
// 建立组件与redux的关系
export default connect((state) => {
    return state
}, (dispatch) => {
    return {

    }
})(Welcome) 