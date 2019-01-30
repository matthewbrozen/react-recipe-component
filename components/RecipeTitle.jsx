import React from 'react';


class RecipeCategory extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div>
                <div className="recipeTitle">
                    <h1 title={title}> {this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default RecipeCategory;