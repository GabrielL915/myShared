import { useRef, FC, ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { ALLOWED_FILE_TYPES, AllowedType } from "@/shared/file-type";

interface FileUploadProps {
  onFileSelect: (file: File[] & { type: AllowedType }) => void;
}

const FileUpload: FC<FileUploadProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [, setSelectFiles] = useState<File[]>([]);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const allowedTypes = Object.values(ALLOWED_FILE_TYPES).flat();
      const validFiles: File[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileSizeMB = file.size / (1024 * 1024);

        if (!allowedTypes.includes(file.type as AllowedType)) {
          alert("Invalid file type");
          continue;
        }

        if (fileSizeMB > 5) {
          alert("File size should be less than 5MB");
          continue;
        }

        validFiles.push(file);
      }
      setSelectFiles(validFiles);
      onFileSelect(validFiles as File[] & { type: AllowedType });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Button onClick={handleFileClick}>Select Files</Button>
      <input
        type="file"
        ref={fileInputRef}
        accept={Object.values(ALLOWED_FILE_TYPES).flat().join(",")}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};
export default FileUpload;
