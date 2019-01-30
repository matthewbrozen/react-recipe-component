import React from 'react';


class RecipeRating extends React.Component {
    render() {

        return (
            <div>
                <div className="recipeRating">
                    <form>
                        <input type="radio" name="optradio" checked />

                        <input type="radio" name="optradio" />

                        <input type="radio" name="optradio" />

                        <input type="radio" name="optradio" />

                        <input type="radio" name="optradio" />
                    </form>

                    <div>709 reviews</div>
                </div>
            </div>
        );
    }
}

export default RecipeRating;