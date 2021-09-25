import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white py-2 px-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Savita Clinic
          </h1>
        </Link>
        <Link to="/dashboard">
          <button className="btn btn--secondary">Dashboard</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
