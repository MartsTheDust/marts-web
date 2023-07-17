import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Intro, About, Hall, Connect, More } from "./Submenu";
import "../styles/Backdrop.scss";

const STYLE_STATE = "backdrop";

export type BackState = {
  menuState: boolean;
  styleState: string;
};

const Backdrop = ({ menuState, styleState }: BackState) => {
  return (
    <div className={STYLE_STATE} id={menuState.toString()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
};

export default Backdrop;
