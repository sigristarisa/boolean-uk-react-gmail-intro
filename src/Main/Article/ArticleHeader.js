import IconList from "../IconList";
import EmailInfo from "./EmailInfo";
import DateInfo from "./DateInfo";

const ArticleHeader = () => {
  return (
    <header className="email-content--header">
      <div className="avatar"></div>
      <EmailInfo />
      <DateInfo />
      <div className="email-action-icons">
        <IconList />
      </div>
    </header>
  );
};

export default ArticleHeader;
