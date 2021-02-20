import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

const Featured = (props) => {

  const display = props.articles.map((story) => {
    return <div className = "feature-text" key={story.id}>


      <Link to={'/articles/' + story.id}>

      <img src={story.media} alt={story.title}/>
      <h2>{story.title}</h2>
      <p>{story.summary}</p>

    </Link>
    </div>
  })

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    slide: true

  }

  return (
    <div
      className="slider_wrapper"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '700px',
        height: '500px'
      }}
    >

      <Slider {...settings}>
        <div>
          {display[0]}
        </div>

        <div>
          {display[5]}
        </div>

        <div>
          {display[10]}
        </div>

        <div>
          {display[15]}
        </div>

        <div>
          {display[20]}
        </div>
      </Slider>
    </div>
  )

}

export default Featured;
