import React from "react";
import "./contact.css";

function contact() {
  return (
    <section id="contact">
      <h2 className="contactTitle">Contact</h2>
      <p className="contactDesc">Feel free to reach out to me!</p>
      <form className="contactForm">
        <input
          type="text"
          placeholder="Your Name"
          className="name"
          name="your_name"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="email"
          email="your_email)"
        />
        <textarea
          placeholder="Your Message"
          className="message"
          rows="5"
          name="message"
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default contact;
