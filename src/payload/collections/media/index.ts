import { COLLECTION_SLUG_MEDIA } from "@/payload/collections/config";
import type { CollectionConfig } from "payload/types";
import { addContentHashToFile } from "./hooks/addContentHashToFile";
import { handleSvgUpload } from "./hooks/handleSvgUpload";
import { isAdmin, isAnyone } from "@/payload/access";

export const Media: CollectionConfig = {
  slug: COLLECTION_SLUG_MEDIA,
  upload: {
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 300,
        position: "centre",
      },
    ],
    adminThumbnail: ({ doc: media }) =>
      (media?.sizes as any)?.thumbnail?.url || media.url,
  },
  access: {
    read: isAnyone,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "title",
  },
  hooks: {
    beforeOperation: [addContentHashToFile],
    afterChange: [handleSvgUpload],
  },
  fields: [
    {
      name: "title",
      type: "text",
      admin: {
        style: { display: "none" },
        readOnly: true,
      },
    },
    {
      name: "rawContent",
      type: "textarea",
      admin: {
        disabled: true,
        readOnly: true,
      },
    },
  ],
};
