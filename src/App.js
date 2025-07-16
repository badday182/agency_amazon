import "./App.css";
import ReviewCard from "./components/ReviewCard/ReviewCard";

function App() {
  return (
    <div className="App">
      <h1>Voices of Success with Sales Fortuna</h1>
      <div className="cards_gallery">
        <div className="arrow_back"></div>
        <div className="review-cards">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="arrow_forward"></div>
      </div>
    </div>
  );
}

export default App;
