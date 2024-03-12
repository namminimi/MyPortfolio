import { axiosInstance } from '@/utils/axiosInstance';

const getProjectList = async () => {
  try {
    const data = await axiosInstance.get('project');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getProjectList;
