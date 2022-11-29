import "../app.css";

const name = "Kandekore";
const thoughts = "is amazing!!!";

function Home(props) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>
            Hi! My name is ({props.name}) ({name})
          </h1>
          <h2>My name has ({props.name.length}) letters</h2>
          <h2>I think React ({thoughts})</h2>
          <h3>
            My team is ({props.team}) they are ({thoughts})
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
