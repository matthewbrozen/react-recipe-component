import React from 'react';


class RecipeIngredients extends React.Component {
    render() {
        const {item1} = this.props;
        const {item2} = this.props;
        const {item3} = this.props;
        const {item4} = this.props;
        const {item5} = this.props;
        const {item6} = this.props;
        const {item7} = this.props;
        const {item8} = this.props;
        const {item9} = this.props;
        const {item10} = this.props;
        const {item11} = this.props;
        const {item12} = this.props;
        return (
            <div>
                <div className="recipeIngredients">
                    <h2> What You Need</h2>
                    <ul>
                        <li item1={item1}>{this.props.item1}</li>
                        <li item2={item2}>{this.props.item2}</li>
                        <li item3={item3}>{this.props.item3}</li>
                        <li item4={item4}>{this.props.item4}</li>
                        <li item5={item5}>{this.props.item5}</li>
                        <li item6={item6}>{this.props.item6}</li>
                    </ul>
                    <ul>
                        <li item7={item7}>{this.props.item7}</li>
                        <li item8={item8}>{this.props.item8}</li>
                        <li item9={item9}>{this.props.item9}</li>
                        <li item10={item10}>{this.props.item10}</li>
                        <li item11={item11}>{this.props.item11}</li>
                        <li item12={item12}>{this.props.item12}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RecipeIngredients;