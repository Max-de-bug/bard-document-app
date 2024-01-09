"use client";
import { cn } from "@/lib/utils";
import { ReactNode, createContext, useState, useContext } from "react";
import { useToast } from "../ui/use-toast";

interface FileProps {
  file: File | null;
  presignedURL: string | null;
  handleUpload: (file: File | null) => void;
  handleButtonClick: () => void;
  isUploading: boolean;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export const FileContext = createContext<FileProps>({
  file: null,
  presignedURL: null,
  isUploading: false,
  handleUpload: () => {},
  handleButtonClick: () => {},
  setFile: () => {},
});
export const FileContextProvider = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const [presignedURL, setPresignedURL] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const startSimulatedProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);
    return interval;
  };

  const handleUpload = async (uploadedFile: File | null) => {
    if (!uploadedFile) {
      // Handle case where no file is selected
      toast({
        title: "No File Selected",
        description: "Please select a file before uploading.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);

    const progressInterval = startSimulatedProgress();
    try {
      setIsUploading(true);

      const response = await fetch("http://127.0.0.1:8000/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          // Customize headers based on your server requirements
          // "Content-Type": "multipart/form-data", // Fetch API automatically sets this for FormData
        },
      });

      if (!response.ok) {
        toast({
          title: "Upload Failed!",
          description: "Please try again",
          variant: "destructive",
        });
      }

      const responseData = await response.json();
      console.log(responseData);
      setPresignedURL(responseData.presigned_url);

      toast({
        title: "Upload Successful",
        description: "Your file has been successfully uploaded.",
        variant: "default",
      });
    } catch (error) {
      // Handle upload error
      console.error("Upload error", error);

      // Show an error toast
      toast({
        title: "Upload Failed",
        description:
          "Something went wrong during the upload. Please try again.",
        variant: "destructive",
      });
    } finally {
      clearInterval(progressInterval);
      setUploadProgress(100);
      setIsUploading(false);
    }
  };

  const handleButtonClick = () => {
    handleUpload(file);
  };

  return (
    <FileContext.Provider
      value={{
        file,
        presignedURL,
        handleUpload,
        handleButtonClick,
        isUploading,
        setFile,
      }}
    >
      <div className="bg-white p-5 rounded min-h-full">
        <div
          className={cn(
            "flex  justify-between  md:flex-col sm:flex-col lg:flex-row",
            className
          )}
        >
          {children}
        </div>
      </div>
    </FileContext.Provider>
  );
};

// Use the context in your components like this:
// const fileContext = useContext(FileContext);
// Then access fileContext.file, fileContext.presignedURL, etc.
