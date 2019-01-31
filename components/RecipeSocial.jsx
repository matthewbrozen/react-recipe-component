import React from 'react';


class RecipeSocial extends React.Component {
    render() {
        const {social1} = this.props;
        const {social2} = this.props;
        const {social3} = this.props;
        const {social4} = this.props;
        const {social5} = this.props;
        return (
            <div className="recipeSocial">
                <button social1={social1} className="recipeSocial-social1">{this.props.social1}</button>
                <button social2={social2} className="recipeSocial-social2">{this.props.social2}</button>
                <button social3={social3} className="recipeSocial-social3">{this.props.social3}</button>
                <button social4={social4} className="recipeSocial-social4">{this.props.social4}</button>
                <button social5={social5} className="recipeSocial-social5">{this.props.social5}</button>
            </div>
        );
    }
}

export default RecipeSocial;