// import React, { useState } from 'react';
// import './Countbill.css';
// import CountbillData from './CountbillData';
// import { SlBookOpen } from 'react-icons/sl';
// import { AiOutlineClockCircle } from 'react-icons/ai';
// import {TbClockExclamation} from 'react-icons/tb';
// import LiveImage from '../project/icon/live.png';
// import ScholoImage from '../project/icon/scholo.png';
// import Ads from '../project/icon/ads.png'
// const Countbill = () => {


//   const totalSubscriptionPrice = 18500;
//   const lessPrice = 179;

//   const [selected, setSelected] = useState(false);

//   const handleRadioChange = (event) => {
//     setSelected(event.target.checked);
//   };
//   return (
//     <div>
//       <nav className='nav'>  </nav>
//       <div className='background'>  Hello Baby</div>
//       <div className='Accesdetail'>
//         <div>
//           <h1>Access curated courses worth</h1>
//           <h1>₹<s className='strike'> 18,500</s> at just ₹ 99 per year!</h1>
//         </div>
//         <div className='Book1'> <SlBookOpen className='Book' /><span class="blue-text">100+</span> <span class="white-text">Job relevant courses</span>
//         </div>

//         <div className="Book2">
//           <AiOutlineClockCircle className='Book' /><span class="blue-text">20,000+</span> <span class="white-text">Hours of content</span>
//         </div>
//         <div className='Book3'>
//           <div className='livetv'> <img src={LiveImage} alt="Live" /><span class="blue-text">Exclusive</span> <span class="white-text">webinar access</span> </div>
//         </div>
//         <div className='Book4'>
//           <div className='livetv'> <img src={ScholoImage} alt="scholo" /><span class="blue-text">Scholarship worth</span> <span class="white-text">₹94,500</span> </div>
//         </div>
//         <div className='Book5'>
//           <div className='livetv'> <img src={Ads} alt="ads" /> <span class="blue-text">Ad Free</span> <span class="white-text">learning experience</span></div>
//         </div>
//       </div>
//       <div className='scholorshipPlan'>
//         <div>
//           <button className='button1'>1</button><p className='para'> Sign Up</p>
//         </div>
//         <div>
//           <button className='button2'>2</button><p className='para1'> Subscribe</p>
//         </div>
//         <div className='planheading'> <h3> Select your subcription plan </h3> </div>
//         <div>
//         {CountbillData.map((plan, index) => (
//           <div className="subscription-container" key={index}>
//             <div className="subscription-plan">
//               {/* <h3>12 Months Subscription</h3>
//                 <p>Total ₹179</p>
//                 <p>₹15/mon</p> */}
//               <input
//                 type="radio"
//                 name="subscription"
//                 id="subscription-radio"
//                 checked={selected}
//                 onChange={handleRadioChange}
//                 className={`check ${selected ? 'selected' : ''}`}
//               />
//               <h4 className='Months'>{plan.month}</h4><p className='parag'>Total ₹{plan.totalfe}</p><p className='parag1'>₹8/mon</p>
//               {/* <label htmlFor="subscription-radio">Select</label> */}

//             </div>
//           </div>
//           ))}


//           <div>
//             <hr />
//             <div className='SubscrptionFee'><p>Subscrption Fee</p><p className='Fee'>₹18,500</p>  </div>
//           </div>
//           <div className='Limitoffer'>
//           <span> Limited time offer</span><span className='LimitofferPrice'> -₹{selected ? totalSubscriptionPrice - lessPrice : totalSubscriptionPrice}</span>
//           <TbClockExclamation className='LimitofferClock'/> <span className='Offervaild'> Offer valid till 25th July 2023 </span>
//           </div>
//           <div className='GST'>
//             <span>Total (Incl. of 18% GST)</span><span className='gstprice'>₹ 149</span>


//           </div>
//           <div className={`total-price ${selected ? 'selected' : ''}`}>
//             <h3>Total Subscription Price</h3>
//             <p>₹{selected ? totalSubscriptionPrice - lessPrice : totalSubscriptionPrice}</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Countbill;



import React, { useState } from 'react';
import './Countbill.css';

import CountbillData from './CountbillData';
import {AiOutlineSearch} from 'react-icons/ai';
import { SlBookOpen } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { TbClockExclamation } from 'react-icons/tb';
import LiveImage from '../project/icon/live.png';
import ScholoImage from '../project/icon/scholo.png';
import Razpay from '../project/icon/razpay.png'
import Ads from '../project/icon/ads.png';
import EDYODA from '../project/icon/EDYODA.png'

