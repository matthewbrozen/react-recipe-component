import React from 'react';


class RecipeTips extends React.Component {
    render() {
        const {tip1} = this.props;
        const {tip2} = this.props;
        const {tip3} = this.props;
        return (
            <div className="recipeTips">
                <h4 className="recipeTips-title"> Pro Tips:</h4>
                <ol className="recipeTips-list">
                    <li tip1={tip1} className="recipeTips-tip1"> {this.props.tip1} </li>
                    <li tip2={tip2} className="recipeTips-tip2"> {this.props.tip2}</li>
                    <li tip3={tip3} className="recipeTips-tip3"> {this.props.tip3}</li>
                </ol>
            </div>
        );
    }
}

export default RecipeTips;