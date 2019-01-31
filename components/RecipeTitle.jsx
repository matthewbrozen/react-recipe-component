import React from 'react';


class RecipeCategory extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div className="recipeTitle">
                <h1 title={title} className="recipeTitle-title"> {this.props.title}</h1>
            </div>
        );
    }
}

export default RecipeCategory;