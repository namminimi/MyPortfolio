import { axiosInstance } from '@/utils/axiosInstance';

const getProject = async (id: number) => {
  try {
    const data = await axiosInstance.get(`project/${id}`);
    return data.data.result;
  } catch (error) {
    console.error(error);
  }
};

export default getProject;
