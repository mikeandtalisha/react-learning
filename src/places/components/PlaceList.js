import React from 'react';
import './PlaceList.css';
import PlaceItem from './PlaceItem';

const PlaceList = props => {
    if(props.items.length === 0){
        return (
            <div className="place-list center">
                <h2>No places found. Maybe create one?</h2>
                <button>Share Place</button>
            </div>
        );
    }
    return (
        <div className="place-list">
            <h2>Places</h2>
            <ul>
                {props.items.map((place, index) => (
                    <PlaceItem key={index}
                        id={place.id}
                        image={place.imageUrl}
                        title={place.title}
                        description={place.description}
                        address={place.address}
                        creatorId={place.creator}
                        coordinates={place.location} />
        
                ))}
            </ul>
        </div>
    );
};

export default PlaceList;