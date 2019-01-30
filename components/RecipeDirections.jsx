import React from 'react';


class RecipeDirections extends React.Component {
    render() {
        const {step1} = this.props;
        const {step2} = this.props;
        const {step3} = this.props;
        const {step4} = this.props;
        const {step5} = this.props;
        return (
            <div>
                <div className="recipeDirections">
                    <h2> Let's Make It </h2>
                    <ul>
                        <li step1={step1}>{this.props.step1}</li>
                        <li step2={step2}>{this.props.step2}</li>
                        <li step3={step3}>{this.props.step3}</li>
                        <li step4={step4}>{this.props.step4}</li>
                        <li step5={step5}>{this.props.step5}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RecipeDirections;