import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }

    body{
        background: ${({theme})=> theme.COLORS.BACKGROUND_800};
        color: ${({theme})=>theme.COLORS.WHITE};
        -webkit-font-smoothing:antialiased;
    }

    input,textarea,button,form{
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    a,button{
        cursor: pointer;
        
    }
    
   
`