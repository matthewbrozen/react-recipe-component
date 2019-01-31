import React from 'react';


class RecipeShopNear extends React.Component {
    render() {

        return (
            <div className="recipeShopNear">
                <h3 className="recipeShopNear-title"> BUY INGREDIENTS ONLINE</h3>
                <h4 className="recipeShopNear-price">$1.62 per serving</h4>
                <h4 className="recipeShopNear-address">90064, Los Angeles, California CHANGE</h4>
                <button className="recipeShopNear-affiliate"> Shop at Walmart</button>
            </div>
        );
    }
}

export default RecipeShopNear;