import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-zinc-800 text-white py-5 text-xl ">
      <p className="px-5 md:px-10">
        <Link to="/">Blog App</Link>
      </p>
    </header>
  );
};

export default Navbar;
