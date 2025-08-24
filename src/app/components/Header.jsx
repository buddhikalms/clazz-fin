export function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        LMS Platform
      </div>
      <nav className="space-x-6 hidden md:flex">
        <a href="#" className="hover:text-indigo-600 transition">
          Home
        </a>
        <a href="#" className="hover:text-indigo-600 transition">
          Courses
        </a>
        <a href="#" className="hover:text-indigo-600 transition">
          Teachers
        </a>
        <a href="#" className="hover:text-indigo-600 transition">
          FAQ
        </a>
        <a href="#" className="hover:text-indigo-600 transition">
          Contact
        </a>
      </nav>
      <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full shadow hover:opacity-90">
        Sign In
      </button>
    </header>
  );
}
