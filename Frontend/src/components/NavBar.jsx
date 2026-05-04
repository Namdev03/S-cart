import React, { useState } from "react";
import {
  Home,
  ShoppingCart,
  BookOpen,
  User,
  Menu,
  X,
  Package,
  Heart,
  Search
} from "lucide-react";

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">
          S-cart
        </h1>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md items-center bg-gray-100 rounded-md px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none px-2 w-full text-sm"
          />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <NavItem icon={<Home size={18} />} label="Home" />
          <NavItem icon={<ShoppingCart size={18} />} label="Cart" />
          <NavItem icon={<BookOpen size={18} />} label="Blog" />

          {/* Auth Buttons */}
          <button className="hover:text-blue-600 transition">
            Login
          </button>

          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
            Register
          </button>

          {/* Profile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <User size={18} />
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 w-full text-sm"
          />
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">My Account</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-3 text-gray-700">
          <SidebarItem icon={<User size={18} />} label="Profile" />
          <SidebarItem icon={<Package size={18} />} label="Orders" />
          <SidebarItem icon={<Heart size={18} />} label="Wishlist" />

          <hr />

          {/* Auth (Mobile) */}
          <SidebarItem label="Login" />
          <SidebarItem label="Register" />
        </div>
      </div>
    </div>
  );
}

/* Nav Item */
function NavItem({ icon, label }) {
  return (
    <button className="flex items-center gap-2 hover:text-blue-600 transition">
      {icon}
      {label}
    </button>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label }) {
  return (
    <button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition">
      {icon}
      {label}
    </button>
  );
}