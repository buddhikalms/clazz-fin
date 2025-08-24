export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">LMS Platform</h3>
          <p className="text-gray-400">
            Empowering learners worldwide with accessible and quality education.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Teachers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p>Email: info@lms.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              FB
            </a>
            <a href="#" className="hover:text-white">
              TW
            </a>
            <a href="#" className="hover:text-white">
              IG
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10">
        © 2025 LMS Platform. All rights reserved.
      </div>
    </footer>
  );
}
