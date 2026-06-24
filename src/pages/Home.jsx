import {
  HiAcademicCap,
  HiArrowPathRoundedSquare,
  HiBriefcase,
  HiMusicalNote
} from 'react-icons/hi2';
import { useRef } from 'react';
import NavBar from '../components/home/nav/NavBar';
import BackgroundCanvas from '../components/home/background/BackgroundCanvas';
import Section from '../components/home/sections/Section';
import HomeSection from '../components/home/sections/HomeSection';
import SubSection from '../components/home/sections/SubSection';
import PortfolioGrid from '../components/home/portfolio/PortfolioGrid';
import PortfolioCard from '../components/home/portfolio/PortfolioCard';
import Footer from '../components/home/footer/Footer';
import ContactForm from '../components/home/form/ContactForm';
import SkillsSection from '../components/home/skills/SkillsSection';

const isMobileOrTablet = (() => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      // eslint-disable-next-line no-useless-escape
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check || window.innerWidth <= 768;
})();

export default function Home() {
  const sectionsRefs = {
    home: useRef(),
    about: useRef(),
    portfolio: useRef(),
    skills: useRef(),
    resume: useRef(),
    contact: useRef()
  };

  function goToUrl(url, event) {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, '_blank').focus();
  }

  return (
    <>
      <NavBar sectionsRefs={sectionsRefs} />
      <HomeSection sectionsRefs={sectionsRefs} />
      <div className="relative">
        {!isMobileOrTablet && <BackgroundCanvas />}
        <Section sectionsRefs={sectionsRefs} name="about" title="About">
          <p>
            I am a full stack developer focused on building real-world web applications from scratch. Over the past year, my self-study journey has led me to master the MERN stack — designing and developing complete projects independently, from database to UI.
          </p>
          <p>
            My experience includes building a job portal with role-based authentication using React, Node.js, Express and MongoDB, as well as a full-featured e-commerce platform with an admin panel and cloud-based media management. I am also a self-published author with 500+ copies sold, which reflects my ability to take an idea from zero to a finished, marketable product.
          </p>
          <p className="m-0">
            This website was developed using React, Three.js and React Three Fiber and I did the UI design entirely by myself without any template. The source code is available in my GitHub profile. Feel free to check it out!
          </p>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="projects" title="Projects">
          <PortfolioGrid>
            <PortfolioCard
              date="2026"
              title="HireFlow"
              link="https://job-portal-client-kappa-indol.vercel.app/"
              keywords="#react #nodejs #mongodb #express #clerkAuth #fullstack #jobPortal">
               <p> A full-stack job portal where recruiters can post jobs and candidates can browse and apply. Built
  with Clerk-based authentication, role-based dashboards for both user types, and a clean responsive
  UI. </p>
  <button
                className="text-beige"
                onClick={(event) => {
                  goToUrl('https://github.com/anmolbohare/job-portal', event);
                }}>
                Github repository
              </button>
            </PortfolioCard>
            <PortfolioCard
              date="2026"
              title="Lyriq"
              link="https://lyriq-one.vercel.app/"
              keywords="#react #nodejs #mongodb #cloudinary #jwt #fullstack #ecommerce">
              <p>
                A complete e-commerce platform with product listings, cart management, order placement and an
  admin panel for managing products and orders. Features JWT authentication, Cloudinary for media
  uploads and a Vite-powered React frontend connected to a Node/Express backend.
              </p>
              <button
                className="text-beige"
                onClick={(event) => {
                  goToUrl('https://github.com/anmolbohare/lyriq', event);
                }}>
                Github repository
              </button>
            </PortfolioCard>
          </PortfolioGrid>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="skills" title="Skills">
          <SkillsSection />
        </Section>
        <Section sectionsRefs={sectionsRefs} name="Education" title="Education">
          <SubSection title="" IconComponent={HiAcademicCap} marginTop="mt-0">
            <div className="mt-6 sm:m-0">2010-2022</div>
            <div>primary and secondary schools</div>
            <div className="text-sm">Kendriya Vidyalaya No.1 Gwalior</div>
            <div className="mt-6 sm:m-0">2022-2026</div>
            <div>
              <p className="m-0">
                <a href="https://www.amity.edu/gwalior/" target="_blank" rel="noreferrer"> 
         Amity University Gwalior 
      </a>
              </p>
              
              <p className="text-sm m-0">
                Bachelor of Technology in Computer Science & Engineering
              </p>
            </div>
            <div className="text-sm">Gwalior, Madhya Pradesh</div>
          </SubSection>
          {/* <SubSection title="Professional Experience" IconComponent={HiBriefcase}>
            <div className="mt-6 sm:m-0">2010-2013</div>
            <div>
              <p className="m-0">
                <a href="https://synchrotech.ch/en/" target="_blank" rel="noreferrer">
                  Synchrotech SA
                </a>{' '}
                - Full-stack developer
              </p>
              <p className="text-sm m-0">
                Development and maintenance of internal and external applications in C#, PHP and
                JavaScript.
              </p>
              <p className="text-sm m-0">Analysis, planning and management of customer projects.</p>
              <p className="text-sm m-0">Research and analysis of new technologies.</p>
            </div>
            <div className="text-sm">Internships & Employment</div>
            <div className="mt-6 sm:m-0">2016-2025</div>
            <div>
              <p className="m-0">
                <a href="https://heig-vd.ch/" target="_blank" rel="noreferrer">
                  HEIG-VD
                </a>{' '}
                - R&D Associate
              </p>
              <p className="text-sm m-0">
                Development of full-stack web applications for several companies and institutions,
                including
                <br />
                <a href="https://www.abraxas.ch/fr" target="_blank" rel="noreferrer">
                  Abraxas
                </a>
                ,{' '}
                <a href="https://www.avalia.io/" target="_blank" rel="noreferrer">
                  Avalia
                </a>
                ,{' '}
                <a href="https://bhaasha.ch/" target="_blank" rel="noreferrer">
                  Bhaasha
                </a>
                ,{' '}
                <a href="https://www.ciip.ch/" target="_blank" rel="noreferrer">
                  CIIP
                </a>
                ,{' '}
                <a href="https://www.gyb.ch/" target="_blank" rel="noreferrer">
                  GYB
                </a>{' '}
                and{' '}
                <a href="https://geo-satis.com/en/" target="_blank" rel="noreferrer">
                  Geosatis
                </a>
                .
              </p>
              <p className="text-sm m-0">
                Assisting and doing odd jobs for web technology courses in the Bachelor’s programme.
              </p>
            </div>
            <div className="text-sm">Employment</div>

            <div className="mt-6 sm:m-0">2025-present</div>
            <div>
              <p className="m-0">
                <a href="https://www.abraxas.ch" target="_blank" rel="noreferrer">
                  Abraxas Informatik AG
                </a>{' '}
                - Senior Web Software Engineer
              </p>
              <p className="text-sm m-0">
                Development of a full-stack web application for a public sector customer, with
                priority given to the frontend for my role.
              </p>
              <p className="text-sm m-0">Assistance with software architecture decisions.</p>
              <p className="text-sm m-0">
                Use of backend (Java, JAX-RS, TomEE) and frontend (Angular) technologies.
              </p>
            </div>
            <div className="text-sm">Employment</div>
          </SubSection> */}
          <SubSection title="Hobbies" IconComponent={HiMusicalNote}>
            <div>Music, writing and sport</div>
          </SubSection>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="contact" title="Contact">
          <ContactForm />
        </Section>
      </div>
      <Footer />
    </>
  );
}
