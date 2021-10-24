import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --dark-bg: #1e2327; 
  --gray-1: #BCB4B4;
  --deep-dark: #161b22; 
  --gray-2: #363636;
  --error-bg: #c10439;
  --error-color: #fff;
  --blue: #58a6ff;
  --white: #fff;
  --black: #111;
}
html,
body {
  font-size: 10px;
  font-family: 'Roboto Mono';
  background-color: var(--dark-bg);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: .5rem;
}
ul,
li {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
img,
svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
input,
textarea,
button {
  border: 0;
  outline: none
}
button {
  cursor: pointer;
}
.no-margin {
  margin: 0;
}
.no-padding {
  padding: 0;
}
.hidden {
  display: none;
}

/* animation */
.animeLeft{
  transform: translateX(-50px);
  opacity: 0;
  animation: anime 0.5s forwards;  
}
.animeTop {
  transform: translateY(-50px);
  opacity: 0;
  animation: anime 0.5s forwards;
}
.animeBottom {
  transform: translateY(50px);
  opacity: 0;
  animation: anime 0.5s forwards;
}
@keyframes anime {
  to {
      transform: initial;
      opacity: initial;
  }
}
`;
export default GlobalStyles;
