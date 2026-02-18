const services = [
  {
    title: 'MOT Testing',
    price: '£54.85',
    benefit: 'Keep your car road-legal and safe with a thorough DVSA-standard MOT check.'
  },
  {
    title: 'Interim Service',
    price: 'from £99',
    benefit: 'Ideal for high-mileage drivers who need reliable performance between annual services.'
  },
  {
    title: 'Full Service',
    price: 'from £149',
    benefit: 'Complete health check with fluid, filter and safety inspections to reduce future breakdowns.'
  },
  {
    title: 'Brakes',
    price: 'from £89',
    benefit: 'Restore braking confidence with quality parts and careful fitting.'
  },
  {
    title: 'Diagnostics',
    price: 'from £49',
    benefit: 'Fast fault finding with modern diagnostic tools to avoid unnecessary repair costs.'
  },
  {
    title: 'Tyres',
    price: 'Price match available',
    benefit: 'Safe tyres fitted and balanced quickly, with practical advice for your driving needs.'
  }
];

export function Services() {
  return (
    <section className="container section" id="services">
      <h2>Popular garage services</h2>
      <p className="sectionIntro">Example pricing to help you plan ahead. Final quote depends on your vehicle and parts required.</p>
      <div className="grid3">
        {services.map((service) => (
          <article className="card" key={service.title}>
            <div className="between row">
              <h3>{service.title}</h3>
              <strong>{service.price}</strong>
            </div>
            <p>{service.benefit}</p>
            <a href="#booking" className="textLink">
              Book this service
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
