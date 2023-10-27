import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingTable from "./BookingTable";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleDelete = id =>{
    const proceed = confirm('Are You Sure?')
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE',
        
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          alert('Deleted Successfully!')
          const remaining = bookings.filter(booking => booking._id !== id)
          setBookings(remaining)
        }
        console.log(data)
      })
    }
  }

  // 
  const handleConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status : 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }


  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-medium text-center">
        Your Booking: {bookings.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg font-bold">
              <th>
                
              </th>
              <th>Image </th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking => <BookingTable key={booking._id} booking={booking}
                  handleDelete = {handleDelete} handleConfirm={handleConfirm}
                ></BookingTable>)
            }
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Bookings;
