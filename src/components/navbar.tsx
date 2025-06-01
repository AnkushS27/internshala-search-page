"use client"

import { useState } from "react"
import { Badge } from "./ui/badge"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { useDropdown } from '@/lib/dropdownContext';

type JobTab = "Top Locations" | "Top Categories" | "Explore More Jobs"

const JobsDropdown = () => {
  const [activeTab, setActiveTab] = useState<JobTab>("Top Locations")
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
    "Explore More Jobs": ["Jobs by Category", "Jobs by Location", "Jobs by Designation", "Jobs by Skill"],
  }

  return (
    <NavigationMenuItem className="h-18">
      <NavigationMenuTrigger className="h-18 hover:text-[#008bdc]">Jobs</NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white p-4 rounded-md md:min-w-[450px] min-h-[350px]">
        <div className="flex">
          {/* Left Tabs */}
          <div className="pr-6 w-1/2 flex flex-col gap-3 text-sm">
            {Object.keys(jobContent).map((label) => (
              <div
                key={label}
                onMouseEnter={() => setActiveTab(label as JobTab)}
                className={`cursor-pointer px-2 py-3 rounded-r-lg ${
                  activeTab === label ? "text-[#008bdc] font-semibold bg-[#eafcff]" : ""
                }`}
              >
                {label}
              </div>
            ))}
            <div className="flex items-center gap-1 cursor-pointer">
              <NavigationMenuLink href="#">Placement Guarantee Courses</NavigationMenuLink>
              <span className="bg-orange-400 text-white text-[10px] font-bold px-1.5 py-[2px] rounded">NEW</span>
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
  )
}

type InternshipTab = "Top Locations" | "Top Categories" | "Explore More Internships"

const InternshipsDropdown = () => {
  const [activeTab, setActiveTab] = useState<InternshipTab>("Top Locations")

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
  }

  return (
    <NavigationMenuItem className="h-18">
      <NavigationMenuTrigger className="h-18 hover:text-[#008bdc]">Internships</NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white p-4 rounded-md md:min-w-[450px] min-h-[300px]">
        <div className="flex">
          {/* Left Tabs */}
          <div className="pr-6 w-1/2 flex flex-col gap-3 text-sm">
            {Object.keys(internshipContent).map((label) => (
              <div
                key={label}
                onMouseEnter={() => setActiveTab(label as InternshipTab)}
                className={`cursor-pointer px-2 py-3 rounded-r-lg ${
                  activeTab === label ? "text-[#008bdc] font-semibold bg-[#eafcff]" : ""
                }`}
              >
                {label}
              </div>
            ))}
            <div className="flex items-center gap-1 cursor-pointer">
              <NavigationMenuLink href="#">Placement Guarantee Courses</NavigationMenuLink>
              <span className="bg-orange-400 text-white text-[10px] font-bold px-1.5 py-[2px] rounded">NEW</span>
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
  )
}

// Mobile Navigation Component
const MobileNavigation = () => {
  return (
    <div className="flex p-6 flex-col w-full space-y-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="internships">
          <AccordionTrigger className="py-3">Internships</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-3 pl-4">
              <h3 className="font-medium text-sm">Top Locations</h3>
              <div className="flex flex-col space-y-2 pl-2">
                <a href="#" className="text-sm">
                  Work from Home
                </a>
                <a href="#" className="text-sm">
                  Internship in Bangalore
                </a>
                <a href="#" className="text-sm">
                  Internship in Delhi
                </a>
                <a href="#" className="text-sm">
                  Internship in Mumbai
                </a>
                <a href="#" className="text-sm">
                  View all locations
                </a>
              </div>

              <h3 className="font-medium text-sm mt-2">Top Categories</h3>
              <div className="flex flex-col space-y-2 pl-2">
                <a href="#" className="text-sm">
                  Engineering internships
                </a>
                <a href="#" className="text-sm">
                  MBA internships
                </a>
                <a href="#" className="text-sm">
                  Media internships
                </a>
                <a href="#" className="text-sm">
                  View all categories
                </a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="courses">
          <AccordionTrigger className="py-3">
            <span className="inline-flex items-center gap-2">
              Courses
              <Badge variant="offer">OFFER</Badge>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-3 pl-4">
              <h3 className="font-medium text-sm">Certification Courses</h3>
              <div className="flex flex-col space-y-2 pl-2">
                <a href="#" className="text-sm">
                  Web Development
                </a>
                <a href="#" className="text-sm">
                  Machine Learning
                </a>
                <a href="#" className="text-sm">
                  Digital Marketing
                </a>
                <a href="#" className="text-sm">
                  View all courses
                </a>
              </div>

              <h3 className="font-medium text-sm mt-2">Placement Guarantee Courses</h3>
              <div className="flex flex-col space-y-2 pl-2">
                <a href="#" className="text-sm">
                  Full Stack Development Course
                </a>
                <a href="#" className="text-sm">
                  Product Management Course
                </a>
                <a href="#" className="text-sm">
                  Digital Marketing Course
                </a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="jobs">
          <AccordionTrigger className="py-3">Jobs</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-3 pl-4">
              <h3 className="font-medium text-sm">Top Locations</h3>
              <div className="flex flex-col space-y-2 pl-2">
                <a href="#" className="text-sm">
                  Work from home
                </a>
                <a href="#" className="text-sm">
                  Jobs in Delhi
                </a>
                <a href="#" className="text-sm">
                  Jobs in Mumbai
                </a>
                <a href="#" className="text-sm">
                  View all jobs
                </a>
              </div>

              <h3 className="font-medium text-sm mt-2">Top Categories</h3>
              <div className="flex flex-col space-y-2 pl-2">
                <a href="#" className="text-sm">
                  Fresher jobs
                </a>
                <a href="#" className="text-sm">
                  Marketing jobs
                </a>
                <a href="#" className="text-sm">
                  Content writing jobs
                </a>
                <a href="#" className="text-sm">
                  View all categories
                </a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

const Header = () => {
  const { setDropdownOpen } = useDropdown(); // Use the context hook [cite: 1]

  return (
    <header className="flex justify-center items-center w-full bg-white h-18 relative z-50"> {/* Add relative z-50 */}
      <div className="flex items-center max-w-[1200px] w-full justify-between px-4 md:px-6">
        <div className="flex md:hidden items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex-1 py-4">
                  <MobileNavigation />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 h-18">
          <NavigationMenu className="h-18" onValueChange={(value) => setDropdownOpen(!!value)}> {/* [cite: 1] */}
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
                <NavigationMenuContent className="bg-white p-4 rounded-md md:min-w-[450px] min-h-[300px]">
                  <div className="flex divide-x">
                    <div className="pr-6 w-1/2 flex flex-col gap-2 text-sm">
                      <span className="font-semibold text-black">Certification Courses</span>
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
                      <NavigationMenuLink href="#" className="font-semibold">
                        View 70+ more courses
                      </NavigationMenuLink>
                    </div>
                    <div className="pl-6 w-1/2 flex flex-col gap-2 text-sm">
                      <span className="font-semibold text-black">Placement Guarantee Courses</span>
                      {["Full Stack Development Course", "Product Management Course", "Digital Marketing Course"].map(
                        (label) => (
                          <NavigationMenuLink key={label} href="#">
                            {label}
                          </NavigationMenuLink>
                        ),
                      )}
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
              <img src="message_new_hover.svg" width="24" height="24" className="h-6 w-6" alt="Message Icon" />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full border text-sm font-semibold">
              A
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <button className="mr-2">
            <img src="message_new_hover.svg" width="24" height="24" className="h-6 w-6" alt="Message Icon" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header