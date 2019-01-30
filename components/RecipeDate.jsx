import React from 'react';


class RecipeDate extends React.Component {
    render() {
        const {date} = this.props;
        return (
            <div>
                <div className="recipeDate">
                    <h5 date={date}> {this.props.date} </h5>
                </div>
            </div>
        );
    }
}

export default RecipeDate;