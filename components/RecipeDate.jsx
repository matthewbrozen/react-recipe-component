import React from 'react';


class RecipeDate extends React.Component {
    render() {
        const {date} = this.props;
        return (
            <div className="recipeDate">
                <h5 date={date} className="recipeDate-date"> {this.props.date} </h5>
            </div>
        );
    }
}

export default RecipeDate;