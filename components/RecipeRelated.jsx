import React from 'react';


class RecipeRelated extends React.Component {
    render() {

        const {related1} = this.props;
        const {related2} = this.props;
        const {related3} = this.props;
        const {related1Title} = this.props;
        const {related2Title} = this.props;
        const {related3Title} = this.props;

        return (
            <div className="recipeRelated">
                <h4 className="recipeRelated-title"> Similar Recipes</h4>
                <div className="recipeRelated-related1">
                    <img className="recipeRelated-related1_image" src={related1}></img>
                    <h5 related1Title={related1Title} className="recipeRelated-related1_title"> {this.props.related1Title}</h5>
                    <div className="recipeRelated-related1_rating"> ***** 800 Reviews</div>
                </div>
                <div className="recipeRelated-related2">
                    <img className="recipeRelated-related2_image" src={related2}></img>
                    <h5 related2Title={related2Title} className="recipeRelated-related2_title"> {this.props.related2Title}</h5>
                    <div className="recipeRelated-related2_rating"> ***** 800 Reviews</div>
                </div>
                <div className="recipeRelated-related3">
                    <img className="recipeRelated-related3_image" src={related3}></img>
                    <h5 related3Title={related3Title} className="recipeRelated-related3_title"> {this.props.related3Title}</h5>
                    <div className="recipeRelated-related3_rating"> ***** 800 Reviews</div>
                </div>
            </div>
        );
    }
}

export default RecipeRelated;