import React from 'react';


class RecipeCompletedPic extends React.Component {
    render() {
        const {completedPic} = this.props;
        return (
            <div className="recipeCompletedPic">
                <img src={completedPic} className="recipeCompletedPic-completedPic"></img>
            </div>
        );
    }
}

export default RecipeCompletedPic;