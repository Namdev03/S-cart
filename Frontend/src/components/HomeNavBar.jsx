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

export default function HomeNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy user (replace with real data later)
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/40"
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">
          S-Cart
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

          {/* Profile Section */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <img
              src={user.avatar}
              alt="profile"
              className="w-8 h-8 rounded-full object-cover border"
            />
            <span className="text-sm font-medium">{user.name}</span>
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
        {/* Profile Header */}
        <div className="flex items-center gap-3 p-4 border-b">
          <img
            src={user.avatar}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto"
          >
            <X />
          </button>
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col p-4 gap-3 text-gray-700">
          <SidebarItem icon={<User size={18} />} label="Profile" />
          <SidebarItem icon={<Package size={18} />} label="Orders" />
          <SidebarItem icon={<Heart size={18} />} label="Wishlist" />
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