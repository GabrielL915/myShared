import { useState, useMemo } from "react";
import SheetCard from "@/components/feature/SheetCard";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface Sheet {
  username: string;
  repoName: string;
  lastActive: string;
  description: string;
  fileCount: number;
  tags: string[];
}

const SheetsPage = () => {
  const sheets: Sheet[] = useMemo(
    () => [
      {
        username: "GabrielL915",
        repoName: "repository.ts",
        lastActive: "2 weeks ago",
        description: "Repository interface",
        fileCount: 2,
        tags: ["TypeScript", "Interface"],
      },
      {
        username: "GabrielL915",
        repoName: "api-client.js",
        lastActive: "1 month ago",
        description: "API client implementation",
        fileCount: 1,
        tags: ["JavaScript", "API"],
      },
      {
        username: "GabrielL915",
        repoName: "utils.py",
        lastActive: "3 days ago",
        description: "Utility functions",
        fileCount: 3,
        tags: ["Python", "Utilities"],
      },
      {
        username: "GabrielL915",
        repoName: "package.json",
        lastActive: "1 year ago",
        description: "Package configuration",
        fileCount: 1,
        tags: ["JSON", "Configuration"],
      },
    ],
    []
  );
  const navigate = useNavigate();
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    sheets.forEach((sheet) => sheet.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, [sheets]);

  const filteredSheets = useMemo(() => {
    return sheets.filter((sheet) => 
      (filterTags.length === 0 || filterTags.every((tag) => sheet.tags.includes(tag))) &&
      (searchQuery === "" || sheet.repoName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [sheets, filterTags, searchQuery]);

  const toggleTag = (tag: string) => {
    setFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleCreateSheet = () => {
    navigate("/create");
  };

  return (
    <div className="min-h-screen text-white">
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Your Sheets</h1>
          <Button onClick={handleCreateSheet} className="bg-green-600 hover:bg-green-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Sheet
          </Button>
        </div>
        
        <div className="mb-6 flex items-center space-x-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search sheets..."
              className="pl-10 border-gray-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filterTags.includes(tag)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSheets.map((sheet, index) => (
            <SheetCard key={index} {...sheet} />
          ))}
        </div>

        {filteredSheets.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No sheets found. Try adjusting your search or filters.
          </div>
        )}
      </main>
    </div>
  );
};

export default SheetsPage;