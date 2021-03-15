import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { Readable } from "stream";
import { getEnvironmentVariable } from "../node/environment";

const getBucketName = () => getEnvironmentVariable("DEFAULT_BUCKET_NAME");

export const streamToString = async (stream: Readable): Promise<string> => {
  const chunks: Uint8Array[] = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
};

const getArticleContentKey = (id: string) => `articles/${id}/content.json`;

export const getArticleContent = async (id: string): Promise<string> => {
  const obj = await new S3Client({}).send(
    new GetObjectCommand({
      Bucket: getBucketName(),
      Key: getArticleContentKey(id),
    })
  );
  if (obj.Body === undefined) {
    throw new Error(`Body is undefined for [${id}].`);
  }
  if (!(obj.Body instanceof Readable)) {
    throw new Error(`Body is not a readable stream for [${id}].`);
  }
  const str = streamToString(obj.Body);
  return str;
};

export const putArticleContent = async (
  id: string,
  content: string
): Promise<void> => {
  await new S3Client({}).send(
    new PutObjectCommand({
      Bucket: getBucketName(),
      Key: getArticleContentKey(id),
      Body: content,
    })
  );
};
