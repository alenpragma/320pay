import axiosInstance from "../../utils/axiosConfig";

export const fetchApi = async (api: string) => {
  const response = await axiosInstance(api);
  return response;
};
