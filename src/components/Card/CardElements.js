import styled from 'styled-components';

export const CardContainer = styled.div`
background-color:#01bf71;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const CardH1 = styled.h1`
    color: #fff;
`;

export const CardH5 = styled.h5`
  color: #fff;
  font-family: inherit;
  font-size: small;
  margin: 0;
`;

export const CardDiv = styled.div`
  background-color: black;
  

  display: flex;
  max-width: 500px;
  border-radius: 15px;
  justify-content: center;
  text-align: center;
  margin-bottom: 4rem;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
`;

export const CardInput = styled.input`
  border-radius: 15px;
  width: 20rem;
  text-align: center;
  border: none;
  outline: none;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const CardH2 = styled.h2`
  color: #fff;
  font-weight: 900;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;
  text-align: center;
  justify-content: center;
`;

export const Cardul = styled.ul`
  color: #fff;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 1rem;
  max-width: 380px;
`;

export const Cardli = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2.2rem;
`;

export const Cardstrong = styled.strong`
  font-size: 0.8rem;
  margin-left: 2rem;
  margin-right: 1rem;
`;

