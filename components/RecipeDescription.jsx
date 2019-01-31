import React from 'react';


class RecipeDescription extends React.Component {
    render() {
        const {description} = this.props;
        return (
            <div className="recipeDescription">
                <p description={description} className="recipeDescription-description"> {this.props.description}</p>
            </div>
        );
    }
}

export default RecipeDescription;