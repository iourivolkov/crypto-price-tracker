import Button from "./Button";

const LandingPage = ({ projectName, projectSlogan }) => {
  return (
    <div className="landing-page">
      <h1 className="projectName">{projectName}</h1>
      <h4 className="project-slogan">{projectSlogan}</h4>
      <Button />
    </div>
  );
};

export default LandingPage;
