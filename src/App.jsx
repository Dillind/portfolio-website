import { About, Projects, Contact, Footer } from "./sections/index.js";
import Nav from "./components/Nav.jsx";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <About />
    </section>
    <section className="padding">
      <Projects />
    </section>
    <section className="padding-x py-10">
      <Contact />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
