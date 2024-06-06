import { useRef } from "react";
import emailjs from "@emailjs/browser";
import React from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_907g9ff",
          "template_725jx6c",
          form.current,
          "TTn9NJ1f7LeT5KLVk"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.currentTarget.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="max-container" id="contact">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl max-sm:text-[40px] font-palanquin font-bold">
          Contact Me
        </h2>
        <p className="lg:max-w-lg font-montserrat ml-1">
          Reach out to me if you're interested in working together!
        </p>
      </div>
      {/* form container */}
      <article className="flex items-center justify-center bg-[#fff] shadow-md border-2 rounded-xl mt-5 min-w-[325px] max-w-[1024px]">
        <form
          ref={form}
          onSubmit={sendEmail}
          method="post"
          className=" my-8 rounded-lg w-full"
        >
          {/* form content */}
          <article className="lg:flex font-montserrat flex-wrap px-5">
            {/* Name Input */}
            <div className="mb-4 lg:w-1/2 lg:pr-2">
              <label htmlFor="name">
                <span>Name *</span>
              </label>
              <input
                type="text"
                name="user_name"
                className="border-2 border-black text-sm w-full p-2 rounded-lg focus:outline-none focus:border-primaryColor"
                id="name"
                placeholder="Your Name"
                pattern="^[A-Z]{1}[A-Za-z \-']+$"
                required
              />
            </div>
            {/* Email Address Input */}
            <div className="mb-4 lg:w-1/2 lg:pr-2">
              <label htmlFor="email">
                <span>Email *</span>
              </label>
              <input
                type="email"
                name="user_email"
                className="border-2 border-[#000000] text-sm w-full p-2 rounded-lg focus:outline-none focus:border-primaryColor"
                id="email"
                placeholder="Your Email"
                pattern="^\S{1,}@\S{1,}[.]\S{1,}$"
                required
              />
            </div>
            {/* Message Input */}
            <label htmlFor="message">Message *</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              cols={30}
              rows={10}
              className="border-2 border-[#000000] text-sm w-full p-2 rounded-lg resize-none focus:outline-none focus:border-primaryColor"
            ></textarea>
          </article>
          <div className="px-3">
            <input
              type="submit"
              value="Send"
              className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-primaryColor rounded-full text-white m-2 cursor-pointer outline-none"
            />
          </div>
        </form>
      </article>
    </section>
  );
};

export default Contact;
