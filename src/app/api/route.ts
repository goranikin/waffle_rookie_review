  import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
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
      return NextResponse.json('No file uploaded', { status: 404 });
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
  
  export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get('key');
  
    if (!key) {
      return NextResponse.json({ error: "Missing 'key' parameter" }, { status: 400 });
    }
  
    const fileParams = {
      Bucket: Bucket,
      Key: key,
    };
  
    const s3Response = await s3.send(new GetObjectCommand(fileParams));
  
    const stream = s3Response.Body as ReadableStream;
    const headers = new Headers();
    headers.set('Content-Type', s3Response.ContentType || 'application/octet-stream');
  
    return new NextResponse(stream, { headers });
  };
  
  export const DELETE = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get('key');
  
    if (!key) {
      return NextResponse.json({ error: "Missing 'key' parameter" }, { status: 400 });
    }
  
    const fileParams = {
      Bucket: Bucket,
      Key: key,
    };
  
    await s3.send(new DeleteObjectCommand(fileParams));
  
    return NextResponse.json({ status: 200 });
  };
