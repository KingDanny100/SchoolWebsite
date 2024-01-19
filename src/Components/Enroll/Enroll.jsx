import axios from "axios";
import React, { useEffect, useState, useRef, useReducer } from "react";
import "./Enroll.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import Footer from "../Footer/Footer";
import image1 from "../../../Images/LT.avif";
import image2 from "../../../Images/walkway.avif";
import image3 from "../../../Images/schoolField.avif";
import Loader from "./Loader";
import Confirmation from "./Confirmation/Confirmation";


const emailREGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ageRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  gender: "",
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.detail]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const images = [image1, image2, image3];

const Enroll = () => {
  axios.defaults.withCredentials = true;

  const focusRef = useRef();
  const [personDetails, dispatch] = useReducer(reducerFunc, initialState);
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handleInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(handleInterval);
  }, [imageIndex]);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleDetailChange = (detail, value) => {
    // console.log(value);
    dispatch({ type: "UPDATE_FIELD", detail, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(true);
    if (
      /\d/.test(personDetails.firstName) ||
      /\d/.test(personDetails.lastName)
    ) {
      setMessage("Enter a correct name");
      setIsValid(false);
      setTimeout(() => {
        setIsValid((prev) => !prev);
      }, 3000);
      return;
    }
    if (emailREGX.test(personDetails.email) === false) {
      setMessage("Invalid email address");
      setIsValid(false);
      setTimeout(() => {
        setIsValid((prev) => !prev);
      }, 3000);
      return;
    }
    if (personDetails.age.trim() === "") {
      setMessage("No age specified");
      setIsValid(false);
      setTimeout(() => {
        setIsValid((prev) => !prev);
      }, 3000);
      return;
    }
    if (personDetails.gender.trim() === "") {
      setMessage("No gender specified");
      setIsValid(false);
      setTimeout(() => {
        setIsValid((prev) => !prev);
      }, 3000);
      return;
    }
    setIsLoading(true)
    try {
      axios
        .post("http://127.0.0.1:5000/applicant/", personDetails)
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log("failed");
      setIsLoading(false)
      return
    }
    setTimeout(()=> {
        setIsLoading(false)
        setShowModal(true)
    }, 6000)
    dispatch({ type: "RESET" });
  };

  const containerStyle = {
    backgroundImage: `url(${images[imageIndex]})`,
  };

  return (
    <>
      <div className="form_container" style={containerStyle}>
        <form onSubmit={handleSubmit}>
          <h3>Admission Application</h3>
          <aside className="firstname">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              autoComplete="off"
              ref={focusRef}
              value={personDetails.firstName}
              placeholder="Enter FirstName"
              onChange={(e) => handleDetailChange("firstName", e.target.value)}
            />
          </aside>
          <aside className="lastname">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              autoComplete="off"
              required
              value={personDetails.lastName}
              placeholder="Enter Last Name"
              onChange={(e) => handleDetailChange("lastName", e.target.value)}
            />
          </aside>
          <aside className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              value={personDetails.email}
              required
              placeholder="Enter Email Address"
              onChange={(e) => handleDetailChange("email", e.target.value)}
            />
          </aside>
          <aside className="age">
            <label htmlFor="age">Ward's Age</label>
            <select
              value={personDetails.age}
              onChange={(e) => handleDetailChange("age", e.target.value)}
            >
              <option value="" disabled>
                Select age
              </option>
              {ageRange.map((age, index) => {
                return (
                  <option value={age} key={index}>
                    {age}
                  </option>
                );
              })}
            </select>
          </aside>
          <aside className="gender">
            <label htmlFor="gender">Gender</label>
            <div className="gender_div">
              <label htmlFor="male">
                Male
                <input
                  type="radio"
                  checked={personDetails.gender === "male"}
                  value="male"
                  id="male"
                  onChange={(e) => handleDetailChange("gender", e.target.value)}
                />
              </label>
              <label htmlFor="female">
                Female
                <input
                  type="radio"
                  checked={personDetails.gender === "female"}
                  value="female"
                  onChange={(e) => handleDetailChange("gender", e.target.value)}
                  id="female"
                />
              </label>
              <label htmlFor="others">
                Others
                <input
                  type="radio"
                  checked={personDetails.gender === "others"}
                  value="others"
                  onChange={(e) => handleDetailChange("gender", e.target.value)}
                  id="others"
                />
              </label>
            </div>
          </aside>
          {!isValid && <p className="err_message">{message}</p>}
          <button className="apply_button" type="submit">
            Apply
          </button>
        </form>
        {isLoading && <Loader />}
        {!isLoading && showModal && <Confirmation handleCloseModal={handleCloseModal}/>}
      </div>
      
    </>
  );
};

export default Enroll;
