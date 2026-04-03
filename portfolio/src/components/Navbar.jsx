export default function Navbar({ name }) {
  return (
    <nav className="nav">
      <h1 className="logo">{name}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}