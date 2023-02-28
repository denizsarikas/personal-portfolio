import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, explanation }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  //const projectTitle = title.split(" ").join("-").toLowerCase();
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {explanation}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
         MY BIGGEST EFFORDS DOWN THERE!
        </p>

      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <a 
          href="https://disneyplus-v2-7bc82.web.app/"
          target="_blank"
          rel="noreferrer" >
          <Project title="Disney Plus Clone" explanation="You can visit my Disney+ Clone authenticating with your Google account. Front: React Back: Firebase " />
          </a>
          <a 
          href="https://thedojosite-393ba.web.app/"
          target="_blank"
          rel="noreferrer" >
          <Project title="Project Management App" explanation="With signing up with a fake email you can visit my Project Management website made with React and Firebase. You can leave a comment if you want!" />
          </a>

          {/* ROW 2 */}
          <a 
          href="https://denizsarikas-basic-chat-app.web.app/"
          target="_blank"
          rel="noreferrer" >
          <Project title="Basic Chat App" explanation="A basic chat app build with react and firebase. You can sign in with your google acc and leave a message!" />
          </a>

          <a 
          href="https://denizsarikas-pitonassignment.web.app/"
          target="_blank"
          rel="noreferrer" >
          <Project title="Book Site" explanation="This was an assignment project for a company which I made. I used their backend and PostManApi's to login, register and getting the book data. If website does not work properly it is because they shutdown the backend and api services." />
          </a>

          <Project title="project-5" />

          {/* ROW 3 */}
          <Project title="project-6" />
          <Project title="project-7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
