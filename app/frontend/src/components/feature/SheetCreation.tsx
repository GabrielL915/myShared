import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const SheetCreation = () => {
  return (
    <div className="bg-gray-900 text-gray-300 p-6 rounded-lg max-w-3xl mx-auto">
      <Input
        placeholder="Sheet description..."
        className="mb-4 bg-gray-800 border-gray-700"
      />

      <div className="flex mb-4 gap-2">
        <Input
          placeholder="Filename including extension..."
          className="flex-grow bg-gray-800 border-gray-700"
        />
      </div>

      <Textarea
        className="mb-4 h-40 bg-gray-800 border-gray-700"
        placeholder="Enter your code here..."
      />

      <div className="flex justify-between">
        <Button variant="secondary" className="bg-gray-700">
          Add file
        </Button>
        <Button className="bg-green-600">
          Create secret sheet
          <ChevronDown size={16} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default SheetCreation;
