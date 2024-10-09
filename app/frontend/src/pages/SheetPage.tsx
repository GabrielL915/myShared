import { useState, useMemo } from "react";
import SheetCard from "@/components/feature/SheetCard";
import { Button } from "@/components/ui/button";
import { Plus, PlusCircle, Search } from "lucide-react";
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
  const [selectedSheets, setSelectedSheets] = useState<Set<string>>(new Set()); // Para manter o controle de quais sheets estão selecionados
  const [newTag, setNewTag] = useState("");

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

  const handleSheetSelect = (repoName: string) => {
    setSelectedSheets((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(repoName)) {
        newSelected.delete(repoName);
      } else {
        newSelected.add(repoName);
      }
      return newSelected;
    });
  };

  const handleAddTag = () => {
    if (newTag.trim() === "") return;
    const updatedSheets = sheets.map((sheet) => {
      if (selectedSheets.has(sheet.repoName)) {
        return { ...sheet, tags: [...new Set([...sheet.tags, newTag])] };
      }
      return sheet;
    });
    setSelectedSheets(new Set());
    setNewTag("");
  };

  return (
    <div className="min-h-screen text-white">
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-200">Your Sheets</h1>
          <Button 
            onClick={handleCreateSheet} 
            className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Create Sheet
          </Button>
        </div>

        <div className="mb-6 flex items-center space-x-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search sheets..."
              className="pl-10 border-gray-700 text-white bg-[#1a1a1a]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-2 items-center flex-grow mr-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filterTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="relative inline-flex shrink-0">
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add new tag"
              className="w-32 bg-[#1a1a1a] border-none text-white placeholder-gray-500 pr-8 rounded-full h-7 text-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddTag();
                }
              }}
            />
            <button 
              onClick={handleAddTag}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredSheets.map((sheet, index) => (
            <SheetCard
              key={index}
              {...sheet}
              selected={selectedSheets.has(sheet.repoName)}
              onSelect={() => handleSheetSelect(sheet.repoName)}
            />
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