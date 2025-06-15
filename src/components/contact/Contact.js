import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../components/animation/done.json"

import email from '../../components/animation/Animation - 1715351154701.json';

const Contact = () => {
  const [state, handleSubmit] = useForm("mgegnyrw");

  
  return (
    <section className="contact-us">
      <h1 className="flex title">
        <span className="icon">
          <FontAwesomeIcon icon={faEnvelope} />{" "}
        </span>
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information ang Git notifed when I publish something
        new
      </p>
      <div className="flex content" >
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input autoComplete="off" required type="email" id="email" name="email"/>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            ></ValidationError>
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            ></ValidationError>
          </div>
          {state.succeeded && ( 
            <Lottie animationData={doneAnimation}></Lottie>,
            <h4>Your message has been send successfully...</h4>
            )}
          <button type="submit" disabled={state.submitting} className="submit">
          {state.submitting ? "Submitting...": "Submit"}  
          </button>

        
        </form>
        
        <div className="animation"> <Lottie animationData={email}></Lottie></div>
      </div>
    </section>
  );
};

export default Contact;
