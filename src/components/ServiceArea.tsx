const areas = ['Beeston', 'Arnold', 'West Bridgford', 'Carlton', 'Mapperley', 'Hucknall', 'Long Eaton'];

export function ServiceArea() {
  return (
    <section className="container section" id="areas">
      <h2>Serving Nottingham and nearby areas</h2>
      <p>
        We help local drivers with reliable car repairs, MOT testing, servicing, tyres, brakes and diagnostics across Nottingham and surrounding towns.
      </p>
      <p className="areaList">{areas.join(' • ')}</p>
    </section>
  );
}
