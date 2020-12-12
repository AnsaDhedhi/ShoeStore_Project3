import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';

function Button() {
  // const Men = "Men"
  // const Women = "Women"
  // const Children = "Children"
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={500}>
          <Link to="/product1/Men" >
            <img className="item" src="/Men.jpg" alt="Men" width="400px" height="350px" />

          </Link>
          <Carousel.Caption>
            <h3 style={{ color: "Crimson" }}>Men Shoe Collection</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to="/product1/Women">
            <img className="item" src="/women.jpg" alt="Women" width="400px" height="350px" />
          </Link>

          <Carousel.Caption>
            <h3 style={{ color: "Crimson" }}>Women Shoe Collection</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/product1/Children">
            <img className="item" src="/children.jpg" alt="Children" width="400px" height="350px" />
          </Link>
          <Carousel.Caption>
            <h3 style={{ color: "Crimson" }}>Children Shoe Collection</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
      <hr />
      <hr />
    </div>

  );
}

export default Button;

