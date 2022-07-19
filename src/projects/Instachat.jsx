import ProjectTemplate from "./ProjectTemplate";
import InstachatImg from "../assets/instachat.png";

const Instachat = () => {
  let Title = "Meet & Draw Website";
  let Content = `This project utilized the MERNG stack and was deployed on a Digital
        Ocean VM. I was responsible for implementing the intricate drawing
        features and a lot of the UI elements including the homepage, sign-up
        and sign-in pages.`;

  return ProjectTemplate(InstachatImg, Title, Content);
};

export default Instachat;
