import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    { id: 'p1', title: 'Shelf Road', description: 'One of the most famous sky scrapers in the world!', imageUrl: 'https://www.paradoxsports.org/wp-content/uploads/2021/09/shelf-1024x683.jpg', address: '20 W 34th St, New York, NY 10118, United States', location: { lat: 40.7484405, lng: -73.9878531 }, creator: '1' },
    { id: 'p2', title: 'Shanahan Crag', description: 'One of the most famous sky scrapers in the world!', imageUrl: 'https://mountainproject.com/assets/photos/climb/105839255_medium_1557862056.jpg?cache=1701314709', address: '20 W 34th St, New York, NY 10118, United States', location: { lat: 40.7484405, lng: -73.9878531 }, creator: '2' },
    { id: 'p3', title: 'Clear Creek Canyon', description: 'One of the most famous sky scrapers in the world!', imageUrl: 'https://57hours.com/wp-content/uploads/2021/05/Laura-Capps-on-Mighty-Dog-5.12c-in-Clear-Creek-Canyon-photo-Kevin-Capps-888x592.jpg', address: '20 W 34th St, New York, NY 10118, United States', location: { lat: 40.7484405, lng: -73.9878531 }, creator: '3' }
    
];
function UserPlaces() {
    const { userId } = useParams();
    console.log("userId from URL: " + userId);
    
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={ loadedPlaces } />
    );
};

export default UserPlaces;