import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-slate-900 h-screen flex-col justify-center items-center grid md:grid-cols-2 ">
      <ContactForm />
      <div className="bg-blue-200 h-screen">Content</div>
    </div>
  );
};

export default Contact;
