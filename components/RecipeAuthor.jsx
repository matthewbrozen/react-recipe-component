import React from 'react';


class RecipeAuthor extends React.Component {
    render() {
        const {author} = this.props;
        return (
            <div className="recipeAuthor">
                <h5 className="recipeAuthor-by"> Recipe by: </h5>
                <h4 author={author} className="recipeAuthor-author"> { this.props.author }</h4>
            </div>
        );
    }
}

export default RecipeAuthor;