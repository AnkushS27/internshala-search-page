import { useState } from "react";
import { Badge } from "./ui/badge";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";

type JobTab = "Top Locations" | "Top Categories" | "Explore More Jobs";

const JobsDropdown = () => {
  const [activeTab, setActiveTab] = useState<JobTab>("Top Locations");
  // Define content based on hovered tab
  const jobContent: Record<JobTab, string[]> = {
    "Top Locations": [
      "Work from home",
      "Jobs in Delhi",
      "Jobs in Mumbai",
      "Jobs in Bangalore",
      "Jobs in Hyderabad",
      "Jobs in Kolkata",
      "Jobs in Chennai",
      "Jobs in Pune",
      "Jobs in Jaipur",
      "View all jobs",
    ],
    "Top Categories": [
      "Fresher jobs",
      "Marketing jobs",
      "Content writing jobs",
      "Computer science jobs",
      "Finance jobs",
      "HR jobs",
      "Graphic design jobs",
      "Data science jobs",
      "View all jobs",
    ],
    "Explore More Jobs": [
      "Jobs by Category",
      "Jobs by Location",
      "Jobs by Designation",
      "Jobs by Skill",
    ],
  };

  return (
    <NavigationMenuItem className="h-18">
      <NavigationMenuTrigger className="h-18 hover:text-[#008bdc]">
        Jobs
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white p-4 shadow-md rounded-md min-w-[600px] min-h-[300px]">
        <div className="flex">
          {/* Left Tabs */}
          <div className="pr-6 w-1/2 flex flex-col gap-3 text-sm">
            {Object.keys(jobContent).map((label) => (
              <div
                key={label}
                onMouseEnter={() => setActiveTab(label as JobTab)}
                className={`cursor-pointer px-2 py-3 rounded-r-lg ${
                  activeTab === label
                    ? "text-[#008bdc] font-semibold bg-[#eafcff]"
                    : ""
                }`}
              >
                {label}
              </div>
            ))}
            <div className="flex items-center gap-1 cursor-pointer">
              <NavigationMenuLink href="#">
                Placement Guarantee Courses
              </NavigationMenuLink>
              <span className="bg-orange-400 text-white text-[10px] font-bold px-1.5 py-[2px] rounded">
                NEW
              </span>
            </div>
          </div>

          <div className="pl-6 w-1/2 flex flex-col gap-2 text-sm">
  {jobContent[activeTab].map((item) => (
    <NavigationMenuLink key={item} href="#">
      {item}
    </NavigationMenuLink>
  ))}
</div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

type InternshipTab = "Top Locations" | "Top Categories" | "Explore More Internships";

const InternshipsDropdown = () => {
  const [activeTab, setActiveTab] = useState<InternshipTab>("Top Locations");

  const internshipContent: Record<InternshipTab, string[]> = {
    "Top Locations": [
      "Work from Home",
      "Internship in Bangalore",
      "Internship in Delhi",
      "Internship in Hyderabad",
      "Internship in Mumbai",
      "Internship in Chennai",
      "Internship in Pune",
      "Internship in Kolkata",
      "Internship in Jaipur",
      "International Internship",
    ],
    "Top Categories": [
      "Engineering internships",
      "MBA internships",
      "Media internships",
      "Design internships",
      "Science internships",
      "Law internships",
      "Finance internships",
      "NGO internships",
      "View all categories",
    ],
    "Explore More Internships": [
      "Internships by Category",
      "Internships by Location",
      "Internships by Stream",
      "Internships by Skill",
    ],
  };

  return (
    <NavigationMenuItem className="h-18">
      <NavigationMenuTrigger className="h-18 hover:text-[#008bdc]">
        Internships
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white p-4 shadow-md rounded-md min-w-[600px] min-h-[350px]">
        <div className="flex">
          {/* Left Tabs */}
          <div className="pr-6 w-1/2 flex flex-col gap-3 text-sm">
            {Object.keys(internshipContent).map((label) => (
              <div
                key={label}
                onMouseEnter={() => setActiveTab(label as InternshipTab)}
                className={`cursor-pointer px-2 py-3 rounded-r-lg ${
                  activeTab === label
                    ? "text-[#008bdc] font-semibold bg-[#eafcff]"
                    : ""
                }`}
              >
                {label}
              </div>
            ))}
            <div className="flex items-center gap-1 cursor-pointer">
              <NavigationMenuLink href="#">
                Placement Guarantee Courses
              </NavigationMenuLink>
              <span className="bg-orange-400 text-white text-[10px] font-bold px-1.5 py-[2px] rounded">
                NEW
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="pl-6 w-1/2 flex flex-col gap-2 text-sm">
            {internshipContent[activeTab].map((item) => (
              <NavigationMenuLink key={item} href="#">
                {item}
              </NavigationMenuLink>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const Header = () => {
  return (
    <header className="flex justify-center items-center w-full bg-white h-18">
      <div className="flex items-center max-w-[1210px] w-full justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="internshala_logo.png"
            alt="Internshala Logo"
            width="113"
            height="31.5"
            className="h-[35px] w-[113px]"
          />
        </div>

        <div className="flex gap-6 h-18">
          {/* Navigation */}
          <NavigationMenu className="h-18">
            <NavigationMenuList className="h-18">
              {/* Internships Dropdown */}
              <InternshipsDropdown />

              {/* Courses Dropdown */}
              <NavigationMenuItem className="h-18">
                <NavigationMenuTrigger className="h-18 hover:text-[#008bdc]">
                  <span className="inline-flex items-center gap-2">
                    Courses
                    <Badge variant="offer">OFFER</Badge>
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 shadow-md rounded-md min-w-[600px] min-h-[300px]">
                  <div className="flex divide-x">
                    <div className="pr-6 w-1/2 flex flex-col gap-2 text-sm">
                      <span className="font-semibold text-black">
                        Certification Courses
                      </span>
                      {[
                        "Web Development",
                        "Machine Learning",
                        "Programming with Python",
                        "React",
                        "Core Java",
                        "Digital Marketing",
                        "Advanced Excel",
                        "AutoCAD",
                      ].map((label) => (
                        <NavigationMenuLink key={label} href="#">
                          {label}
                        </NavigationMenuLink>
                      ))}
                      <NavigationMenuLink
                        href="#"
                        className="hover:underline font-semibold"
                      >
                        View 70+ more courses
                      </NavigationMenuLink>
                    </div>
                    <div className="pl-6 w-1/2 flex flex-col gap-2 text-sm">
                      <span className="font-semibold text-black">
                        Placement Guarantee Courses
                      </span>
                      {[
                        "Full Stack Development Course",
                        "Product Management Course",
                        "Digital Marketing Course",
                      ].map((label) => (
                        <NavigationMenuLink key={label} href="#">
                          {label}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Jobs Dropdown */}
              <JobsDropdown />
            </NavigationMenuList>
          </NavigationMenu>

          {/* Chat Icon and Profile */}
          <div className="flex items-center gap-4">
            <button>
              <img
                src="message_new_hover.svg"
                width="24"
                height="24"
                className="h-6 w-6"
                alt="Message Icon"
              />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full border text-sm font-semibold">
              A
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
