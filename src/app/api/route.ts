import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

const Bucket = process.env.AMPLIFY_BUCKET as string;
const s3 = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export const POST = async (req: NextRequest) => {
  const form = await req.formData();
  const file = form.get('image') as File;

  if (!file || file.size === 0) {
    return new Response('No file uploaded', { status: 404 });
  }

  const buffer = await file.arrayBuffer();

  const fileParams = {
    Bucket: Bucket,
    Key: file.name,
    Body: new Uint8Array(buffer),
    ContentType: file.type,
  };

  await s3.send(new PutObjectCommand(fileParams));

  const url = `https://${fileParams.Bucket}.s3.amazonaws.com/${fileParams.Key}`;

  return NextResponse.json({ url }, { status: 200 });
};
