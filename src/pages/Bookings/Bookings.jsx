import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingTable from "./BookingTable";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials : true})
    .then(res => {
      setBookings(res.data);
    })

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully!");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
          console.log(data);
        });
    }
  };

  // confirm button
  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify({ status : 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update State
          const remaining = bookings.filter(booking => booking._id !== id)
          const updated = bookings.find(booking => booking._id === id)
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining]
          setBookings(newBookings)
        }
      });
  };

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
              <th></th>
              <th>Image </th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingTable
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
