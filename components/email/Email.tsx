"use client";
import React, { SyntheticEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const data = {
      email: (e.target as HTMLFormElement).email.value,
      subject: (e.target as HTMLFormElement).subject.value,
      message: (e.target as HTMLFormElement).message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Now, you can proceed with making the API request.
    try {
      const response = await fetch(endpoint, options);
      const responseData = await response.json();

      // Handle the response as needed
      console.log(responseData);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="text-center">
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600  font-semibold text-6xl hover:border-b-2 border-[#be123c] transition duration-500"
          id="about-me"
        >
          Contact Me
        </span>
      </h1>
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 px-24 py-12 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-56 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-black my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-gray-700 mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2 ">
            <Link href="https://github.com/Muzammal-Rafique" target="_blank">
              <Image
                src="/icons/github.svg"
                alt="Github Icon"
                width={50}
                height={50}
                className="bg-primary-500 rounded-lg"
              />
            </Link>
            <Link href="www.linkedin.com/in/muzammalrafique26" target="_blank">
              <Image
                src="/icons/linkedin.svg"
                alt="Linkedin Icon"
                width={50}
                height={50}
                className="bg-primary-500 rounded-lg "
              />
            </Link>
            <Link href="https://wa.me/03055164591" target="_blank">
              <Image
                src="/icons/whatsapp.svg"
                alt="Linkedin Icon"
                width={50}
                height={50}
                className="bg-primary-500 rounded-lg"
              />
            </Link>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-black block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-gray-300 border border-[#33353F] placeholder-gray-600 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-black block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-gray-300 border border-[#33353F] placeholder-gray-600 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-black block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-gray-300 border border-[#33353F] placeholder-gray-600 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default EmailSection;
