import React from 'react';
import avatar from '../images/shrol_tetiana.jpg'
const CardShrol = () => {
    return (
        <div className='Card-Shrol'>
            <h3> <img src={avatar} alt="Фото студента" width="50" />  Tetiana Shrol (викладач) </h3>
            <p>Хобі: програмування, музика</p>
           
        </div>
    );
};
export default CardShrol;