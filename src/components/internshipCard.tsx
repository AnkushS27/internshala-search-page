import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Home, Building2 } from "lucide-react";
import type { Internship } from "@/types/type";

interface InternshipCardProps {
  internship: Internship;
  onClick: (internship: Internship) => void;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  internship,
  onClick,
}) => {
  return (
    <Card
      className="hover:shadow-md transition-shadow hover:scale-[1.005] cursor-pointer"
      onClick={() => onClick(internship)}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-semibold text-lg">{internship.title}</h3>
              <p className="text-gray-600 text-sm inline-flex items-center gap-2">
                {internship.company_name}{" "}
                <span className="flex gap-1">
                  {internship.labels_app_in_card?.map((label, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {label}
                    </Badge>
                  ))}
                </span>
              </p>
            </div>
          </div>
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            {internship.company_logo ? (
              <img
                src={`https://internshala-uploads.internshala.com/logo/${internship.company_logo}`}
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
                <span className="flex-grow min-w-0 break-words">
                  {internship.location_names.join(", ")}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {internship.stipend.salary}
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
          <div
            className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md flex-grow min-w-0 ${ 
              internship.posted_by_label_type === "success"
                ? "text-[#2fb212] bg-[#f1ffe5]"
                : "text-[#333333] bg-[#f8f8f8]"
            }`}
          >
            <Clock className="w-3 h-3 mr-1" />
            <span className="break-words">{internship.posted_by_label}</span>
          </div>
          {internship.part_time && (
            <Badge variant="outline" className="text-xs ml-2">
              Part time
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;