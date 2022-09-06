import { Link } from "react-router-dom";

const Links = () => {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="skills">Skills</Link>
      <Link to="work">Work</Link>
      <Link to="contact">Contact</Link>
    </nav>
  )
}

export default Links;