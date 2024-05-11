
import React from 'react';
import './index.css'
export default function Contact() {
  return (
    <div className="main-container">
        <div className="contact-container">
        <h1 className='contact-heading'>Enter your details we will reach you...</h1>
        <div className='name-designation'>
            <select className='designation'>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
            </select>
            <input type="text" id="inputName" placeholder='Enter your name'/>
        </div>
      <div>
          <input type="text" id="inputAddress" placeholder='Enter your Village'/>
      </div>
      <div>
          <input type="text" id="inputCity" aria-label="City" placeholder='Enter your city'/>
      </div>
      <div>
          <input type="text" id="inputZip" placeholder='Enter your Postalcode'/>
      </div>

      <div>
          <input type="text" id="inputState" placeholder='Enter your state'/>
      </div>

      <div>
        <select className="inputCountry" aria-label="Country select">
      <option value="" selected>Select The Country</option>
      <option value="IND">India</option>
      <option value="AL">Albania</option>
      <option value="DZ">Algeria</option>
      <option value="AD">Andorra</option>
      <option value="AO">Angola</option>
      <option value="AG">Antigua and Barbuda</option>
      <option value="AR">Argentina</option>
      <option value="AM">Armenia</option>
      <option value="AU">Australia</option>
      <option value="AT">Austria</option>
      <option value="AZ">Azerbaijan</option>
      <option value="BS">Bahamas</option>
      <option value="BH">Bahrain</option>
      <option value="BD">Bangladesh</option>
      <option value="BB">Barbados</option>
      <option value="BY">Belarus</option>
      <option value="BE">Belgium</option>
      <option value="BZ">Belize</option>
      <option value="BJ">Benin</option>
      <option value="BT">Bhutan</option>
    </select>
      </div>

      <div className='mobileNumber'>
        <select className="inputPhoneCountryCode" aria-label="Phone Country Code">
        <option value="+1">(+1)</option>
        <option value="+44">(+44)</option>
        <option value="+91" selected>(+91)</option>
        <option value="+86">(+86)</option>
        <option value="+81">(+81)</option>
        <option value="+82">(+82)</option>
        <option value="+49">(+49)</option>
        <option value="+7">(+7)</option>
        <option value="+971">(+971)</option>
        <option value="+61">(+61)</option>
        </select>
        <div>
          <input type="text" id="inputPhone" placeholder='Enter your mobile number'/>
        </div>
      </div>

      <div>
          <input type="Email" id="inputEmail" placeholder='Enter your email'/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </div>
    </div>
  );
}