import React, { Component } from 'react';
import {connect} from 'react-redux';

class Stats extends Component {
    cost(){
        let total = 0;
        this.props.shoppingBag.map((item)=> total+=item.cost);
        return total;
    }

    calories(){
        let total = 0;
        this.props.shoppingBag.map((item)=> total+=item.calories);
        return total;
    }

    weight(){
        let total = 0;
        this.props.shoppingBag.map((item)=> total+=item.weight);
        return total;
    }

    render() {
        return (
            <div className="col-md-3 stats">
                <h3 className="text-center">Stats</h3>
                <ul className="list-group">
                    <li className="list-group-item">Cost - ${this.cost()}</li>
                    <li className="list-group-item">calories - {this.calories()} KCl </li>
                    <li className="list-group-item">weight - {this.weight()} mg</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps,null)(Stats);