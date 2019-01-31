import React from 'react';


class RecipeCategory extends React.Component {
    render() {
        const {bread1} = this.props;
        const {bread2} = this.props;
        const {bread3} = this.props;
        const {bread4} = this.props;
        return (
            <div className="recipeCategory">
                <div bread1={bread1} className="recipeCategory-bread1">{ this.props.bread1 }</div>
                <div className="recipeCategory-firstDivider">></div>
                <div bread2={bread2} className="recipeCategory-bread2">{ this.props.bread2 }</div>
                <div className="recipeCategory-secondDivider">></div>
                <div bread3={bread3} className="recipeCategory-bread3">{ this.props.bread3 }</div>
                <div className="recipeCategory-thirdDivider">></div>
                <div bread4={bread4} className="recipeCategory-bread4">{ this.props.bread4 }</div>
            </div>
        );
    }
}

export default RecipeCategory;