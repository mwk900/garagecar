import { business } from '../config/business';

export function ServiceArea() {
  return (
    <section className="section sectionAlt" id="service-area">
      <div className="container twoCol">
        <div>
          <h2>Serving Nottingham and nearby areas</h2>
          <p>
            Midlands AutoCare supports local drivers with MOT, servicing, tyres, brakes and car repairs across {business.serviceAreas.join(', ')}.
          </p>
        </div>
        <div className="surfaceCard">
          <h3>Opening Hours</h3>
          <p>{business.hours.weekdays}</p>
          <p>{business.hours.saturday}</p>
          <p>{business.hours.sunday}</p>
        </div>
      </div>
    </section>
  );
}
