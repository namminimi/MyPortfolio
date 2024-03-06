import AboutMe from '@/containers/main/components/section-first';
import { Title } from '@/components';
import LinksBox from '@/containers/main/components/section-second';
import ProjectsBox from './components/section-thired';

function MainContainer() {
  return (
    <main className='m-auto max-w-1100pxr'>
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
        <ProjectsBox />
      </section>
    </main>
  );
}

export default MainContainer;
