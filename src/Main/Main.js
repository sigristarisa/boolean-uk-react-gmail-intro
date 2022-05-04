import EmailToolBar from "./MailToolBar/EmailToolBar";
import Article from "./Article/Article";

const Main = () => {
  return (
    <main className="email-view">
      <EmailToolBar />
      <Article />
    </main>
  );
};

export default Main;
