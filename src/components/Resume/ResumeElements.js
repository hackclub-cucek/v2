import styled from 'styled-components';

export const SectionContainer = styled.div`
/* flex flex-wrap justify-center */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Divcontainer = styled.div`
  user-select: none;
  margin: 100px auto;
  background: #231e39;
  color: #b3b8cd;
  border-radius: 5px;
  width: 350px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0,0,0,.75);
`;

export const Divcover = styled.div`
  background: url("https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80");
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const Imgprofile = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 93px 0 0 -175px;
  border: 1px solid #1f1a32;
  padding: 7px;
  background: #292343;
`;

export const Divprofilename = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 27px 0 0 120px;
`;

export const Pabout = styled.p`
  margin-top: 35px;
  line-height: 21px;
`;

export const Buttonmsg = styled.button`
  margin: 10px 0 40px 0;
  background: #03bfbc;
  border: 1px solid #03bfbc;
  padding: 10px 25px;
  color: #231e39;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
`;

export const Buttonfollow = styled.button`
  margin: 10px 0 40px 0;
  background: #03bfbc;
  border: 1px solid #03bfbc;
  padding: 10px 25px;
  color: #231e39;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  margin-left: 10px;
  background: transparent;
  color: #02899c;
  &:hover { 
    color: #231e39;
    background: #03bfbc;
    transition: .5s;
   }
`;

export const I = styled.i`
  padding-left: 20px;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: .5s;
  &:hover { 
    color: #03bfbc;
   }
`;