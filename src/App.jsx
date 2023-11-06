import "./App.css";
import { articlesData } from "./articlesData";
import Article from "./components/Article";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { featuresData } from "./featuresData";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="FeaturesWrapper">
          <div className="FeaturesWrapper-FirstPart">
            <h1 className="FeaturesWrapper-FirstPart-Title">
              Why choose Easybank?
            </h1>
            <p className="FeaturesWrapper-FirstPart-Para">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="FeaturesWrapper-FeaturesBox">
            {featuresData.map((feature, idx) => (
              <Feature key={idx} data={feature} />
            ))}
          </div>
        </div>
        <div className="ArticlesWrapper">
          <h1 className="ArticlesWrapper-Title">latest articles</h1>

          <div className="ArticlesWrapper-ArticlesBox">
            {articlesData.map((article, idx) => (
              <Article key={idx} data={article} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
