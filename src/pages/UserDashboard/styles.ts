import styled from "styled-components";

export const DashboardPageWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.div`
  background-color: var(--orangeCore);
  width: 100vw;
  height: 12vh;
  display: flex;
  color: var(--lightOrange);
  font-size: 1.5rem;

  .headerWrapper {
    margin: auto;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    color: var(--white);
  }

  .searchIcon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  @media only screen and (min-width: 1100px) {
    .headerWrapper {
      width: 65%;
    }
  }
`;

export const SubHeader = styled.div`
  margin: 25px auto;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;

  .imgLogo {
    width: 30%;

    img {
      width: 100%;
    }
  }
`;

export const Stores = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: var(--grayStandOut);
    margin-bottom: 15px;
    font-weight: 600;
    text-align: center;

    span {
      color: var(--orangeCore);
      font-weight: 600;
    }
  }

  .image {
    display: flex;
    height: 25pc;
    width: 100%;
    border-radius: 30px;
    cursor: pointer;
    border: 5px solid var(--lightOrange);
    margin-bottom: 10px;
  }
`;

export const Footer = styled.div`
  background-color: var(--grayHome);
  width: 100vw;
  height: 12vh;
  display: flex;
  color: var(--orangeCore);
  display: flex;
  font-weight: 600;
  margin-top: 20px;

  .footerWrapper {
    margin: auto;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .profilePic {
      width: 15%;

      img {
        width: 100%;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  .infoWallet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 46%;
  }
`;
