'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

export const TestPage = () => {
  const [previewImg, setPreviewImg] = useState<File>();
  const [imageSrc, setImageSrc] = useState('');

  const getImageHandler = async () => {
    const response = await fetch(`/api?key=Screenshot 2025-02-22 at 1.31.05 PM.png`);

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageSrc(url);
    }
  };

  const saveHandler = async () => {
    if (!previewImg) return;

    const formData = new FormData();
    formData.append('image', previewImg);

    const result = await fetch('/api', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    if (result.status === 200) {
      alert('Successfully uploaded the image');
    }
  };

  const deleteHandler = async () => {
    const result = await fetch('/api?key=Screenshot 2025-02-22 at 1.31.05 PM.png', {
      method: 'DELETE',
    }).then((res) => res.json());

    if (result.status === 200) {
      alert('Successfully deleted the image');
    }
  };

  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) setPreviewImg(e.target.files[0]);
  };

  return (
    <div className="flex flex-col gap-20 w-full h-full p-10 ">
      <form className="flex flex-col items-center w-full gap-10">
        <input type="file" onChange={(e) => fileHandler(e)} />
        {previewImg && <Image src={URL.createObjectURL(previewImg)} alt="Preview Image" width={400} height={400} />}
        <button type="button" onClick={saveHandler} className="bg-gray-300 px-6 py-4 text-gray-900">
          save
        </button>
      </form>
      <div className="w-full flex flex-col gap-10">
        <button onClick={getImageHandler} className="bg-gray-300 px-6 py-4 text-gray-900">
          Test Get button
        </button>
        {imageSrc && <Image src={imageSrc} alt="Fetched from S3" width={400} height={400} />}
      </div>

      <div className="w-full flex flex-col gap-10">
        <button onClick={deleteHandler} className="bg-gray-300 px-6 py-4 text-gray-900">
          Delete Image
        </button>
      </div>
    </div>
  );
};
