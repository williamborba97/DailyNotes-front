import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  >header{
    width:100% ;
    height: 144px;

    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;

    padding: 0 124px;

    >a svg{
        color: ${({theme})=> theme.COLORS.GRAY_100} ;
        font-size: 24px;
        
    }
  }
`;

export const Form = styled.form`
 max-width: 340px;
 margin: 30px auto 0;
  
 >div:nth-child(4){
  margin-top: 30px;
 }

`;

export const Avatar = styled.div`
  position: relative;
  margin:0 auto 50px;
  margin-top: -127px;

  width: 186px;
  height: 156px;
  
  > img{
    border-radius: 50%;
    width: 186px;
    height: 186px;
  };

  > label{
    width: 48px;
    height: 48px;

   background-color: ${({theme})=> theme.COLORS.ORANGE};
   border-radius: 50%;

   display: flex;
   align-items: center;
   justify-content: center;

   position: absolute;
   bottom: -20px;
   right: 1px;
   
   cursor: pointer;

   > input{
    display: none;

   };

   >svg{
    width:20px ;
    height: 20px;
    color: ${({theme})=> theme.COLORS.BACKGROUND_800} ;
   }
  }
  
`;