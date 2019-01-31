import React from 'react';


class RecipeRating extends React.Component {
    render() {

        return (
            <div className="recipeRating">
                <form className="recipeRating-form">
                    <input type="radio" className="recipeRating-form_input1" name="optradio" checked />

                    <input type="radio" className="recipeRating-form_input2" name="optradio" />

                    <input type="radio" className="recipeRating-form_input3" name="optradio" />

                    <input type="radio" className="recipeRating-form_input4" name="optradio" />

                    <input type="radio" className="recipeRating-form_input5" name="optradio" />
                </form>

                <div className="recipeRating-form_numberOfreivews">709 reviews</div>
            </div>
        );
    }
}

export default RecipeRating;