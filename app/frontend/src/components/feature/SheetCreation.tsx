import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const SheetCreation = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <main className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Create a New Sheet</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <Input
            placeholder="Sheet description..."
            className="mb-4 bg-gray-700 border-gray-600 text-gray-300"
          />

          <div className="flex mb-4 gap-2">
            <Input
              placeholder="Filename including extension..."
              className="flex-grow bg-gray-700 border-gray-600 text-gray-300"
            />
          </div>

          <Textarea
            className="mb-4 h-40 bg-gray-700 border-gray-600 text-gray-300"
            placeholder="Enter your code here..."
          />

          <div className="flex justify-between items-center">
            <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600">
              Add file
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 flex items-center">
              Create secret sheet
              <ChevronDown size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SheetCreation;
