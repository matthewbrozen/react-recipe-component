import React from 'react';


class RecipeSpacer extends React.Component {
    render() {
        const {spacer} = this.props;
        return (
            <div className="recipeSpacer">
                <img src={spacer} className="recipeSpacer-spacer"></img>
            </div>
        );
    }
}

export default RecipeSpacer;