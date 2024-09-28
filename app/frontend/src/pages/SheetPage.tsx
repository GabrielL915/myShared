import React, { useState, useMemo } from "react";
import SheetCard from "@/components/feature/SheetCard";

interface Sheet {
  username: string;
  repoName: string;
  lastActive: string;
  description: string;
  fileCount: number;
  tags: string[];
}

const SheetsPage = () => {
  const sheets: Sheet[] = [
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
  ];

  const [filterTags, setFilterTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    sheets.forEach((sheet) => sheet.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, [sheets]);

  const filteredSheets = useMemo(() => {
    if (filterTags.length === 0) return sheets;
    return sheets.filter((sheet) =>
      filterTags.every((tag) => sheet.tags.includes(tag))
    );
  }, [sheets, filterTags]);

  const toggleTag = (tag: string) => {
    setFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      <main className="container mx-auto mt-8 px-4 max-w-3xl w-full">
        <div className="mb-4 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                filterTags.includes(tag)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden">
          {filteredSheets.map((sheet, index) => (
            <SheetCard key={index} {...sheet} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SheetsPage;
