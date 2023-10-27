import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { stringify } from "postcss";

const CheckOut = () => {
  const service = useLoaderData();
  const { price, _id, title, img, service_id } = service;
  const {user} = useContext(AuthContext)

  const handleBookService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const booking = {
        customerName : name,
        email, 
        date,
        img,
        service: title,
        service_id: _id,
        price : price
    }
    console.log(booking)

    fetch('http://localhost:5000/bookings', {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })


  }
  return (
    <div className="min-h-screen mt-10">
      <h2 className="text-3xl text-center py-5">Booked Service: {title}</h2>

      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Price</span>
          </label>
          <input
            type="text"
            defaultValue={'$' + price}
            className="input input-bordered"
            required
          />
        </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Conform"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
