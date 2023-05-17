import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const BookService = () => {
    const service = useLoaderData();
    const { title, _id,price,img } = service;
    const {user}=useContext(AuthContext)

 const handleServiceSubmit=event=>{
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const date = form.date.value;
    const email =user?.email;
    const  booking ={
        customerName:name,
        email,
        img,
        service: title,
        date,
        service_id:_id,
        price: price
    }
    console.log(booking)
    fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
       body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        alert('your services is booked')
    })
 }

    return (
        <div className="max-w-7xl mx-auto my-7">
      <h2 className='text-center text-3xl text-orange-600'>Book service: {title}</h2>
       
          <form onSubmit={handleServiceSubmit}  >

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                />
              </div>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="email"
                  name='date'
                  className="input input-bordered"
                />
              </div>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  name="amount"
                  defaultValue={'$ '+ price}
                  
                  className="input input-bordered"
                />
                
              </div>
         </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary btn-block" type="submit" value="Order confirm"/>
              </div>



          </form>
          
        </div>
    );
};

export default BookService;