import React from "react";

const Contact = () => {
  const submit = () => {
    this.submit();
    this.reset();
    return false;
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-sky-100 text-sky-900 flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/e04f419b-1bbf-4369-ab08-5828b4099539"
        onSubmit={submit}
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-400">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or email me at su.kong@mail.utoronto.ca
          </p>
        </div>
        <input
          className="p-2 bg-sky-50"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-sky-50"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-sky-50"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="border-2 border-sky-400 hover:bg-sky-700 hover:border-sky-700 hover:text-sky-50 px-4 py-3 my-8 mx-auto flex items-center">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;
