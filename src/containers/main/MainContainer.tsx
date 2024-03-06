import AboutMe from '@/containers/main/components/section-first';
import { Title } from '@/components';
import LinksBox from '@/containers/main/components/section-second';

function MainContainer() {
  return (
    <main className='m-auto max-w-1200pxr'>
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
      </section>
    </main>
  );
}

export default MainContainer;
