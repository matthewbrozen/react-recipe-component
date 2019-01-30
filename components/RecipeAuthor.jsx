import React from 'react';


class RecipeAuthor extends React.Component {
    render() {
        const {author} = this.props;
        return (
            <div>
                <div className="recipeAuthor">
                    <div><h5> by: </h5></div>
                    <div><h4 author={author}> { this.props.author }</h4></div>
                </div>
            </div>
        );
    }
}

export default RecipeAuthor;