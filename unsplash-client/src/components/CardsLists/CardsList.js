import React from 'react';
import Card from '../Cards/Card';
import './CardsList'

const CardsList = (props) => (
    <div className="row">
        {props.returnedImages.map(img => <Card key={img.id} {...img} />)}
    </div>
);

export default CardsList;