import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-my-gray h-screen flex-col justify-center items-center grid md:grid-cols-2 ">
      <div className="h-screen flex flex-col justify-center items-center">
        <ContactForm />
      </div>
      <div className="bg-blue-200 h-screen">Content</div>
    </div>
  );
};

export default Contact;
