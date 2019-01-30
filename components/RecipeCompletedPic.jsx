import React from 'react';


class RecipeCompletedPic extends React.Component {
    render() {
        const {completedPic} = this.props;
        return (
            <div>
                <div className="recipeCompletedPic">
                    <img src={completedPic}></img>
                </div>
            </div>
        );
    }
}

export default RecipeCompletedPic;