import React from 'react';

class RecipeAccredidation extends React.Component {
    render() {
        const {accredidationSrc} = this.props;
        const {accredidationParagraph} = this.props;
        return (
            <div>
                <div className="recipeAccredidation">
                    <img src={accredidationSrc}></img>
                    <p accredidationParagraph={accredidationParagraph}>{this.props.accredidationParagraph}</p>
                </div>
            </div>
        );
    }
}

export default RecipeAccredidation;