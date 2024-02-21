import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    width: 100%;
    height:100%;
}
 
body {
    width: 100%;
    height: 100%;
    margin:0;
}

#root {
    width: 100%;
    height: 100%;
    position: relative;
}
 
.bg {
    animation:slide 10s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #61bb46 50%, #009c4d 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
}
 
.bg2 {
    animation-direction:alternate-reverse;
    animation-duration:6s;
}
 
.bg3 {
    animation-duration:7s;
}
 

 
h1 {
    font-family:monospace;
}
 
@keyframes slide {
    0% {
        transform:translateX(-25%);
    }
 
    100% {
        transform:translateX(25%);
    }
}
`;
