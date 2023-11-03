"use client"

import React from 'react';
import { saveAs } from 'file-saver';
import { Button } from './ui/button';

interface DownloadButtonProps {
    filePath: string;
    fileName: string
}

const DownloadBronchure: React.FC<DownloadButtonProps> = ({ filePath, fileName }) => {
    const handleDownload = () => {
        saveAs(filePath, fileName);
    };

    return (
        <Button
        asChild
            className="bg-white text-[#FF00F8] lg:w-1/2 w-full h-auto cursor-pointer mt-6"
            onClick={handleDownload}
        >
            <p className="py-4 px-16 text-sm lg:text-xl font-semibold">
                Download Brochure
            </p>
        </Button>
    );
};

export default DownloadBronchure;
