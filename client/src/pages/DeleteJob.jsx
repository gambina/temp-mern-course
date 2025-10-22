import React from "react";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
  } catch (error) {
    console.log(error);
  }
  return redirect("/dashboard/all-jobs");
};
const DeleteJob = () => {
  return <div>DeleteJob</div>;
};

export default DeleteJob;