const Countbill = () => {
  const totalSubscriptionPrice = 18500;
  const gstRate = 18;

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selected, setSelected] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedPlan(CountbillData.find((plan) => plan.month === event.target.value));
    setSelected(event.target.checked);
  };

  const calculateDiscountedPrice = () => {
    if (selectedPlan) {
      return totalSubscriptionPrice - parseInt(selectedPlan.totalfe);
    }
    return totalSubscriptionPrice;
  };

  const calculateTotalPriceWithGST = () => {
    const discountedPrice = calculateDiscountedPrice();
    return  discountedPrice;
  };

  return (
    <div>
      <nav className='nav'>
        <img  src={EDYODA} />
        <div className='courses'>
        
        <div className="dropdown">
         <span className='v'>Courses</span><span> v</span> <i className="fa fa-caret-down"></i>
         
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
</div>
<div className='Programs'>
<div className="dropdown">
         <span className='v'>Programs</span><span> v</span> <i className="fa fa-caret-down"></i>
         
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        </div>
        <AiOutlineSearch className='search'/>
       <span className='log'>Log in</span>

       <button className='joinnow'>JOIN NOW</button>
       
        
          </nav>
      <div className='background'></div>
      <div className='Accesdetail'>
        <div>
          <h1>Access curated courses worth</h1>
          <h1>₹<s className='strike'> 18,500</s> at just ₹ 99 per year!</h1>
        </div>
        <div className='Book1'> <SlBookOpen className='Book' /><span class="blue-text">100+</span> <span class="white-text">Job relevant courses</span>
        </div>

        <div className="Book2">
          <AiOutlineClockCircle className='Book' /><span class="blue-text">20,000+</span> <span class="white-text">Hours of content</span>
        </div>
        <div className='Book3'>
          <div className='livetv'> <img src={LiveImage} alt="Live" /><span class="blue-text">Exclusive</span> <span class="white-text">webinar access</span> </div>
        </div>
        <div className='Book4'>
          <div className='livetv'> <img src={ScholoImage} alt="scholo" /><span class="blue-text">Scholarship worth</span> <span class="white-text">₹94,500</span> </div>
        </div>
        <div className='Book5'>
          <div className='livetv'> <img src={Ads} alt="ads" /> <span class="blue-text">Ad Free</span> <span class="white-text">learning experience</span></div>
        </div>
      </div>
      <div className='scholorshipPlan'>
        <div>
          <button className='button1'>1</button><p className='para'> Sign Up</p>
        </div>
        <div>
          <button className='button2'>2</button><p className='para1'> Subscribe</p>
        </div>
        <div className='planheading'> <h3> Select your subscription plan </h3> </div>
        <div>
          
          {CountbillData.map((plan, index) => (
            <div className={`subscription-container ${index === 0 ? 'blocked' : ''}`} key={index + 1}>
             
              <div className="subscription-plan">
                <input
                  type="radio"
                  name="subscription"
                  id={`subscription-radio-${index}`}
                  value={plan.month}
                  checked={selectedPlan === plan}
                  onChange={handleRadioChange}
                  className={`check ${selectedPlan === plan ? 'selected' : ''}`}
                />
                <h4 className='Months'>{plan.month}</h4><p className='parag'>Total ₹{plan.totalfe}</p><p className='parag1'>₹{plan.eachmonth}/mon</p>
              </div>
            </div>
          ))}
        </div>
      
      <div>

        <hr />
        <div className='SubscrptionFee'><p>Subscription Fee</p><p className='Fee'>₹{totalSubscriptionPrice}</p>  </div>
      </div>
      <div className='Limitoffer'>
        <span>Limited time offer</span><span className='LimitofferPrice'> -₹{calculateDiscountedPrice()}</span>
        <TbClockExclamation className='LimitofferClock' /><span className='Offervaild'>Offer valid till 25th July 2023</span>
      </div>
      <div className='GST'>
        <span>Total (Incl. of 18% GST)</span><span className='gstprice'>₹ {selectedPlan ? selectedPlan.totalfe : 0}</span>
      </div>
      <div className='buttonofpay'>
      <button className='cancle'>CANCLE</button>
      <button className='procedtopay'>PROCEED TO PAY</button>
      </div>
      <img src={Razpay} alt="scholo" className='razpay' />
      </div>
    </div>
  );
};

export default Countbill;


