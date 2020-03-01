import React, { Component } from 'react';
import { removeShoppingBagItemById, addPocketMoney } from '../Action';
import { connect } from 'react-redux';

class ShoppingBag extends Component {

    displayShoppingItems() {
        if (this.props.shoppingBag.length > 0) {
            return <ul className="list-group">
                {this.props.shoppingBag.map((item) => {
                    return <li className="list-group-item" key={item.id}
                        onClick={() => 
                        {
                            this.props.removeShoppingBagItemById(item.id);
                            this.props.addPocketMoney(item.cost);
                        }}>
                        <b>{item.name}</b> -
                    <span className="badge badge-info">$ {item.cost}</span> -
                    <span className="badge badge-warning">{item.calories} KCl</span> -
                    <span className="badge badge-primary">{item.weight} mg</span></li>
                })}
            </ul>
        }
        else {
            return <ul className="list-group">
                <li className="list-group-item">
                    <p className="text-center">No item added to the Bag!</p>
                </li>
            </ul>
        }
    }

    render() {
        return (
            <div className="col-md-4 shopping">
                <h3 className="text-center">Shopping Bag Items</h3>
                {this.displayShoppingItems()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps, { removeShoppingBagItemById,addPocketMoney })(ShoppingBag);