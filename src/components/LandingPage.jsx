import Button from "./Button";

const LandingPage = ({ projectName, projectSlogan }) => {
  return (
    <div className="landing-page">
      <h1 className="projectName">{projectName}</h1>
      <Button />
    </div>
  );
};

export default LandingPage;
