import ProjectTemplate from "./ProjectTemplate";
import InstachatImg from "../assets/instachat.png";

const Instachat = () => {
  let Title = "Meet & Draw Website";
  let Content = `Fully functional voice & video chatting with advanced drawing capabilities!`;

  return ProjectTemplate(InstachatImg, Title, Content);
};

export default Instachat;
