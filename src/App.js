import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Voices of Success with Sales Fortuna</h1>
      <div className="cards_gallery">
        <div className="arrow_back"></div>
        <div className="review-cards">
          <div className="review-card">
            <div className="card_image"></div>
            <p>
              Sales Fortuna made managing sales easier and helped us focus on
              customers. Its tools have been crucial for our growth and client
              satisfaction.
            </p>
          </div>
          <div className="reviewer_section">
            <div className="reviewer_section__reviewer-photo"></div>
            <div className="reviewer__info reviewer"></div>
            <p className="reviewer_name">Ethan Morgan</p>
            <p className="reviewer_position">
              Founder and CEO, Serene Living Products
            </p>
          </div>
        </div>
        <div className="arrow_forward"></div>
      </div>
    </div>
  );
}

export default App;
