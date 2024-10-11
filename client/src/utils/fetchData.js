import axios from "axios";
import axiosInstance from "../config/instance";

export const getItemdata = async (type, itemId, user) => {
  try {
    const res = await axiosInstance.get(`/api/${type}/find/${itemId}`, {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
