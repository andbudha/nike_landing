import SrviceCard from '../components/SrviceCard';
import { services } from '../constants';
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <SrviceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
