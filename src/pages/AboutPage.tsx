import { Trust } from '../components/Trust';

export function AboutPage() {
  return (
    <main>
      <section className="section heroSectionMini">
        <div className="container">
          <h1>About Midlands AutoCare</h1>
          <p className="heroSub">A modern Nottingham garage focused on honest service and reliable workmanship.</p>
        </div>
      </section>
      <section className="section">
        <div className="container twoCol">
          <div className="surfaceCard">
            <h2>Our approach</h2>
            <p>We explain faults clearly, provide transparent quotes, and only complete approved work.</p>
          </div>
          <div className="surfaceCard">
            <h2>Our mission</h2>
            <p>Help local drivers stay safe and keep repair costs predictable with practical, trusted support.</p>
          </div>
        </div>
      </section>
      <Trust />
    </main>
  );
}
