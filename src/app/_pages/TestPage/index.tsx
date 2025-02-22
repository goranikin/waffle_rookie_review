'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

export const TestPage = () => {
  const [previewImg, setPreviewImg] = useState<File>();

  const saveHandler = async () => {
    if (!previewImg) return;

    const formData = new FormData();
    formData.append('image', previewImg);

    const result = await fetch('/api', {
      method: 'POST',
      body: formData,
    }).then((res) => res);

    if (result.status === 200) {
      alert('Successfully uploaded');
    }
  };

  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) setPreviewImg(e.target.files[0]);
  };

  return (
    <div className="flex w-full h-full p-10 ">
      <form className="flex flex-col items-center w-full gap-10">
        <input type="file" onChange={(e) => fileHandler(e)} />
        {previewImg && <Image src={URL.createObjectURL(previewImg)} alt="Preview Image" width={400} height={400} />}
        <button type="button" onClick={() => saveHandler()} className="bg-gray-300 px-6 py-4 text-gray-900">
          save
        </button>
      </form>
    </div>
  );
};
