import React from 'react';


class RecipeTips extends React.Component {
    render() {
        const {tip1} = this.props;
        const {tip2} = this.props;
        const {tip3} = this.props;
        return (
            <div>
                <div className="recipeTips">
                    <h4> Pro Tips:</h4>
                    <ol>
                        <li tip1={tip1}> {this.props.tip1} </li>
                        <li tip2={tip2}> {this.props.tip2}</li>
                        <li tip3={tip3}> {this.props.tip3}</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default RecipeTips;