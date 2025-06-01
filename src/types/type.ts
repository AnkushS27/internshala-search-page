
export interface Internship {
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

export interface ApiResponse {
  internships_meta: Record<string, Internship>;
  internship_ids: number[];
}

export interface StipendSliderProps {
  filters: typeof initialFilters;
  setFilters: React.Dispatch<React.SetStateAction<typeof initialFilters>>;
}
export const initialFilters = {
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