import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex-col justify-center items-center grid md:grid-cols-2 grid-cols-1 bg-my-gray">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <ContactForm />
      </div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center"></div>
    </div>
  );
};

export default Contact;
