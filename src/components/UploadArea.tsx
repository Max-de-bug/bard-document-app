"use client";

import React, { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";

const UploadArea = () => {
  const [file, setFile] = useState<File | null>(null);

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
        <input type="file" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default UploadArea;
