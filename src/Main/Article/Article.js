import ArticleTitle from "./ArticleTitle";
import ArticleHeader from "./ArticleHeader";
import EmailBody from "./EmailBody";
import EmailActions from "./EmailActions";
import "./Article.css";

const Article = () => {
  return (
    <article className="email-content">
      <ArticleTitle />
      <ArticleHeader />
      <EmailBody />
      <EmailActions />
    </article>
  );
};

export default Article;
