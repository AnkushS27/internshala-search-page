import { useState, useEffect, useMemo } from "react";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Clock,
  Home,
  ChevronRight,
  Building2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface Internship {
  id: number;
  title: string;
  company_name: string;
  company_logo: string;
  profile_name: string;
  location_names: string[];
  work_from_home: boolean;
  duration: string;
  stipend: {
    salary: string;
    salaryValue1: number;
  };
  posted_by_label: string;
  posted_by_label_type: string;
  labels_app_in_card: string[];
  part_time: boolean;
  is_international_job: boolean;
  office_days: string | null;
}

interface ApiResponse {
  internships_meta: Record<string, Internship>;
  internship_ids: number[];
}

// Define initialFilters for type inference and reuse
const initialFilters = {
  profile: "",
  location: "",
  workFromHome: false,
  partTime: false,
  internshipsInMyCity: false,
  minStipend: [0],
  startDate: "",
  maxDuration: "",
  withJobOffer: false,
  keyword: "",
};

const FilterSection = ({
  filters,
  setFilters,
}: {
  filters: typeof initialFilters;
  setFilters: React.Dispatch<React.SetStateAction<typeof initialFilters>>;
}) => (
  <div className="space-y-6 bg-white rounded-lg p-6">
    <div className="flex items-center justify-center gap-2 text-lg font-semibold">
      <Filter className="h-5 w-5 text-[#008bdc]" />
      Filters
    </div>

    <div className="flex items-center space-x-2">
      <Checkbox
        id="preferences"
        className="data-[state=checked]:bg-[#008bdc] data-[state=checked]:border-[#008bdc]"
      />
      <label htmlFor="preferences" className="text-sm">
        As per my{" "}
        <span className="text-[#008bdc] cursor-pointer">preferences</span>
      </label>
    </div>

    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Profile</label>
        <Input
          placeholder="e.g. Marketing"
          value={filters.profile}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, profile: e.target.value }))
          }
          className="border-gray-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Location</label>
        <Input
          placeholder="e.g. Delhi"
          value={filters.location}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, location: e.target.value }))
          }
          className="border-gray-300"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="city"
            checked={filters.internshipsInMyCity}
            onCheckedChange={(checked) =>
              setFilters((prev) => ({
                ...prev,
                internshipsInMyCity: !!checked,
              }))
            }
            className="data-[state=checked]:bg-[#008bdc] data-[state=checked]:border-[#008bdc]"
          />
          <label htmlFor="city" className="text-sm">
            Internships in my city
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="wfh"
            checked={filters.workFromHome}
            onCheckedChange={(checked) =>
              setFilters((prev) => ({ ...prev, workFromHome: !!checked }))
            }
            className="data-[state=checked]:bg-[#008bdc] data-[state=checked]:border-[#008bdc]"
          />
          <label htmlFor="wfh" className="text-sm">
            Work from home
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="parttime"
            checked={filters.partTime}
            onCheckedChange={(checked) =>
              setFilters((prev) => ({ ...prev, partTime: !!checked }))
            }
            className="data-[state=checked]:bg-[#008bdc] data-[state=checked]:border-[#008bdc]"
          />
          <label htmlFor="parttime" className="text-sm">
            Part-time
          </label>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-3 block">
          Desired minimum monthly stipend (₹)
        </label>
        <Slider
          value={filters.minStipend}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, minStipend: value }))
          }
          max={50000}
          step={1000}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0</span>
          <span>2K</span>
          <span>4K</span>
          <span>6K</span>
          <span>8K</span>
          <span>10K</span>
        </div>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="more-filters">
          <AccordionTrigger className="text-[#008bdc] hover:underline px-0">
            View more filters
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4 border-t">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Starting from (or after)
              </label>
              <Select
                value={filters.startDate}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, startDate: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately">Immediately</SelectItem>
                  <SelectItem value="1week">Within 1 week</SelectItem>
                  <SelectItem value="1month">Within 1 month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Max. duration (months)
              </label>
              <Select
                value={filters.maxDuration}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, maxDuration: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Month</SelectItem>
                  <SelectItem value="2">2 Months</SelectItem>
                  <SelectItem value="3">3 Months</SelectItem>
                  <SelectItem value="6">6 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="joboffer"
                checked={filters.withJobOffer}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({ ...prev, withJobOffer: !!checked }))
                }
                className="data-[state=checked]:bg-[#008bdc] data-[state=checked]:border-[#008bdc]"
              />
              <label htmlFor="joboffer" className="text-sm">
                Internships with job offer
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        variant="link"
        className="p-0 h-auto cursor-pointer"
        onClick={() =>
          setFilters({
            profile: "",
            location: "",
            workFromHome: false,
            partTime: false,
            internshipsInMyCity: false,
            minStipend: [0],
            startDate: "",
            maxDuration: "",
            withJobOffer: false,
            keyword: "",
          })
        }
      >
        Clear all
      </Button>
    </div>
  </div>
);

