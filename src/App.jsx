import { About, Projects, Contact, Footer } from "./sections/index.js";
import NavBar from "./components/NavBar.jsx";

const App = () => (
  <main className="relative">
    <NavBar />
    <section className="padding-x">
      <About />
    </section>
    <section className="padding-x py-10">
      <Projects />
    </section>
    <section className="padding-x py-10">
      <Contact />
    </section>
    <section className="py-10">
      <Footer />
    </section>
  </main>
);

export default App;
