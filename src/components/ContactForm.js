const ContactForm = () => {
  return (
    <div className="m-5">
      <div className="pb-6 flex">
        <span className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-400 font-roboto hover:animate-bounce">
          C
        </span>
        <span className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-400 font-roboto hover:animate-bounce">
          o
        </span>
        <span className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-400 font-roboto marker:selection:hover:animate-bounce">
          n
        </span>
        <span className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-400 font-roboto hover:animate-bounce">
          t
        </span>
        <span className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-400 font-roboto hover:animate-bounce">
          a
        </span>
        <span className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-400 font-roboto hover:animate-bounce">
          c
        </span>
        <span className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-400 font-roboto hover:animate-bounce pr-4">
          t
        </span>
      </div>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <input
              class="appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <input
              class="appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none"
              id="email"
              type="email"
              placeholder="E-mail"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <textarea
              class=" no-resize appearance-none block w-full bg-dark-gray text-white py-3 px-4 mb-3 leading-tight focus:bg-dark-gray focus:outline-none h-48 resize-none"
              id="message"
              placeholder="Type your message!"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              class="shadow text-white hover:text-pink-400 focus:shadow-outline focus:outline-none bg-pink-400 hover:bg-white font-bold py-2 px-4 rounded-full"
              type="button"
            >
              Send Message
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
