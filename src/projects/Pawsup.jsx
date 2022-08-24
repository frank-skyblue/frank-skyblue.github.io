import ProjectTemplate from "./ProjectTemplate";
import PawsupImg from "../assets/pawsup.png";

const Pawsup = () => {
  let Title = "Startup Website";
  let Content = `E-commerce website with shopping cart and user profiles.`;

  return ProjectTemplate(PawsupImg, Title, Content);
};

export default Pawsup;
