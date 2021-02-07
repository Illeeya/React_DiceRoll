import "../App.css";

function Results() {
  return (
    <div className="Inputs">
      <div class="col-sm-4">
        Sum
        <br />
        <p id="sum">---</p>
      </div>
      <div class="col-sm-4">
        Avg dice value
        <br />
        <p id="avg">---</p>
      </div>
      <div class="col-sm-4">
        Highest roll
        <br />
        <p id="max_sum">---</p>
      </div>
    </div>
  );
}

export default Results;
