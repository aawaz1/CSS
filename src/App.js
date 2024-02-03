
import './App.css';
import { FaLock } from "react-icons/fa";

function App() {
  return (

    <div className='container'>
      <div className='container1'>
        <div className='div1'>
          <div className='navbar'>

            <span>flavo</span>
            <span>shop</span>
            <span>our story</span>
            <span>contact us</span>
            <span><FaLock /></span>
          </div>

         
       


        </div>
        <div className='div2'>
          <div className='content'>
            <div><h1>Discover</h1></div>
            <div><h1>New</h1></div>
            <div><h1>Taste</h1></div>
            <div className='spices'><h5>
              Original spice blends suitable for both home and professional cooking
              
              </h5></div>
              <div className='button'><h3>Shop All Products</h3></div>
          </div>
          <div className='image'>freff</div>
        </div>
        <div className='bar'>helllo</div>
        <div className='div3'>
          <div className='card'>
          <div className='name'><h1>
             COSINESS
            </h1></div>
            <div className='card-container'><img style={{width: "300px", height: "250px"}} src='https://m.media-amazon.com/images/I/612sEDQYP9L._SL1200_.jpg'/></div>
            <div className='adding'><span>+</span> <span>1</span><span></span>-</div>
            <div className='cart'>Add To Cart</div>
          </div>
          <div className='card'>
            <div className='name'><h1>
              INTENSITY
            </h1></div>
            <div className='card-container'><img style={{width: "300px", height: "250px"}} src='https://m.media-amazon.com/images/I/612sEDQYP9L._SL1200_.jpg'/></div>
            <div className='adding'><span>+</span> <span>1</span><span></span>-</div>
            <div className='cart'>Add To Cart</div>
          </div>
          <div className='card'>
            <div className='name'><h1>
              PASSION
            </h1></div>
            <div className='card-container'><img style={{width: "300px", height: "250px"}} src='https://m.media-amazon.com/images/I/612sEDQYP9L._SL1200_.jpg'/></div>
            <div className='adding'><span>+</span> <span>1</span><span></span>-</div>
            <div className='cart'>Add To Cart</div>
          </div>
         
        
        </div>



        

      




      </div>
    </div>



  );
}

export default App;
