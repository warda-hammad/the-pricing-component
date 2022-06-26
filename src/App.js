import React  from 'react'
import './App.css';
import Switch from './components/switch'
function App() {
  return (
   <div className="app">
     <div className="head">
        <h1>Our Pricing</h1>
        <span className='plan-price'>Annually</span>
        <Switch />
        <span className='plan-price'>Monthly</span>
     </div>
     <div className="cards">
        <div className="card one">
        <div className="title">Basic</div>
        <div className="price">$19.99</div> {/*$199.99*/}
        <div className="paragraph">
        <p>500 GB Storage</p> 
        <p className='re-border'>2 Users Allowed</p> 
        <p>Send up to 3 GB</p> 
        </div>
        <button>Learn More</button>
        </div>
        <div className="card two active">
        <div className="title">Professional</div>
        <div className="price">$24.99</div>  {/* $249.99*/}
        <div className="paragraph">
        <p>1 TB Storage</p> 
        <p className='re-border'>5 Users Allowed</p> 
        <p>Send up to 10 GB</p> 
        </div>
        <button>Learn More</button>
        </div>
        <div className="card three">
        <div className="title">Master</div>
        <div className="price">$39.99</div> {/* $399.99*/}
        <div className="paragraph">
        <p>2 TB Storage</p> 
        <p className='re-border'>10 Users Allowed</p> 
        <p>Send up to 20 GB</p> 
        </div>
        <button>Learn More</button>
        </div>
     </div>
   </div>
  );
}

export default App;
