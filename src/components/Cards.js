import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/41593.webp'
              text='Explore the most Interesting Menu Food'
              label='Cafe'
              path='/services'
            />
            <CardItem
              src='images/istockphoto-1323139676-170667a.jpg'
              text='Using Comfortable Meeting Rooms'
              label='Meeting Rooms'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/usaha-kecil-menengah-bidang-kuliner-1.jpg'
              text='Unique Stuff Can Grab From Here'
              label='UMKM'
              path='/service'
            />
            <CardItem
              src='images/photo-1471341971476-ae15ff5dd4ea.jpeg'
              text='spacious studio waiting for you to be creative'
              label='Studio'
              path='/products'
            />
            <CardItem
              src='images/photo-1414235077428-338989a2e8c0.jpeg'
              text='Nothing brings people together like good food'
              label='Restaurant'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
