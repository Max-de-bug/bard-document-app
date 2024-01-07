"use client";
import { useContext, useState } from "react";
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";
import { File, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { useToast } from "./ui/use-toast";
import Dashboard from "./Dashboard";
import { FileContext } from "./context/FileContext";

interface UploadButtonProps {
  file: File | null;
}

// const UploadDropzone = () => {
//   const { toast } = useToast();
//   const [isUploading, setIsUploading] = useState<boolean>(false);
//   const [uploadProgress, setUploadProgress] = useState<number>(0);
//   const startSimulatedProgress = () => {
//     setUploadProgress(0);
//     const interval = setInterval(() => {
//       setUploadProgress((prevProgress) => {
//         if (prevProgress >= 95) {
//           clearInterval(interval);
//           return prevProgress;
//         }
//         return prevProgress + 5;
//       });
//     }, 500);
//     return interval;
//   };
//   return (
//     <Dropzone
//       multiple={false}
//       onDrop={async (acceptedFile) => {
//         setIsUploading(true);
//         const progressInterval = startSimulatedProgress();
//         if (acceptedFile.length > 0) {
//           const file = acceptedFile[0] as File;
//           try {
//             const response = await axios.post("/api/upload", file.slice(), {
//               headers: {
//                 "Content-Type": file.type,
//               },
//             });
//           } catch (err) {
//             console.error(err);
//             toast({
//               title: "Something went wrong",
//               description: "Please try again later",
//               variant: "destructive",
//             });
//           } finally {
//             clearInterval(progressInterval);
//             setUploadProgress(100);
//             setIsUploading(false);
//           }
//         }
//       }}
//     >
//       {({ getRootProps, getInputProps, acceptedFiles }) => (
//         <>
//           <div
//             {...getRootProps()}
//             className="border h-64 border-dashed border-gray-300 rounded-lg"
//           />
//         </>
//       )}
//     </Dropzone>
//   );
// };

const UploadButton = () => {
  const fileContext = useContext(FileContext);
  const { handleButtonClick, isUploading, file } = fileContext;
  // const [presignedURL, setPresignedURL] = useState<string | null>(null);

  // const { toast } = useToast();
  // const [uploadProgress, setUploadProgress] = useState<number>(0);
  // const startSimulatedProgress = () => {
  //   setUploadProgress(0);
  //   const interval = setInterval(() => {
  //     setUploadProgress((prevProgress) => {
  //       if (prevProgress >= 95) {
  //         clearInterval(interval);
  //         return prevProgress;
  //       }
  //       return prevProgress + 5;
  //     });
  //   }, 500);
  //   return interval;
  // };

  // const handleUpload = async ({ file }: UploadButtonProps) => {
  //   if (!file) {
  //     // Handle case where no file is selected
  //     toast({
  //       title: "No File Selected",
  //       description: "Please select a file before uploading.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("file", file);

  //   const progressInterval = startSimulatedProgress();
  //   try {
  //     setIsUploading(true);

  //     const response = await fetch("http://127.0.0.1:8000/api/upload", {
  //       method: "POST",
  //       body: formData,
  //       headers: {
  //         // Customize headers based on your server requirements
  //         // "Content-Type": "multipart/form-data", // Fetch API automatically sets this for FormData
  //       },
  //     });
  //     if (!response.ok) {
  //       toast({
  //         title: "Upload Failed!",
  //         description: "Please try again",
  //         variant: "destructive",
  //       });
  //     }

  //     const responseData = response.json();
  //     responseData.then((data) => setPresignedURL(data.presigned_url));

  //     toast({
  //       title: "Upload Successful",
  //       description: "Your file has been successfully uploaded.",
  //       variant: "default",
  //     });
  //   } catch (error) {
  //     // Handle upload error
  //     console.error("Upload error", error);

  //     // Show an error toast
  //     toast({
  //       title: "Upload Failed",
  //       description:
  //         "Something went wrong during the upload. Please try again.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     clearInterval(progressInterval);
  //     setUploadProgress(100);
  //     setIsUploading(false);
  //   }
  // };
  // const handleButtonClick = () => {
  //   handleUpload({ file });
  // };
  return (
    <>
      <div className="w-full flex justify-center">
        {file ? (
          <Button
            className="text-zinc-100 bg-blue-500  hover:bg-blue-600"
            size={"sm"}
            onClick={handleButtonClick}
          >
            {isUploading ? <Loader2 className="animate-spin mr-2" /> : "Submit"}
          </Button>
        ) : (
          <Button
            className="text-zinc-100 bg-blue-500  hover:bg-blue-600"
            size={"sm"}
            disabled
          >
            Upload Word file
          </Button>
        )}
      </div>
    </>
  );
};

export default UploadButton;
