import React, { useRef, useState } from "react";
import "./Signin.css";
import { useForm } from "react-hook-form";

const Signin = (props) => {
  const modalRef = useRef(null);
  const [login, setLogin] = useState(true);
  const [res, setRes] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let url = login ? "http://localhost:3000/Signin" : "http://localhost:3000/Login";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let result = await response.json();
    setRes(result);

    if (response.status === 200) {

     login? props.User(JSON.stringify(data)):props.User(JSON.stringify(result));
     console.log((JSON.stringify(result)))

      clearForm();
      closeModal();
    }

    setTimeout(() => {
      setRes(null);
    }, 3000);
  };

  const clearForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
  };

  const closeModal = () => {
    if (document.querySelector(".Container").classList.contains("visible")) {
      document.querySelector(".Container").classList.remove("visible");
      document.querySelector(".main-content").style.filter = "blur(0px)";
    }
  };

  return (
    <div className="Container" ref={modalRef}>
      <div className="Signin">
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
          <h2>{login ? "Sign in" : "Login"}</h2>
          {login && (
            <>
              <label htmlFor="Name">Username</label>
              <input
                type="text"
                {...register("Name", {
                  required: "Username is required",
                  maxLength: {
                    value: 20,
                    message: "Length should be less than 20",
                  },
                })}
              />
              {errors.UserName && (
                <span className="error">{errors.UserName.message}</span>
              )}
            </>
          )}
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            {...register("Email", {
              required: "Email is required",
            })}
          />
          {errors.Email && (
            <span className="error">{errors.Email.message}</span>
          )}

          <label htmlFor="Password">Password</label>
          <input
            type="password"
            {...register("Password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Length should be more than 10",
              },
            })}
          />
          {errors.Password && (
            <span className="error">{errors.Password.message}</span>
          )}

          {login && (
            <>
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input
                type="password"
                {...register("ConfirmPassword", {
                  required: "Please confirm your password",
                  minLength: {
                    value: 10,
                    message: "Length should be more than 10",
                  },
                })}
              />
              {errors.ConfirmPassword && (
                <span className="error">{errors.ConfirmPassword.message}</span>
              )}

              <label htmlFor="PhoneNumber">Phone Number</label>
              <input
                type="tel"
                {...register("PhoneNumber", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Length should be more than 10",
                  },
                })}
              />
              {errors.PhoneNumber && (
                <span className="error">{errors.PhoneNumber.message}</span>
              )}
            </>
          )}

          <input type="submit" value="Submit" />
          {login ? (
            <p className="linklogin" onClick={() => setLogin(false)}>Already registered? Click to login</p>
          ) : (
            <p className="linklogin" onClick={() => setLogin(true)}>Go back to register? Click here</p>
          )}
          {res && <span>{res.msg}</span>}
        </form>
          <div className="sidedesc">
            <h2>Restaurant-App</h2>
            <h1>Welcome to Foodie Haven</h1>
            <p>
              <strong>Foodie Haven</strong>, the ultimate dining companion app
              designed to elevate your culinary experiences!
            </p>

            <h2>Discover and Explore</h2>
            <p>
              Foodie Haven helps you find the best restaurants in your area with
              just a few taps. Browse through a curated list of top-rated
              eateries, read authentic reviews, and explore mouth-watering menus
              to decide where you want to dine next. Whether you’re craving
              sushi, pasta, or a gourmet burger, our app has you covered.
            </p>

            <h2>Personalized Recommendations</h2>
            <p>
              Based on your taste preferences and dining history, Foodie Haven
              offers personalized restaurant recommendations. Our intelligent
              algorithm learns what you love, ensuring you never miss out on
              hidden gems or new culinary trends.
            </p>

            <h2>Real-time Reservations</h2>
            <p>
              Forget the hassle of calling restaurants to make reservations.
              With Foodie Haven, you can book a table at your favorite spots in
              real-time. Check availability, choose your preferred dining time,
              and receive instant confirmation, all within the app.
            </p>

            <h2>Exclusive Deals and Offers</h2>
            <p>
              Enjoy exclusive deals and discounts at partner restaurants. Save
              money while indulging in delectable dishes. Keep an eye on the
              offers section to make the most of your dining experiences.
            </p>

            <h2>Interactive Menus</h2>
            <p>
              No more guessing what to order! Our interactive menus come with
              high-quality images and detailed descriptions of each dish. Get to
              know the ingredients, preparation methods, and even see
              recommendations for the perfect wine pairing.
            </p>

            <h2>User-friendly Interface</h2>
            <p>
              Foodie Haven is designed with simplicity in mind. Our intuitive
              and user-friendly interface ensures a seamless experience from
              start to finish. Easily navigate through various sections, filter
              search results, and find exactly what you’re looking for with
              ease.
            </p>

            <h2>Community and Reviews</h2>
            <p>
              Join a community of food enthusiasts! Share your dining
              experiences by leaving reviews and ratings for the restaurants you
              visit. Follow other foodies, get inspired by their culinary
              adventures, and make informed decisions based on genuine feedback.
            </p>

            <h2>Order and Delivery</h2>
            <p>
              Can’t make it to the restaurant? No problem! Foodie Haven also
              offers an easy-to-use ordering and delivery service. Browse the
              menu, place your order, and track its progress in real-time until
              it arrives at your doorstep.
            </p>

            <h2>Events and Reservations</h2>
            <p>
              Stay updated with the latest events, special nights, and
              promotions happening at your favorite restaurants. Book your spot
              for exclusive events and enjoy unique dining experiences curated
              just for you.
            </p>

            <h2>Foodie Haven – Your Ultimate Dining Companion</h2>
            <p>
              Whether you’re a local food lover or a traveler exploring new
              tastes, Foodie Haven is your go-to app for discovering, booking,
              and enjoying the best dining experiences. Download now and embark
              on a culinary journey like never before!
            </p>
          </div>
        </div>
      </div>
  );
};

export default Signin;
