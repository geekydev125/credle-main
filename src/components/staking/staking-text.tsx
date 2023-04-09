import styled from 'styled-components';

export const StakingText = () => {
  return (
    <StakingTextContainer>
      <StakingTitle>
        <p style={{ fontFamily: 'gotham-thin' }}>StaKing</p>
      </StakingTitle>
      <StakingMiniText>
        <span style={{ fontFamily: 'gotham-thin' }}>The best way to</span>{' '}
        <span style={{ fontFamily: 'gotham-bold' }}>earn King</span>
      </StakingMiniText>
    </StakingTextContainer>
  );
};

const StakingTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 1092px) {
    padding-top: 5rem;
  }
  @media screen and (max-width: 390px) {
    padding-top: 3rem;
  }
`;

const StakingTitle = styled.div`
  font-size: 7rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 1366px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 1092px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 540px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 390px) {
    font-size: 65px;
  }
`;

const StakingMiniText = styled.div`
  font-size: 25px;
  font-family: 'gotham-book';
  text-transform: none;
  text-align: center;
  padding-top: 21px;
  letter-spacing: 0.05rem;
  gap: 10px;
  @media screen and (max-width: 1092px) {
    padding-top: 15px;
    font-size: 20px;
  }
  @media screen and (max-width: 540px) {
    font-size: 18px;
  }

  @media screen and (max-width: 390px) {
    padding-top: 11px;
    font-size: 15px;
  }
`;
