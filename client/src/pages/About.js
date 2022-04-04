import Header from "../components/Header";
import Meta from "../components/Meta";

const About = () => {
  const pageTitle = "About";

  const pageDescription = `This is a sample application demonstrating the use of Pusher with Django and React 🐍 + ⚛️`;

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default About;
