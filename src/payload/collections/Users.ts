import type { CollectionConfig } from "payload/types";
import { isAdmin } from "../access";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};
