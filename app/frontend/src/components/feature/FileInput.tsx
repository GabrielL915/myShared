import { Input } from "@/components/ui/input";

interface FileInputProps {
  index: number;
}

const FileInput: React.FC<FileInputProps> = ({ index }) => {
  return (
    <div className="flex mb-4 gap-2">
      <Input
        placeholder={`Filename ${index + 1} including extension...`}
        className="flex-grow bg-gray-700 border-gray-600 text-gray-300"
      />
    </div>
  );
};

export default FileInput;
