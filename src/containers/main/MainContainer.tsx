import AboutMe from '@/containers/main/components/section-first';
import { Title } from '@/components';
import LinksBox from '@/containers/main/components/section-second';
import ProjectsBox from './components/section-thired';
import { ProjectType } from '@/pages';

interface MainContainerType {
  projectLists: ProjectType[];
}

function MainContainer({ projectLists }: MainContainerType) {
  return (
    <main className='m-auto max-w-1140pxr px-20pxr tablet:max-w-1220pxr tablet:px-60pxr'>
      <section className='section-main'>
        <Title type='about' />
        <AboutMe />
      </section>
      <section className='section-main'>
        <Title type='links' />
        <LinksBox />
      </section>
      <section className='section-main'>
        <Title type='projects' />
        <ProjectsBox projectLists={projectLists} />
      </section>
    </main>
  );
}

export default MainContainer;
