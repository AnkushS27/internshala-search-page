// src/components/InternshipDetailsModal.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
import type { Internship } from "@/types/type"; // Assuming your types are defined here

interface InternshipDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  internship: Internship | null;
}

const InternshipDetailsModal: React.FC<InternshipDetailsModalProps> = ({
  isOpen,
  onClose,
  internship,
}) => {
  if (!internship) return null; // Don't render if no internship is selected

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{internship.title}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {internship.company_name}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <MapPin className="w-4 h-4" />
            <span>
              {internship.work_from_home
                ? "Work from home"
                : internship.location_names.join(", ")}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Calendar className="w-4 h-4" />
            <span>{internship.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>Stipend: {internship.stipend.salary}</span>
          </div>
          {/* Add more details here as needed */}
          <h4 className="font-semibold mt-4">About the Internship:</h4>
          <p className="text-sm text-gray-700">
            This is a placeholder for detailed description. For a real application,
            you would fetch more detailed information about the internship
            (responsibilities, skills, etc.) using the `internship.id` or
            `internship.url` to make another API call to retrieve the complete
            details.
          </p>
          <Button className="w-full bg-[#008bdc] hover:bg-[#78bee6]">
            Apply Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InternshipDetailsModal;