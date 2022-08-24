import { Link } from "react-router-dom";
import CGI from "../assets/cgi.jpg";
import Pyxl from "../assets/pyxl.jpg";
import Selenium from "../assets/selenium.jpg";
import Reflection from "../assets/reflection.jpg";
import { useEffect } from "react";

const Cgi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full bg-sky-100 text-sky-900">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full">
        <Link to="/">
          <button className="text-sky-900 group border-2 border-sky-400 px-6 py-3 my-2 flex items-center hover:bg-sky-700 hover:border-sky-700 hover:text-sky-50">
            Back to Home
          </button>
        </Link>

        <div className="pt-6">
          <p className="text-3xl font-bold inline border-b-4 border-sky-400 ">
            My Experience at CGI
          </p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <p className="mt-3">
              <span className="text-sm">May 2022 - Dec 2022</span>
              <p>
                During the summer of 2022, I had the opportunity to work with
                many talented people at CGI Inc., an information technology
                consulting company. I was assigned to the Bell team, where I was
                responsible for improving key products under Bell Canada.
              </p>
              <p className="mt-3 mb-4">
                My primary responsibility was on the Java Test Automation
                Project, for which the goal was to improve the efficiency of the
                Quality Assurance Analysts. I handled aspects such as
                documentation, development and dockerization of the project.
              </p>
              <p>
                Through my work term, I've learned how to work within an
                agile-based team, and balancing development work with hectic
                client meetings.
              </p>
            </p>
          </div>

          <div className="px-2 py-4">
            <img className="shadow-xl rounded" src={CGI} alt="cgi" />
          </div>
        </div>

        <div className="pt-10">
          <p className="text-2xl font-bold inline border-b-4 border-sky-400 ">
            Python Security Profile Extraction Tool
          </p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <p className="mt-3">
              <span className="text-sm">Aug 2022</span>
              <p>
                One of my bigger projects here at CGI is the Python Security
                Profile Extraction Tool. This project was an individual effort
                that I've done alongside my other work during the month of
                August. This project was both a new and critical initiative, as
                manually performing the extraction took lots of time and effort.
              </p>
              <p className="mt-3 mb-4">
                The purpose of this tool is to support the Test Automation
                project for our main product, Bell Smart Home. More
                specifically, this tool allows the Quality Assurance team to
                obtain security priviledges of all users within the system by
                extracting the up-to-date information into a{" "}
                <b>tidily formatted excel file</b> using the data extraction
                tool.
              </p>
            </p>
          </div>

          <div className="px-2 py-4">
            <img className="shadow-xl rounded" src={Pyxl} alt="pyxl" />
          </div>
        </div>

        <div className="pt-6 flex flex-row-reverse">
          <p className="text-2xl font-bold inline  ">Developing the Tool</p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="px-2 py-4">
            <img className="shadow-xl rounded" src={Selenium} alt="selenium" />
          </div>

          <div className="flex flex-col">
            <p className="mt-3 text-right">
              <p>
                Since this was a new initiative, there weren't any previous
                information within the company that I could rely on. This meant
                I had to do a lot of experimentation.
              </p>
              <p className="mt-3 mb-4">
                At first, I wanted to do this primarily with the libraries
                BeautifulSoup and Requests. However, this proved difficult due
                to the fact that the security profile data were on multiple
                pages and the pages were layered with iframes and javascript
                code. Thus, after consulting with more experienced coworkers and
                doing some research, I decided that <b>Selenium</b> would be the
                answer.
              </p>
              <p>
                Selenium provided me the tools to navigate the complex web pages
                that I wanted to extract data from, and I spent the following
                week researching how to use selenium together with various other
                python libraries.
              </p>
            </p>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-2xl font-bold inline">What I've Learned</p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <p className="mt-3">
              <p>
                The one key thing I've learned is to <b>persistent</b> with any
                endeavors. There were many times where I felt like this project
                was perhaps beyond my capabilities as a developer, because I had
                little idea of how the massive enterprise software system I was
                supposed to deal with works.
              </p>
              <p className="mt-3 mb-4">
                After a lot of <b>self-learning</b> and <b>research</b>, I was
                finally able to come up with a working solution to the problem.
                The Python Security Profile Extraction Tool is now ready to be
                integrated into the CGI Test Automation project to drastically
                speed up the data collection process.
              </p>
            </p>
          </div>

          <div className="px-2 py-4">
            <img
              className="shadow-xl rounded"
              src={Reflection}
              alt="reflection"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cgi;
