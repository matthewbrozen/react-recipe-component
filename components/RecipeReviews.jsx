import React from 'react';


class RecipeReviews extends React.Component {
    render() {

        return (
            <div className="recipeReviews">
                <h3 className="recipeReviews-title"> Ratings & Reviews</h3>
                <h4 className="recipeReviews-subheader"> Reviews</h4>
                <p className="recipeReviews-dropdown"> Select a row below to filter reviews</p>
                <div className="recipeReviews-dropdown_rating"> ***** 800 Reviews</div>
                <input type='text' className="recipeReviews-input" />
                <button className="recipeReviews-button"> Write a review </button>
                <p className="recipeReviews-subtitle">Average Customer Ratings</p>
                <div className="recipeReviews-overall"> Overall **** 4.7</div>
                <p className="recipeReviews-displaying"> 1-8 of 709 Reviews</p>
                <p className="recipeReviews-sorted"> Sort by: Most Relevant</p>

                <div className="individualReview">
                    <img className="individualReview-author" src='https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg'></img>
                    <div className="individualReview-info"> **** Missdawney - 2 years ago</div>
                    <p className="individualReview-details">Hexagon 90's readymade, tofu vaporware yuccie semiotics fanny pack tattooed gentrify echo park mumblecore selvage hot chicken pickled. Cronut selfies next level palo santo 3 wolf moon lomo skateboard raw denim tilde keffiyeh synth williamsburg. Bushwick williamsburg tacos, quinoa raw denim +1 wayfarers thundercats semiotics lumbersexual before they sold out. </p>
                    <p className="individualReview-helpful"> Helpful? <button className="individualReview-yes">Yes</button> - 1 <button className="individualReview-no">No</button> - 0 Report</p>
                    <input type="text" className="individualReview-input" />
                    <button className="individualReview-comment"> Comment</button>
                </div>
            </div>
        );
    }
}

export default RecipeReviews;