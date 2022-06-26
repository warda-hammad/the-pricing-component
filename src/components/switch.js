import React ,{useState} from 'react'
import './switch.css'
const Switch = () => {
    const [istoggle, setistoggle] = useState(false);
    let thePrice = document.querySelectorAll('.price');
   if (document.getElementById('input')) {
    if(istoggle) {
        thePrice[0].textContent = "$199.99";
        thePrice[1].textContent = "$249.99";
        thePrice[2].textContent = "$399.99";
        
    } else {
        thePrice[0].textContent = "$19.99";
        thePrice[1].textContent = "$24.99";
        thePrice[2].textContent = "$39.99";
         
    }
   }
    return <label>
        <input id='input' type="checkbox" onChange={() => setistoggle(!istoggle)}/>
        <span></span>
    </label>
}

export default Switch
