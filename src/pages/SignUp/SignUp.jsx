import { Link } from "react-router-dom";
import signUp from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email)


        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        } )
        .catch(error => console.log(error))
    }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className="w-1/2 mr-16">
            <img src={signUp} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-2xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleSignUp}>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
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
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-warning"
                  />
                </div>
              </form>
              <p className="text-xl font-medium text-center my-5">
                Already Have an account?{" "}
                <Link className="text-orange-600" to="/login">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
