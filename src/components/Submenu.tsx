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
  return (
    <>
      <h1>Introduction</h1>
      <h2>
        I'm Martin Charles R. Dilay, a Junior Programmer, focusing on web
        development, but I am still interested to expand my horizons with
        different technologies. For now, I use Java as a back-end language, and
        React with TypeScript for my front-end practices.
        <br />I like to lean into the creative side and creating things that add
        my own interests in one way or another. I like to add individuality in
        my works.
      </h2>
    </>
  );
}

export function About() {
  return (
    <>
      <h1>About Me</h1>
      <h2></h2>
    </>
  );
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
      <h1>You can find me on:</h1>
      <ul>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Youtube</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Reddit</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
      </ul>
    </>
  );
}

export function More() {
  return (
    <h2>
      <i>Marts The Dust</i> is a forced pun of my nickname combined with "Bites
      The Dust", a Queen song and a JoJo stand. This has become my online
      username and identity for various social media platforms.
    </h2>
  );
}
