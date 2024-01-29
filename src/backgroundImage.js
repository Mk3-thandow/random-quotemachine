import React from 'react';
import paris from './monuments-pics/Paris.jpg';
import './backgroundImage.css';

const BackgroundImage = ({ children }) => (
  <div className="background-image" style={{ backgroundImage: `url(${paris})` }}>
    {children}
  </div>
);

export default BackgroundImage;