import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Submenu, { Home, Intro, About, Hall, Connect, More } from "./Submenu";
import Backdrop from "./Backdrop";
import { MenuList } from "./constants/Constants";
import "../styles/Menu.scss";

const STYLE_STATE = "menu";
const OPTION_STATE = "option";
const FOLD_STATE = "fold";
var global: boolean = false;

const Menu = () => {
  const [colState, setColState] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Backdrop menuState={colState} styleState={colState.toString()} />
      <div
        className={STYLE_STATE}
        id={colState.toString()}
        onClick={() => {
          setColState(!colState);
          global = colState;
        }}
      >
        <p className={FOLD_STATE} id={colState.toString()}>
          MENU
        </p>
        {MenuList.map((option) => (
          <a
            className={OPTION_STATE}
            id={colState.toString()}
            onClick={() => navigate(Submenu(option))}
          >
            {option.toUpperCase()}
          </a>
        ))}
      </div>
    </>
  );
};

export default Menu;
