import { Access } from "payload/types";

export const isAdmin: Access = ({ req }) => {
  if (req?.user) {
    return true;
  }

  return false;
};

export const isAnyone: Access = () => true;

export const loggedInOrPublished: Access = ({ req: { user } }) => {
  if (user) {
    return true;
  }

  return {
    _status: {
      equals: "published",
    },
  };
};
