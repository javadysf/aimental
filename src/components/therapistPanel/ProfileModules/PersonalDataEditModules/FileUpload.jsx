import { uploadCover } from '@/core/services/api/Questionnaire/questionnaire';
import React, { useState } from 'react';

const FileUploade = ({editedprofile,setEditedProfile}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
console.log(selectedFiles);
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    setSelectedFiles([...selectedFiles, ...Array.from(files)]);
  };

  const handleFileChange = async(e) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles([...selectedFiles,{name:e.target.files[0]?.name,file:files,is_public:"true"}]);
    }
    const res = await uploadCover({name:e.target.files[0]?.name,file:files[0],is_public:"true",description:"medical records"})
    setEditedProfile({...editedprofile,medical_record:[...editedprofile?.medical_record,res?.id]})
    
  };
console.log(editedprofile);
  return (
    <div
      className={`col p-4 gap-2 border-2 border-dashed border-zinc-400 rounded-lg cursor-pointer ${
        isDragging ? 'bg-gray-100' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-input')?.click()}
    >
      <svg className='self-center text-neutral-800 bi bi-upload' xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
</svg>
      <input
        id="file-input"
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      <p className="self-center text-gray-600">
        {selectedFiles.length > 0
          ? `${selectedFiles.length} file(s) selected`
          : 'Click or drag file to this area to upload'}
      </p>
      <ul className="mt-2">
        {selectedFiles.map((file, index) => (
          <li key={index} className="text-gray-600">
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploade;