"use client";
import { Button } from "@/components/ui/button";
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const  DownloadCV= () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Ensure CV.pdf is in the public directory
    link.download = 'Alishba_Moin_CV.pdf'; // Desired download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline" 
      size="lg"
      className="flex uppercase items-center gap-2"
    >
      <span>Download CV</span>
      <FiDownload className="text-lg" />
    </Button>
  );
};

export default DownloadCV;
