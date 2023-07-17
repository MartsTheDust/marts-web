import "../styles/Submenu.scss";

const Submenu = (path: string) => {
  let linkedPath = "/" + path;
  return linkedPath;
};

export default Submenu;

// INDIVIDUAL SUBMENU

export function Home() {
  return <h1>Marts The Dust</h1>;
}

export function Intro() {
  return <h1>Introduction</h1>;
}

export function About() {
  return <h1>About Me</h1>;
}

export function Hall() {
  return (
    <>
      <h1>Hall of Marty</h1>
      <h2>
        <b>Hall of Marty</b> is an annual passion project event wherein image
        edits or artworks based on a provided picture will be featured for the
        31 days of October.
      </h2>
    </>
  );
}

export function Connect() {
  return (
    <>
      <h1>You can find me in:</h1>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Youtube</li>
        <li>Instagram</li>
        <li>Reddit</li>
        <li>LinkedIn</li>
      </ul>
    </>
  );
}

export function More() {
  return <h1>Here's More!</h1>;
}
