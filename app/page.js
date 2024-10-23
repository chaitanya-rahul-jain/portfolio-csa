"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaPalette,
  FaChartLine,
  FaPen,
} from "react-icons/fa";

// Sample team data
const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Developer",
    vertical: "Technical",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    vertical: "Design",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Alex Johnson",
    role: "Project Manager",
    vertical: "Management",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Emily Brown",
    role: "Backend Developer",
    vertical: "Technical",
    image: "https://i.pravatar.cc/300?img=4",
  },
  {
    name: "Michael Lee",
    role: "Content Strategist",
    vertical: "Content",
    image: "https://i.pravatar.cc/300?img=7",
  },
  {
    name: "Sarah Wilson",
    role: "Graphic Designer",
    vertical: "Design",
    image: "https://i.pravatar.cc/300?img=6",
  },
];

// Define verticals with icons
const verticals = [
  { name: "All", icon: null },
  { name: "Technical", icon: FaCode },
  { name: "Design", icon: FaPalette },
  { name: "Management", icon: FaChartLine },
  { name: "Content", icon: FaPen },
];

const Page = () => {
  const [selectedVertical, setSelectedVertical] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredTeamMembers =
    selectedVertical === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.vertical === selectedVertical);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">CS Association</h1>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`lg:flex space-x-4 ${
              isMenuOpen ? "block" : "hidden"
            } lg:block absolute lg:relative top-full left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none`}
          >
            <li>
              <a
                href="#about"
                className="block py-2 px-4 lg:p-0 text-green-600 hover:text-green-800"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="block py-2 px-4 lg:p-0 text-green-600 hover:text-green-800"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-4 lg:p-0 text-green-600 hover:text-green-800"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-32">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">
            Computer Science Association
          </h1>
          <p className="text-xl mb-8 animate-fade-in-up">
            Innovate. Create. Elevate.
          </p>
          <a
            href="#about"
            className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-100 transition duration-300 animate-bounce"
          >
            Discover More
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-600">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Computer Science Association of BITS Pilani is a vibrant
              community of tech enthusiasts, innovators, and future leaders.
              We're dedicated to fostering a love for computer science and
              technology through hands-on workshops, exciting hackathons, and
              insightful guest lectures. Our mission is to bridge the gap
              between academic learning and industry practices, helping students
              grow their skills and build valuable networks.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            Our Team
          </h2>

          {/* Vertical selection buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {verticals.map((vertical) => (
              <button
                key={vertical.name}
                onClick={() => setSelectedVertical(vertical.name)}
                className={`px-6 py-3 rounded-full flex items-center space-x-2 transition duration-300 ${
                  selectedVertical === vertical.name
                    ? "bg-green-600 text-white"
                    : "bg-white text-green-600 hover:bg-green-100"
                }`}
              >
                {vertical.icon && <vertical.icon />}
                <span>{vertical.name}</span>
              </button>
            ))}
          </div>

          {/* Team members grid */}
          <h3 className="text-2xl font-semibold mb-8 text-center text-green-600">
            {selectedVertical === "All"
              ? "All Team Members"
              : `${selectedVertical} Team`}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-400"
                />
                <h3 className="text-xl font-semibold mb-2 text-green-600">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-green-500 font-medium">{member.vertical}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "AI Research",
              "Web Development",
              "Machine Learning",
              "Cybersecurity",
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-600">
                  {project}
                </h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-white hover:text-green-200 transition duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="#"
              className="text-white hover:text-green-200 transition duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="#"
              className="text-white hover:text-green-200 transition duration-300"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
          <p className="mb-4">
            &copy; 2024 Computer Science Association, BITS Pilani. All rights
            reserved.
          </p>
          <p className="text-sm text-green-200">
            Designed with ❤️ by CS Association Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
