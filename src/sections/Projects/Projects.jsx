import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/netflix-timeline.png";
import freshBurger from "../../assets/youtube-timeline.png";
import hipsster from "../../assets/swiggy-preview.png";
import fitLift from "../../assets/royal-resturant.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://stream-master-movie.netlify.app/"
          h3="Stream Master Movie"
          p="Showcasing Movies Using TMDB Movies API"
        />
        <ProjectCard
          src={freshBurger}
          link="https://streamify-project-video-streaming.netlify.app/"
          h3="Streamify"
          p="Youtube Videos Streaming Using Youtube's videos API"
        />
        <ProjectCard
          src={fitLift}
          link="https://royal-resturant-site.netlify.app/"
          h3="Resturant Site"
          p="A Premium Site for your Resturant having different Cuisines"
        />
        <ProjectCard
          src={hipsster}
          link="https://food-ordering-app-swiggy-api.netlify.app/"
          h3="Swiggato"
          p="Food Ordering App Order Food using Swiggy API's"
        />
      </div>
    </section>
  );
}

export default Projects;
