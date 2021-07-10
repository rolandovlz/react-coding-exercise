import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
`;

const HeaderBar = styled.header`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
`;

const HeaderText = styled.h3`
`;

const LaunchesWrapper = styled.div`
  padding: 0 10%;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  padding: 0 1rem;
`;

const Container = styled.div`
  background-color: #F5F5F5;
  display: grid;
  gap: 2rem;
  justify-items: center;
  padding: 0 1rem;
  padding-bottom: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, 100%);
    gap: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  min-height: 250px;
  border-radius: 5%;
  background: white;
  opacity: 0.8;
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    opacity: 1;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 10px 2px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  min-height: 200px;
  object-fit: cover;
`;
const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
`;

export {
  Wrapper,
  HeaderBar,
  HeaderText,
  LaunchesWrapper,
  Title,
  Container,
  Card,
  CardImage,
  CardText
}