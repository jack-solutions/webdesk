import axios from "axios";
import {
  getSubjectsFailure,
  getSubjectsStart,
  getSubjectsSuccess,
} from "./SubjectsActions";
import axiosInstance from "../../config/instance";

export const getSubjects = async (user, dispatch) => {
  dispatch(getSubjectsStart());

  try {
    const res = await axiosInstance.get("/api/subject/all?course=BCA", {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });

    // console.log(res.data);
    dispatch(getSubjectsSuccess(res.data));
  } catch (err) {
    dispatch(getSubjectsFailure(err));
  }
};
