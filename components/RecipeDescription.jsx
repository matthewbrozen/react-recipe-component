import React from 'react';


class RecipeDescription extends React.Component {
    render() {
        const {description} = this.props;
        return (
            <div>
                <div className="recipeDescription">
                    <p description={description}> {this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default RecipeDescription;