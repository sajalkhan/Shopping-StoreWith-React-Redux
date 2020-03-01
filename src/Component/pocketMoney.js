import React, { Component } from 'react';
import {connect} from 'react-redux';

class pocketMoney extends Component {
    render() {
        return (
            <div className="col-md-12">
                <h4 className="text-center">You have 
                {(this.props.pocketMoney<0)?
                            <span className="badge badge-danger">${this.props.pocketMoney}</span>:
                            <span className="badge badge-success">${this.props.pocketMoney}</span>
                } 
                amount of money to spend on grocery today!</h4><br/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        pocketMoney: state.pocketMoney
    }
}

export default connect(mapStateToProps,null)(pocketMoney);