import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartlist, useToastContext } from '../../context';
import './CheckoutPage.css';

export function CheckoutPage() {
    const { cartState } = useCartlist();
    const [userAddress , setUserAddress] = useState([]);
    const [name , setName] = useState('');
    const [address , setAddress] = useState('');
    const [city , setCity] = useState('');
    const [state , setState] = useState('');
    const [country , setCountry] = useState('');
    const [pincode , setPincode] = useState('');
    const [mobileNumber , setMobileNumber] = useState('');
    const [userSelectedAddress , setUserSelectedAddress] = useState('');
    const [addresToggle , setAddressToggle] = useState(true);
    const toast = useToastContext();
    const navigate = useNavigate();

    const saveHandler = (e) => {
        e.preventDefault();
        if(name && address && city && state && country && pincode && mobileNumber){
        const newAddress = {
            name,
            address,
            city,
            state,
            country,
            pincode,
            mobileNumber
        }
        setUserAddress(prev => [...prev , newAddress]);
        setName('');
        setAddress('');
        setCity('');
        setState('');
        setCountry('');
        setPincode('');
        setMobileNumber('');
        setAddressToggle(true)
    }else{
       toast('Enter Address Properly!' , {type : 'warning'});
    }
    }

    const closeAddressModal = (e) => {
        e.preventDefault();
        setAddressToggle(true);
    }


    const addDummyAddress = (e) => {
        e.preventDefault();
        const dummyAddress = {
            name:"user",
            address:'House No.342, MG Road',
            city:"Pune",
            state:"Maharashtra",
            country:"India",
            pincode:'PIN-23456',
            mobileNumber:"MO-1234567898"
        }
        setUserAddress(prev => [...prev , dummyAddress]);
        setAddressToggle(true);
    }


    const getUserSelectedAddress = (e, index) => {
        if(e.target.checked === true){
            setUserSelectedAddress(userAddress[index]);
        }
    }

    const proceedToPay = () => {
        if(userSelectedAddress){
            let options = {
                key:'rzp_test_z8ib7yVIg91K5b',
                key_secret:'wDyuEwMiWo1rfx0WqO9bw7YW',
                amount: cartState.checkout_details[4] *100,
                curreny:'INR',
                name:'ECOMMERCE_PROJECT',
                description:'for testing purpose',
                handler: function(){
                    toast('Order Placed Successfully', {type:'success'});
                    navigate('/products');
                },
                prefill:{
                    name:'Omkar',
                    email:'omkarpatke1101@gmail.com',
                    contact:'9734561281'
                },
                notes:{
                    address:'MG Road Pune'
                },
                theme:{
                    color:'#1a406b'
                }
            };

            let pay = new window.Razorpay(options);
            pay.open();
        }else{
            toast('Select Address Please!' , {type : 'warning'});
        }
    }

  return (
    <>
    <div className='checkout-container'>
        <h1 className='checkout-heading'>Checkout</h1>
        <div className="section-container">
            <div className="address-section">
            <div className="address-form">
            <form className={addresToggle ? 'hidden' : 'form'} >
                <div className='form-inputs'>
                <input type="text"   onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
                <input type="text"   onChange={(e) => setAddress(e.target.value)} placeholder='Enter House No, Street or Colony' />
                <input type="text"   onChange={(e) => setCity(e.target.value)} placeholder='Enter City' />
                <input type="text"   onChange={(e) => setState(e.target.value)} placeholder='Enter State' />
                <input type="text"   onChange={(e) => setCountry(e.target.value)} placeholder='Enter Contry' />
                <input type="number" onChange={(e) => setPincode(e.target.value)} placeholder='Enter Pincode' />
                <input type="number" onChange={(e) => setMobileNumber(e.target.value)} placeholder='Enter Mobile Number' />
                </div>
                <div className="form-btns">
                    <button className='btn outline-primary-btn' onClick={(e) => saveHandler(e)}>Save</button>
                    <button className='btn outline-primary-btn' onClick={(e) => addDummyAddress(e)}>Dummy Address</button>
                    <button className='btn outline-primary-btn' onClick={(e) => closeAddressModal(e)}>Cancle</button>
                </div>
            </form>
        </div>
                <button className='btn outline-primary-btn' onClick={() => setAddressToggle(false)}>Add Address</button>
                <div className="address-container">
                {userAddress?.map((item , index) => (
                    <div key={index} className='userAddress'>
                        <input type="radio" name='address' onClick={(e) => getUserSelectedAddress(e , index)}/>
                        <div>
                        <div>{item.name},</div>
                        <div>{item.address}, {item.city}</div>
                        <div>{item.state}, {item.country}</div>
                        <div>{item.pincode}, {item.mobileNumber}</div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="order-details">
                <h2>Order Details</h2>
                <div className="border-bottom"></div>
                <h2>Purchased Items</h2>
                <div className="border-bottom"></div>
                <div className="checkout-items">
                    <div className="items">
                        <div className='title'>items</div>
                        <div className="items">
                            {cartState.checkout_details[0].map((cycle , index) => (
                                <div key={index}>{cycle.desc}</div>
                            ))}
                        </div>
                    </div>
                    <div className="item-price">
                        <div className='title'>Price</div>
                        <div className='items-price'>
                        {cartState.checkout_details[0].map((cycle , index) => (
                                <div key={index}>{cycle.price}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-bottom"></div>
                <h2>Billing</h2>
                <div className="border-bottom"></div>
                <div className="checkout-items">
                    <div>MRP</div>
                    <div>{cartState.checkout_details[3]}</div>
                </div>
                <div className="checkout-items">
                    <div>Discount</div>
                    <div>-{cartState.checkout_details[2]}</div>
                </div>
                <div className="checkout-items">
                    <div>Delivery Charges</div>
                    <div>+{cartState.checkout_details[1]}</div>
                </div>
                <div className="border-bottom"></div>
                <div className="checkout-items">
                    <div className='total-amount'>Total Amount</div>
                    <div className='total-amount'>{cartState.checkout_details[4]}</div>
                </div>
                <div className="border-bottom"></div>
                <h2>Address</h2>
                <div className="border-bottom"></div>
                <div className='userSelectedAddress'>
                  {userSelectedAddress?.name} {userSelectedAddress?.address}{userSelectedAddress?.city} {userSelectedAddress?.state }
                </div>
                <div>
                    {userSelectedAddress?.country}  {userSelectedAddress?.pincode}  {userSelectedAddress?.mobileNumber}
                </div>
                {/* <div>{userSelectedAddress.name}</div> */}
                <div className="border-bottom"></div>

                <button className='btn primary-btn paymentBtn' onClick={proceedToPay}>Proceed To Pay</button>
            </div>
        </div>
        
    </div>
    
    </>
  )
}
