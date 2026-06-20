import ContactForm from "../../component/ContactForm";
import ContactHero from "../../component/ContactHero";
import ContactInfo from "../../component/ContactInfo";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import ScrollToTopButton from "../../component/ScrollToTopButton";

const Contact = () => {

return(

<>

<Navbar/>

<ContactHero/>

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 gap-20">

<ContactForm/>

<ContactInfo/>

</div>

</div>

</section>

<Footer/>

<ScrollToTopButton />

</>

)

}

export default Contact;