export default function InternshipSearch() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(initialFilters);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://internshala.com/hiring/search");
      const data: ApiResponse = await response.json();

      const internshipsList = data.internship_ids.map(
        (id) => data.internships_meta[id]
      );
      setInternships(internshipsList);
    } catch (error) {
      console.error("Error fetching internships:", error);
      // Fallback to mock data for demo
      setInternships(mockInternships);
    } finally {
      setLoading(false);
    }
  };

  const filteredInternships = useMemo(() => {
    return internships.filter((internship) => {
      // Profile filter
      if (
        filters.profile &&
        !internship.profile_name
          .toLowerCase()
          .includes(filters.profile.toLowerCase())
      ) {
        return false;
      }

      // Location filter
      if (
        filters.location &&
        !internship.location_names.some((loc) =>
          loc.toLowerCase().includes(filters.location.toLowerCase())
        )
      ) {
        return false;
      }

      // Work from home filter
      if (filters.workFromHome && !internship.work_from_home) {
        return false;
      }

      // Part-time filter
      if (filters.partTime && !internship.part_time) {
        return false;
      }

      // Internships in my city filter (assuming user is in Delhi for demo)
      if (filters.internshipsInMyCity) {
        const userCity = "Delhi"; // This would come from user's profile/location
        const isInUserCity =
          internship.location_names.some((loc) =>
            loc.toLowerCase().includes(userCity.toLowerCase())
          ) || internship.work_from_home;
        if (!isInUserCity) {
          return false;
        }
      }

      // Minimum stipend filter
      if (
        filters.minStipend[0] > 0 &&
        internship.stipend.salaryValue1 < filters.minStipend[0]
      ) {
        return false;
      }

      // With job offer filter
      if (filters.withJobOffer) {
        // Check if internship has job offer in labels
        const hasJobOffer = internship.labels_app_in_card?.some(
          (label) =>
            label.toLowerCase().includes("job offer") ||
            label.toLowerCase().includes("ppo")
        );
        if (!hasJobOffer) {
          return false;
        }
      }

      // Start date filter
      if (filters.startDate) {
        // For demo purposes, we'll assume all internships can start based on selection
        // In real implementation, you'd compare with actual start dates from the data
        const now = new Date();
        let canStart = true;

        switch (filters.startDate) {
          case "immediately":
            // All internships are available immediately for demo
            break;
          case "1week":
            // Filter internships that can start within 1 week
            break;
          case "1month":
            // Filter internships that can start within 1 month
            break;
          default:
            break;
        }

        if (!canStart) {
          return false;
        }
      }

      // Max duration filter
      if (filters.maxDuration) {
        const maxMonths = parseInt(filters.maxDuration);
        // Extract duration from internship.duration string (e.g., "3 Months" -> 3)
        const durationMatch = internship.duration.match(/(\d+)/);
        if (durationMatch) {
          const internshipMonths = parseInt(durationMatch[1]);
          if (internshipMonths > maxMonths) {
            return false;
          }
        }
      }

      // Keyword search
      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        const searchText =
          `${internship.title} ${internship.company_name} ${internship.profile_name}`.toLowerCase();
        if (!searchText.includes(keyword)) {
          return false;
        }
      }

      return true;
    });
  }, [internships, filters]);

  const InternshipCard = ({ internship }: { internship: Internship }) => (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              {internship.company_logo ? (
                <img
                  src={`https://internshala-uploads.internshala.com/logo%2F${internship.company_logo}`}
                  alt={internship.company_name}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />
              ) : null}
              <Building2
                className={`w-6 h-6 text-gray-400 ${
                  internship.company_logo ? "hidden" : ""
                }`}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{internship.title}</h3>
              <p className="text-gray-600 text-sm">{internship.company_name}</p>
            </div>
          </div>
          <div className="flex gap-1">
            {internship.labels_app_in_card?.map((label, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            {internship.work_from_home ? (
              <div className="flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Work from home</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{internship.location_names.join(", ")}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="font-medium">₹</span>
              <span>{internship.stipend.salary}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{internship.duration}</span>
            </div>
          </div>

          {internship.office_days && (
            <div className="text-xs text-gray-500">
              {internship.office_days}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-xs">
            <Clock className="w-3 h-3" />
            <span
              className={`${
                internship.posted_by_label_type === "success"
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {internship.posted_by_label}
            </span>
          </div>
          {internship.part_time && (
            <Badge variant="outline" className="text-xs">
              Part time
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="w-4 h-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Internships</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-80 h-fit sticky top-4">
            <div className="flex flex-col">
              <FilterSection filters={filters} setFilters={setFilters} />
              {/* Keyword Search */}
              <div className="mt-6 bg-white rounded-lg p-6">
                <label className="text-sm font-medium mb-2 block">
                  Keyword Search
                </label>
                <div className="relative">
                  <Input
                    placeholder="e.g. Design, Mumbai, Infosys"
                    value={filters.keyword}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        keyword: e.target.value,
                      }))
                    }
                    className="pr-12"
                  />
                  <Button
                    size="sm"
                    className="absolute right-[3px] top-[2px] bg-[#008bdc] rounded-sm hover:bg-[#78bee6]"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h1 className="text-2xl font-bold mb-2">
                {filteredInternships.length} Total Internships
              </h1>
              <p className="text-gray-600">
                Latest Summer Internships in India
              </p>

              {/* Mobile Filter Button */}
              <div className="lg:hidden mt-4 flex gap-4">
                <Sheet
                  open={showMobileFilters}
                  onOpenChange={setShowMobileFilters}
                >
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Filter className="w-4 h-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <FilterSection filters={filters} setFilters={setFilters} />
                  </SheetContent>
                </Sheet>

                <Button variant="outline">As per my preferences</Button>
                <Button variant="outline">Profile</Button>
              </div>

              {/* Keyword Search */}
              <div className="mt-6 md:hidden">
                <label className="text-sm font-medium mb-2 block">
                  Keyword Search
                </label>
                <div className="relative">
                  <Input
                    placeholder="e.g. Design, Mumbai, Infosys"
                    value={filters.keyword}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        keyword: e.target.value,
                      }))
                    }
                    className="pr-12"
                  />
                  <Button
                    size="sm"
                    className="absolute right-[3px] top-[2px] bg-[#008bdc] rounded-sm hover:bg-[#78bee6]"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Internship Listings */}
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#008bdc] mx-auto"></div>
                  <p className="mt-2 text-gray-600">Loading internships...</p>
                </div>
              ) : filteredInternships.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">
                    No internships found matching your criteria.
                  </p>
                </div>
              ) : (
                filteredInternships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Mock data for fallback
const mockInternships: Internship[] = [
  {
    id: 1,
    title: "Administration Intern",
    company_name: "Google",
    company_logo: "",
    profile_name: "Administration",
    location_names: ["Delhi"],
    work_from_home: false,
    duration: "2 Months",
    stipend: {
      salary: "₹ 20,000 /month",
      salaryValue1: 20000,
    },
    posted_by_label: "1 day ago",
    posted_by_label_type: "success",
    labels_app_in_card: ["Internship"],
    part_time: false,
    is_international_job: false,
    office_days: null,
  },
  {
    id: 2,
    title: "Data Science Intern",
    company_name: "TechCorp",
    company_logo: "",
    profile_name: "Data Science",
    location_names: [],
    work_from_home: true,
    duration: "3 Months",
    stipend: {
      salary: "₹ 25,000 /month",
      salaryValue1: 25000,
    },
    posted_by_label: "2 days ago",
    posted_by_label_type: "info",
    labels_app_in_card: ["Internship"],
    part_time: false,
    is_international_job: false,
    office_days: null,
  },
];
