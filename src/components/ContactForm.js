import React, { useState } from "react";
import emailjs from "emailjs-com";
import AnimatedHeader from "./AnimatedHeader";

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mn7f168",
        "template_wlwrppp",
        e.target,
        "user_aWRmG23HC3vmNsDTy4x9L"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const Alert = () => {
    const [showAlert, setShowAlert] = useState(true);
    return (
      <>
        {showAlert ? (
          <div className="text-white font-semibold px-6 py-4 border-0 rounded relative my-6 bg-pink-400 float">
            <span className="text-xl inline-block mr-5 align-middle">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span className="inline-block align-middle mr-8">
              Your message was sent successfully!
            </span>
            <button
              className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
              onClick={() => {
                setShowAlert(false);
                setMessageSent(false);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div className="m-8">
      <div className="pb-5 flex">
        <AnimatedHeader word={"Get"} />
        <span className="w-3" />
        <AnimatedHeader word={"In"} />
        <span className="w-3" />
        <AnimatedHeader word={"Touch"} />
      </div>
      <div className="font-source text-white lg:text-lg md:text-lg sm:text-md text-sm mb-5">
        Have a question? Send me a message and I'll get back to you! Feel free
        to leave your LinkedIn so we can keep in touch.
      </div>
      <form className="w-full max-w-lg" onSubmit={sendEmail}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none"
              id="grid-first-name"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none"
              id="grid-last-name"
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input
              className="appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none"
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input
              className="appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none"
              id="subject"
              name="subject"
              type="subject"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <textarea
              className=" no-resize appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none h-48 resize-none"
              id="message"
              name="message"
              placeholder="Type your message!"
              required
            ></textarea>
          </div>
        </div>
        <div>
          <div className="md:w-1/3">
            <button
              className="shadow text-white hover:text-pink-400 focus:shadow-outline focus:outline-none bg-pink-400 hover:bg-my-gray font-semibold py-2 px-4 rounded-full"
              type="submit"
            >
              Send Message
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
        {messageSent ? <Alert /> : null}
      </form>
    </div>
  );
};

export default ContactForm;
