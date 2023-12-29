"use client";

import React, { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Cloud, File, Loader2 } from "lucide-react";
import { Progress } from "./ui/progress";
import Dashboard from "./Dashboard";

const UploadArea = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    setFile(uploadedFile !== undefined ? uploadedFile : null);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    if (file !== null) {
      formData.append("file", file);
      // Perform upload logic here using formData
    }
  };

  return (
    <div className="w-full p-4 shadow-lg mt-4 mb-8 h-80 min-h-72">
      <div className="p-8 border-2 border-dashed border-slate-400 w-full flex justify-center items-center	 flex-col gap-4 h-full relative">
        <span className="leading-normal text-center text-gray-400 text-lg text-b">
          Drag and Drop
          <br />
          or
          <br />
          Upload multiple document files
        </span>
        {file !== null ? (
          <div className="max-w-xs bg-gray-50 hover:bg-gray-200 flex items-center rounded-md  overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200 cursor-pointer">
            <div className="px-3 py-2 h-full grid place-items-center ">
              <File className="h-4 w-4 text-blue-500" />
            </div>
            <div className="px-3 py-2 h-full text-sm truncate ">
              {file?.name}
            </div>
          </div>
        ) : (
          <input type="file" onChange={handleFileChange} />
        )}
        {isUploading ? (
          <div className="w-full mt-4 max-w-xs mx-auto">
            <Progress
              indicatorColor={uploadProgress === 100 ? "bg-green-500" : ""}
              value={uploadProgress}
              className="h-1 w-full bg-zinc-200"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UploadArea;
