export default function Skills({ skills }) {
  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill, i) => (
          <span key={i} className="skill">{skill}</span>
        ))}
      </div>
    </section>
  );
}