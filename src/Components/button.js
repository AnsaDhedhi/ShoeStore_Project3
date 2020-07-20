import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

function Button() {
  // const Men = "Men"
  // const Women = "Women"
  // const Children = "Children"

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Link to="/product1/Men" >
            <img className="item" src="/Men.jpg" alt="Men" width="400px" height="350px" />

          </Link>
          <Carousel.Caption>
            <h3 style={{ color: "Crimson" }}>Men Collection</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/product1/Women"> 
          <img className="item" src="/women.jpg" alt="Women" width="400px" height="350px" />
          </Link>

          <Carousel.Caption>
          <h3 style={{ color: "Crimson" }}>Women Collection</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/product1/Children"> 
          <img className="item" src="/children.jpg" alt="Children" width="400px" height="350px" />
          </Link>
          <Carousel.Caption>
          <h3 style={{ color: "Crimson" }}>Children Collection</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr/>
		<hr/>
		<hr/>
    </div>

  );
}

export default Button;

