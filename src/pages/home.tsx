import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant="link"
        className="text-lg font-semibold px-8 py-6 bg-[#008bdc] text-white rounded hover:bg-blue-700 transition"
      >
        <a href="/internships" className="flex items-center gap-2">
        Go to Internships
        </a>
      </Button>
    </div>
  );
}