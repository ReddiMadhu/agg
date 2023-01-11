import { useEffect } from 'react';
import CarType from '../components/CarType.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/mapp.module.css'

function Home() {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return (
    <div className={styles.container}>
      <CarType
        imgSrc="https://imgd.aeplcdn.com/1200x900/n/cw/ec/107539/exterior-right-front-three-quarter.jpeg?isig=0&q=75"
        imgAlt="Placeholder image"
        title="My Card Title"
        description="Some description text here"
      />
        <CarType
        imgSrc="https://imgd.aeplcdn.com/1200x900/n/cw/ec/107539/exterior-right-front-three-quarter.jpeg?isig=0&q=75"
        imgAlt="Placeholder image"
        title="My Card Title"
        description="Some description text here"
      />
        <CarType
        imgSrc="https://imgd.aeplcdn.com/1200x900/n/cw/ec/107539/exterior-right-front-three-quarter.jpeg?isig=0&q=75"
        imgAlt="Placeholder image"
        title="My Card Title"
        description="Some description text here"
      />
              <CarType
        imgSrc="https://imgd.aeplcdn.com/1200x900/n/cw/ec/107539/exterior-right-front-three-quarter.jpeg?isig=0&q=75"
        imgAlt="Placeholder image"
        title="My Card Title"
        description="Some description text here"
      />
    </div>
  );
}

export default Home;
