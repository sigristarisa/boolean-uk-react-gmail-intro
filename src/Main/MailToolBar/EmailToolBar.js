import IconList from "../IconList";
import Space from "../../Space";
import EmailToolBarRight from "./EmailToolBarRight";

const EmailToolBar = () => {
  return (
    <nav className="email-toolbar">
      <IconList />
      <Space />
      <EmailToolBarRight />
    </nav>
  );
};

export default EmailToolBar;
