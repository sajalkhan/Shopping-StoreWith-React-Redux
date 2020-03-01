import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addGroceryById,removePocketMoney} from '../Action';

class GroceryItem extends Component {
    render() {
        return (
            <div className="col-md-4 grocery">
                <h3 className="text-center">Grocery Items</h3>
                <ul className="list-group">
                    {this.props.grocery.map((item)=>{
                        return <li className="list-group-item" key={item.id} 
                            onClick={()=>
                                { this.props.addGroceryById(item.id);
                                  this.props.removePocketMoney(item.cost)
                                }
                            }>
                        <b>{item.name}</b> -  
                        <span className="badge badge-info">$ {item.cost}</span> - 
                        <span className="badge badge-warning">{item.calories} KCl</span> - 
                        <span className="badge badge-primary">{item.weight} mg</span></li>                       
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        grocery: state.grocery
    }
}

export default connect(mapStateToProps,{addGroceryById,removePocketMoney})(GroceryItem);