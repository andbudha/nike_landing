import Nav from './components/Nav';
import {
  Hero,
  CustomerReviews,
  Footer,
  Popular,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections';
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Popular />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black text-white padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
