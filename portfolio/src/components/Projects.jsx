export default function Projects({ projects }) {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      {projects.map((p, index) => (
        <div className="card" key={index}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>

          <div className="links">
            <a href={p.live} target="_blank">Live Demo</a>
            <a href={p.github} target="_blank">GitHub</a>
          </div>
        </div>
      ))}
    </section>
  );
}