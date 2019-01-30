import React from 'react';


class RecipeSpacer extends React.Component {
    render() {
        const {spacer} = this.props;
        return (
            <div>
                <div className="recipeSpacer">
                    <img src={spacer}></img>
                </div>
            </div>
        );
    }
}

export default RecipeSpacer;