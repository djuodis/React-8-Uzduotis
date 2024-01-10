import {
  MainContainer,
  MainTitle,
  MainSubtitle,
  MainButton,
} from "../MainStyles";

const Main = () => {
  return (
    <MainContainer>
      <div className="title">
        <MainTitle>React Landing Page</MainTitle>
        <MainTitle>Website template</MainTitle>
      </div>
      <div className="subitle">
        <MainSubtitle>Made with react and styled with components</MainSubtitle>
      </div>
      <MainButton>Get Started</MainButton>
    </MainContainer>
  );
};

export default Main;
