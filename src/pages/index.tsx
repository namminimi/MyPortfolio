import { Footer, Header } from '@/components';
import MainContainer from '@/containers/main/MainContainer';
import getProjectList from '@/data/projects';

export interface ProjectType {
  p_no: number;
  p_title: string;
  p_date: string;
  p_frontend: string;
  p_party: string;
  p_backend?: string;
  p_design?: string;
  p_images: string;
  p_function: string;
  p_git: string;
  p_intro: string;
  p_main_image: string;
  p_problem: string;
  p_url?: string;
  p_language: string;
}

export interface ProjectListType {
  projectLists: ProjectType[];
}

export async function getServerSideProps() {
  try {
    const data = await getProjectList();
    const projectLists = data ?? { data: [] };
    return {
      props: {
        projectLists: projectLists.data.result,
      },
    };
  } catch (error) {
    return {
      props: {
        projectLists: null,
      },
    };
  }
}

export default function Home({ projectLists }: ProjectListType) {
  return (
    <>
      <Header />
      <MainContainer projectLists={projectLists} />
      <Footer />
    </>
  );
}
