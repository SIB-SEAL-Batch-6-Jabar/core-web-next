import { CollectionBeforeChangeHook } from "payload/types";

export const populatePublishedAt: CollectionBeforeChangeHook = ({
  data,
  req,
  operation,
}) => {
  if (operation === "create" || operation === "update") {
    const now = new Date();
    return {
      ...data,
      publishedAt: now,
    };
  }

  return data;
};
