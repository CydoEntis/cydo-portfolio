import AboutMe from "./features/about/AboutMe";
import Hero from "./features/hero/Hero";
import Works from "./features/works/Works";
import ContactForm from "./features/contact/ContactForm";
import Nav from "./features/navigation/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Works />
      <ContactForm />
    </>
  );
}

export default App;
