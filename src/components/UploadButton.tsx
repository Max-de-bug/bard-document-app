"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";
import axios from "axios";
import { File, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { useToast } from "./ui/use-toast";

const UploadDropzone = () => {
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
  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFile) => {
        setIsUploading(true);
        const progressInterval = startSimulatedProgress();
        if (acceptedFile.length > 0) {
          const file = acceptedFile[0] as File;
          try {
            const response = await axios.post("/api/upload", file.slice(), {
              headers: {
                "Content-Type": file.type,
              },
            });
          } catch (err) {
            console.error(err);
            toast({
              title: "Something went wrong",
              description: "Please try again later",
              variant: "destructive",
            });
          } finally {
            clearInterval(progressInterval);
            setUploadProgress(100);
            setIsUploading(false);
          }
        }
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 border-dashed border-gray-300 rounded-lg"
        />
      )}
    </Dropzone>
  );
};

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button className="text-zinc-100 bg-blue-500" size={"sm"}>
          Upload Word file
        </Button>
      </DialogTrigger>
      <DialogContent>
        <UploadDropzone />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
