import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const getCertificate = () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const region = process.env.DATABASE_REGION || "us-east-1";
  let ca = "ca-aws.pem";

  if (region === "us-east-1") {
    ca = "ca-aws-prod.pem";
  } else if (region === "ap-southeast-1") {
    ca = "ca-aws.pem";
  }

  return readFileSync(path.resolve(dirname, ca)).toString();
};
