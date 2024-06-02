import type { CollectionConfig } from "payload/types";
import { COLLECTION_SLUG_MEDIA, COLLECTION_SLUG_POSTS } from "../config";
import slugField from "../../fields/slug";
import { isAdmin, loggedInOrPublished } from "../../access";
import { populatePublishedAt } from "./hooks/populatePublishedAt";
import { revalidatePost } from "./hooks/revalidatePost";
import { lexicalHTML } from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: COLLECTION_SLUG_POSTS,
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePost],
  },
  access: {
    read: loggedInOrPublished,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "cover",
      label: "Cover Image",
      type: "upload",
      relationTo: COLLECTION_SLUG_MEDIA,
      required: true,
    },
    {
      name: "excerpt",
      label: "Excerpt",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
    },
    lexicalHTML("content", {
      name: "content_html",
    }),
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    slugField(),
  ],
};
