import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StipendSlider from "@/components/stipendSlider";
import { initialFilters } from "@/types/type";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

const FilterSection = ({
  filters,
  setFilters,
}: {
  filters: typeof initialFilters;
  setFilters: React.Dispatch<React.SetStateAction<typeof initialFilters>>;
}) => (
  <div className="space-y-6 shadow-sm bg-white rounded-lg p-6">
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

      <StipendSlider filters={filters} setFilters={setFilters} />

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

export default FilterSection;