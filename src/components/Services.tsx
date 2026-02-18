const services = [
  { title: 'MOT', price: 'From £54.85', benefit: 'Stay road-legal with a full MOT inspection and clear advice.' },
  { title: 'Interim Service', price: 'From £99', benefit: 'Protect your engine and running costs between annual services.' },
  { title: 'Full Service', price: 'From £149', benefit: 'Comprehensive checks and maintenance for long-term reliability.' },
  { title: 'Brakes', price: 'From £89', benefit: 'Restore safe, confident stopping with quality brake components.' },
  { title: 'Diagnostics', price: 'From £49', benefit: 'Pinpoint warning lights quickly and avoid unnecessary part swapping.' },
  { title: 'Tyres', price: 'Price match', benefit: 'Grip-focused tyre fitting, balancing, and practical tyre advice.' }
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2>Garage services with clear pricing</h2>
        <p className="sectionLead">Example prices shown below to help you plan. Final quotes depend on vehicle and parts.</p>
        <div className="cardGrid">
          {services.map((service) => (
            <article key={service.title} className="serviceCard">
              <h3>{service.title}</h3>
              <p className="priceTag">{service.price}</p>
              <p>{service.benefit}</p>
              <a className="textAction" href="#booking">
                Book
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
