import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {
    const {user}=useContext(AuthContext)
    const [booking,setBooking]=useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data =>setBooking(data))
    },[url])


    const handleDelete =id=>{
        const proceed = confirm('Are you sure you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
             method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
             console.log(data)
             if(data.deletedCount>0){
                alert('deleted successful');
                const remaining = booking.filter(booking=>booking._id !==id)
                setBooking( remaining)
             }
     
            })
        }
       }
       const handleConfirm =id=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:"confirm"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
             const remaining = booking.filter(booking=>booking._id !==id)
             const updated = booking.find(booking=> booking._id ==id)
             updated.status='confirm'
             const newBookings =[updated,...remaining]
             setBooking(newBookings)
            }
        }
           
        )
       }

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl'>My bookings: {booking.length}</h2>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>category</th>
        <th>Service</th>
        <th>Price</th>
        <th>date</th>
        <th>See Details</th>
      </tr>
    </thead>
    <tbody>
        {
            booking.map(booking =><BookingRow
                 key={booking._id}
                  handleDelete={handleDelete}
                  booking={booking}
                  handleConfirm ={handleConfirm }>

                  </BookingRow>)
        }
    </tbody>
     
    
  </table>
</div>


        </div>
    );
};

export default Booking;