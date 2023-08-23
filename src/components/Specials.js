import React from 'react';
import lemon from '../images/lemon-dessert1.jpg';
import greek from '../images/greek-salad1.jpg';
import bruchetta from '../images/bruchetta.png';

function Specials () {
  return (
    <>
    <div className='specials'>
    <div className="special-title">
            <h1>This weeks specials!</h1>
    </div>
    <div className='card-container'>
        <div className="card">
            <div className="card-body">
                <img 
                    src={lemon} 
                    className ="special-img"
                    alt='Lemon Dessert Special'/>
                <h2 className="card-title">Lemon Dessert</h2>
                <p className="card-description">A classic layered Lemon cake with custard filling.</p>
            </div>
            <button className='card-btn'>Order Online</button>
        </div>
        <div className="card">
        <div className="card-body">
            <img
                src={greek}
                className='Greek Salad Special'
                alt='special-img' />
            <h2 className="card-title">Greek Salad</h2>
            <p className="card-description">Lettuce, peppers, olives and feta cheese.</p>
        </div>
        <button className='card-btn'>Order Online</button>
        </div>
        <div className="card">
        <div className="card-body">
            <img
                src={bruchetta}
                className='Bruchetta Special'
                alt='special-img' />
            <h2 className="card-title">Bruchetta</h2>
            <p className="card-description">Bread with olive oil and vegetables.</p>
        </div>
        <button className='card-btn'>Order Online</button>
        </div>
    </div>
    </div>
</>
  );
}

export default Specials;