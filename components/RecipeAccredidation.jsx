import React from 'react';

class RecipeAccredidation extends React.Component {
    render() {
        const {accredidationSrc} = this.props;
        const {accredidationParagraph} = this.props;
        return (
            <div className="recipeAccredidation">
                <img src={accredidationSrc} className="recipeAccredidation-accredidationSrc"></img>
                <p accredidationParagraph={accredidationParagraph} className="recipeAccredidation-accredidationParagraph">{this.props.accredidationParagraph}</p>
            </div>
        );
    }
}

export default RecipeAccredidation;