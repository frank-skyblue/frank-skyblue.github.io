import ProjectTemplate from "./ProjectTemplate";
import PawsupImg from "../assets/pawsup.png";

const Pawsup = () => {
  let Title = "Startup Website";
  let Content = `This project utilized the PERN stack and was deployed as a PWA. I was
        responsible for the product/service page where I utilized my React
        skills to build a responsive and visually appealing product/service page
        with filtering capabilities.`;

  return ProjectTemplate(PawsupImg, Title, Content);
};

export default Pawsup;
