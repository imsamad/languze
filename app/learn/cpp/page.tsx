import React from 'react';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">My Website</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-white w-64 p-4 sticky top-0 h-screen">
          <ul className="space-y-4">
            <li>
              <a
                href="#dashboard"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#profile"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#settings"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Settings
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            faucibus, nunc sit amet ultrices convallis, nulla arcu feugiat
            ligula, a porttitor turpis erat at arcu. Vivamus venenatis mi a
            sapien tempor sollicitudin.
          </p>
          <p>Add your main content here.</p>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2025 My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
