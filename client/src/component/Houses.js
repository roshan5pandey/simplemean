import React,{useState,useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Phone() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    
    useEffect(() => {
      fetch("http://localhost:3000/Houses")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
         
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
         

            <div class="row">
    <div class="col-sm-2" id="roshan">
    {items.map(item => (
    <li key={item.id}>
              {item.name} 
            </li>
            ))}
    </div>
    <div class="col-sm-10">
    


   <div className="carousel-wrapper">
      <Carousel>
      {items.map(item => (
        <div>
        <img src={item.path}  id="pic"/>
        </div>
        ))}
      </Carousel>
    </div>



    </div>
  </div>
            
          
          </div>
      );
    }
}

export default Phone
