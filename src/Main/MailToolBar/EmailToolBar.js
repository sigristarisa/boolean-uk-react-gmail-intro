import IconList from "../IconList";
import Space from "../../Space";
import EmailToolBarRight from "./EmailToolBarRight";
import "./MailToolBar.css";

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
