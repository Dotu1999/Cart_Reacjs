import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { seclectFood } from '../action';
class FoodList extends Component{
    creatFoodListItems(){
        let listItems = this.props.foods.map(
            (eachfood)=>{
                return(<li key={eachfood.id} onClick={
                    ()=>{this.props.seclectFood(eachfood)}
                }>Food 's name :{eachfood.name} </li>);
            }
            );
        return listItems
    }
    render(){
        // console.log(this.props.foods)
        return(
            <ul>
                {this.creatFoodListItems()}
            </ul>
        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({seclectFood:seclectFood},dispatch);
}
function mapStateToProps(state){
    return {
        foods:state.foods
    }
}
let FoodContainer  = connect(mapStateToProps,mapDispatchToProps)(FoodList);

export default FoodContainer;