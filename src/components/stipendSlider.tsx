import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import type { StipendSliderProps } from "@/types/type";

const formatStipendValue = (value: number): string => {
  if (value === 0) return "0";
  if (value >= 10000) return "10K+";
  return `${value / 1000}K`;
};

export default function StipendSlider(
  { filters, setFilters }: StipendSliderProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <label className="text-sm font-medium mb-3 block">
        Desired minimum monthly stipend (₹)
      </label>

      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider
          value={filters.minStipend}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, minStipend: value }))
          }
          max={10000}
          step={2000}
          className="w-full"
          onPointerDown={() => setIsHovered(true)}
          onPointerUp={() => setIsHovered(false)}
        />

        {isHovered && (
          <div
            className="absolute -top-8 bg-[#008bdc] text-white text-xs px-2 py-1 rounded pointer-events-none transition-all duration-200"
            style={{
              left: `${(filters.minStipend[0] / 10000) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            ₹{formatStipendValue(filters.minStipend[0])}
          </div>
        )}
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>0</span>
        <span>2K</span>
        <span>4K</span>
        <span>6K</span>
        <span>8K</span>
        <span>10K+</span>
      </div>
    </div>
  );
}
