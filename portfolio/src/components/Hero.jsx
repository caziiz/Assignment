import profileImg from "../assets/profile.jpg";

export default function Hero({ name, role }) {
  return (
    <section className="hero">
      
      <div className="hero-container">

        {/* TEXT SIDE */}
        <div className="hero-text">
          <h2>Hello, I'm {name} 👋</h2>
          <p>{role}</p>

          <button
            onClick={() =>
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            View My Work
          </button>
        </div>

        {/* IMAGE SIDE */}
        <div className="hero-image">
          <img src={profileImg} alt="profile" />
        </div>

      </div>

    </section>
  );
}