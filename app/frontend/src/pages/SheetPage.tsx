import SheetCard from "@/components/feature/SheetCard";

const SheetsPage = () => {
    const sheets = [
        { username: 'GabrielL915', repoName: 'repository.ts', lastActive: '2 weeks ago', description: 'Repository interface', fileCount: 2 },
        { username: 'GabrielL915', repoName: 'api-client.js', lastActive: '1 month ago', description: 'API client implementation', fileCount: 1 },
        { username: 'GabrielL915', repoName: 'utils.py', lastActive: '3 days ago', description: 'Utility functions', fileCount: 3 },
      ];
    
      return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center">
          <header className="bg-gray-900 p-4 w-full text-center">
            <h1 className="text-2xl font-bold">Your Sheets</h1>
          </header>
          <main className="container mx-auto mt-8 px-4 max-w-3xl w-full">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              {sheets.map((sheet, index) => (
                <SheetCard key={index} {...sheet} />
              ))}
            </div>
          </main>
        </div>
      );
    };
  
  export default SheetsPage;