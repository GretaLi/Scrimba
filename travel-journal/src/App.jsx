import "./scss/style.scss";
import Header from "./compoments/Header";
import Card from "./compoments/Card";
import Footer from "./compoments/Footer";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Header />
      <main className="container">
        <div className="card__wrapper">{cards}</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
