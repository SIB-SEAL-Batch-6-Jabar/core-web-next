import { postgresAdapter } from "@payloadcms/db-postgres"; // database-adapter-import
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import {
  FixedToolbarFeature,
  HTMLConverterFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
// import sharp from 'sharp'
import { fileURLToPath } from "url";

import { Users } from "./payload/collections/Users";
import { readFileSync } from "fs";

import { s3Storage as s3StoragePlugin } from "@payloadcms/storage-s3";
import { COLLECTION_SLUG_MEDIA } from "./payload/collections/config";
import { S3_PLUGIN_CONFIG } from "./payload/plugins/s3";

import sharp from "sharp";
import { Posts } from "./payload/collections/Posts";
import { Media } from "./payload/collections/media";
import { getCertificate } from "./db-certificate";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  localization: {
    locales: ["en", "id"],
    defaultLocale: "en",
    fallback: true,
  },
  collections: [Users, Posts, Media],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
      HTMLConverterFeature({}),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
      ssl: {
        rejectUnauthorized: false,
        ca: getCertificate(),
      },
    },
  }),

  plugins: [
    s3StoragePlugin({
      ...S3_PLUGIN_CONFIG,
      collections: {
        [COLLECTION_SLUG_MEDIA]: {
          disableLocalStorage: true,
          generateFileURL: (args: any) => {
            return `https://${process.env.NEXT_PUBLIC_S3_HOSTNAME}/${args.prefix}/${args.filename}`;
          },
          prefix: process.env.NEXT_PUBLIC_UPLOAD_PREFIX || "media",
        },
      },
    }),
  ],

  sharp,
});
