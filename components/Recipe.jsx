import React from 'react';
import RecipeCategory from './RecipeCategory';
import RecipeTitle from './RecipeTitle';
import RecipeSocial from './RecipeSocial';
import RecipeDate from './RecipeDate';
import RecipeAuthor from './RecipeAuthor';
import RecipeRating from './RecipeRating';
import RecipeShopNear from './RecipeShopNear';
import RecipeCompletedPic from './RecipeCompletedPic';
import RecipeSpacer from './RecipeSpacer';
import RecipeDescription from './RecipeDescription';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';
import RecipeTips from './RecipeTips';
import RecipeNutrition from './RecipeNutrition';
import RecipeReviews from './RecipeReviews';
import RecipeAccredidation from './RecipeAccredidation';
import RecipeRelated from './RecipeRelated';

class Recipe extends React.Component {
    render() {
        const {accredidationSrc} = this.props;
        const {accredidationParagraph} = this.props;
        const {author} = this.props;
        const {bread1} = this.props;
        const {bread2} = this.props;
        const {bread3} = this.props;
        const {bread4} = this.props;
        const {completedPic} = this.props;
        const {date} = this.props;
        const {step1} = this.props;
        const {step2} = this.props;
        const {step3} = this.props;
        const {step4} = this.props;
        const {step5} = this.props;
        const {item1} = this.props;
        const {item2} = this.props;
        const {item3} = this.props;
        const {item4} = this.props;
        const {item5} = this.props;
        const {item6} = this.props;
        const {item7} = this.props;
        const {item8} = this.props;
        const {item9} = this.props;
        const {item10} = this.props;
        const {item11} = this.props;
        const {item12} = this.props;
        const {spacer} = this.props;
        const {title} = this.props;
        const {tip1} = this.props;
        const {tip2} = this.props;
        const {tip3} = this.props;
        const {description} = this.props;
        const {social1} = this.props;
        const {social2} = this.props;
        const {social3} = this.props;
        const {social4} = this.props;
        const {social5} = this.props;
        const {related1} = this.props;
        const {related2} = this.props;
        const {related3} = this.props;
        const {related1Title} = this.props;
        const {related2Title} = this.props;
        const {related3Title} = this.props;

        return (
            <div classname="recipeContainer">
                <RecipeCategory 
                    bread1={bread1} 
                    bread2={bread2} 
                    bread3={bread3} 
                    bread4={bread4} 
                />

                <RecipeTitle 
                    title={title}
                />

                <RecipeSocial 
                    social1={social1}
                    social2={social2}
                    social3={social3}
                    social4={social4}
                    social5={social5}
                />

                <RecipeDate 
                    date={date}
                />

                <RecipeAuthor 
                    author={author}
                />

                <RecipeRating />

                <RecipeShopNear />

                <RecipeCompletedPic 
                    completedPic={completedPic}
                />

                <RecipeSpacer 
                    spacer={spacer}
                />

                <RecipeDescription 
                    description={description}
                />

                <RecipeSpacer 
                    spacer={spacer}
                />

                <RecipeIngredients 
                    item1={item1}
                    item2={item2}
                    item3={item3}
                    item4={item4}
                    item5={item5}
                    item6={item6}
                    item7={item7}
                    item8={item8}
                    item9={item9}
                    item10={item10}
                    item11={item11}
                    item12={item12}
                />

                <RecipeSpacer 
                    spacer={spacer}
                />

                <RecipeDirections
                    step1={step1}
                    step2={step2}
                    step3={step3}
                    step4={step4}
                    step5={step5}
                 />

                <RecipeSpacer 
                    spacer={spacer}
                />

                <RecipeTips 
                    tip1 = {tip1}
                    tip2 = {tip2}
                    tip3 = {tip3}
                />

                <RecipeSpacer 
                    spacer={spacer}
                />

                <RecipeNutrition />

                <RecipeSpacer 
                    spacer={spacer}
                />

                <RecipeRelated 
                    related1={related1}
                    related2={related2}
                    related3={related3}
                    related1Title={related1Title}
                    related2Title={related2Title}
                    related3Title={related3Title}
                />

                <RecipeReviews />

                <RecipeAccredidation 
                    accredidationSrc={accredidationSrc} 
                    accredidationParagraph={accredidationParagraph}
                />



            </div>
        );
    }
}

export default Recipe;