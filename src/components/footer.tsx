import React from "react";

interface FooterLink {
  label: string;
  href: string;
  badge?: "NEW" | "OFFER";
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
  badge?: "NEW" | "OFFER";
}

const Footer: React.FC = () => {
  // Data for the top section columns
  const topColumns: FooterColumn[] = [
    {
      title: "Internships by places",
      links: [
        { label: "Internship in India", href: "#" },
        { label: "Internship in Delhi", href: "#" },
        { label: "Internship in Bangalore", href: "#" },
        { label: "Internship in Hyderabad", href: "#" },
        { label: "Internship in Mumbai", href: "#" },
        { label: "Internship in Chennai", href: "#" },
        { label: "Internship in Gurgaon", href: "#" },
        { label: "Internship in Kolkata", href: "#" },
        { label: "Virtual internship", href: "#" },
        { label: "View all internships", href: "#" },
      ],
    },
    {
      title: "Internship by Stream",
      links: [
        { label: "Computer Science Internship", href: "#" },
        { label: "Electronics Internship", href: "#" },
        { label: "Mechanical Internship", href: "#" },
        { label: "Civil Internship", href: "#" },
        { label: "Marketing Internship", href: "#" },
        { label: "Chemical Internship", href: "#" },
        { label: "Finance Internship", href: "#" },
        { label: "Summer Research Fellowship", href: "#" },
        { label: "Campus Ambassador Program", href: "#" },
        { label: "View all internships", href: "#" },
      ],
    },
    {
      title: "Jobs by Places",
      links: [
        { label: "Jobs in Delhi", href: "#" },
        { label: "Jobs in Mumbai", href: "#" },
        { label: "Jobs in Bangalore", href: "#" },
        { label: "Jobs in Jaipur", href: "#" },
        { label: "Jobs in Kolkata", href: "#" },
        { label: "Jobs in Hyderabad", href: "#" },
        { label: "Jobs in Pune", href: "#" },
        { label: "Jobs in Chennai", href: "#" },
        { label: "Jobs in Lucknow", href: "#" },
        { label: "View all jobs", href: "#" },
      ],
    },
    {
      title: "Jobs by Stream",
      links: [
        { label: "Marketing jobs", href: "#" },
        { label: "Content writing jobs", href: "#" },
        { label: "Web development jobs", href: "#" },
        { label: "Sales jobs", href: "#" },
        { label: "Finance jobs", href: "#" },
        { label: "Digital Marketing jobs", href: "#" },
        { label: "Computer Science jobs", href: "#" },
        { label: "Graphic Design jobs", href: "#" },
        { label: "Data Science jobs", href: "#" },
        { label: "View all jobs", href: "#" },
      ],
    },
    {
      title: "Placement Guarantee Courses",
      links: [
        { label: "Full Stack Development Course", href: "#" },
        { label: "Product Management Course", href: "#" },
        { label: "Digital Marketing Course", href: "#" },
      ],
    },
    {
      title: "Certification Courses",
      links: [], // No direct links under this title in the image, but it has an "OFFER" badge
      badge: "OFFER", // Badge for the title itself
    },
  ];

  // Data for the middle section columns (About Us, Team Diary, etc.)
  const middleColumns: FooterColumn[] = [
    {
      title: "About us",
      links: [
        { label: "About us", href: "#" },
        { label: "We're hiring", href: "#" },
        { label: "Hire interns for your company", href: "#" },
        { label: "Post a Job", href: "#" },
      ],
    },
    {
      title: "Team Diary",
      links: [
        { label: "Team Diary", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Our Services", href: "#" },
      ],
    },
    {
      title: "Terms & Conditions",
      links: [
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Contact us", href: "#" },
      ],
    },
    {
      title: "Sitemap",
      links: [
        { label: "Sitemap", href: "#" },
        { label: "College TPO registration", href: "#" },
        { label: "List of Companies", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-4 md:px-8 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Internship/Job Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-8 border-b border-gray-700">
          {topColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                {col.title}
                {col.badge && (
                  <span className="bg-orange-400 text-white text-[10px] font-bold px-1.5 py-[2px] rounded">
                    {col.badge}
                  </span>
                )}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-[#008bdc] transition-colors text-sm"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="ml-2 bg-orange-400 text-white text-[10px] font-bold px-1.5 py-[2px] rounded">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: About, Terms, etc. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-gray-700">
          {middleColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-3">
              <h4 className="font-semibold text-white">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-[#008bdc] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: App Links, Social Media, Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 space-y-6 md:space-y-0">
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-8"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://placehold.co/100x30/000000/FFFFFF?text=Google+Play";
                }}
              />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-8"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://placehold.co/100x30/000000/FFFFFF?text=App+Store";
                }}
              />
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 text-2xl">
            {/* Using simple text/placeholder for social icons as specific icon library is not provided for these */}
            <a href="#" className="hover:text-[#008bdc] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#008bdc] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 11.6 2.2.1 4.4-.6 6-2 1.1 1.6 2.3 2.9 3.7 3.9 3.6 2.5 7.6 2.8 11-1 1.2-1.2 2.3-2.6 3-4 1.1-2.1 2-4.9 2-7.4-.2-2.8-1.5-5-3-6.7z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#008bdc] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
              >
                <path d="M2.5 17.5v-11c0-1.4 1.1-2.5 2.5-2.5h15c1.4 0 2.5 1.1 2.5 2.5v11c0 1.4-1.1 2.5-2.5 2.5h-15c-1.4 0-2.5-1.1-2.5-2.5z" />
                <path d="m10 8.5 5 3.5-5 3.5z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#008bdc] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm">
            <p>&copy; Copyright 2025 Internshala</p>
            <p>( Scholiverse Educare Private Limited )</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
