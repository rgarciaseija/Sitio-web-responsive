// this has to be imported
import React from 'react';
// import the css file
import './Card.css';


class Card extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img atl={this.props.alt_description} src={this.props.urls.regular} />
                        </div>
                        <div className="flip-card-back">
                            <h4>{this.props.user.first_name}</h4>
                            <p>{this.props.alt_description}</p>
                            <p>{this.props.created_at}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;