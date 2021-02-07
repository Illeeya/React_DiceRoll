import "../App.css";

function Inputs() {
  return (
    <div className="Inputs">
      <div className="col-sm-4">
        How many sides does your dice have?
        <p>(2-20)</p>
        <input type="number" min={2} max={20} id="sides" />
      </div>
      <div className="col-sm-4">
        How many dices you want to roll?
        <p>(2-20)</p>
        <input type="number" min={1} max={10} id="dices" />
      </div>
      <div className="col-sm-4">
        How many times you want to roll?
        <p>(1-50)</p>
        <input type="number" min={2} max={20} id="rolls" />
      </div>
    </div>
  );
}

export default Inputs;
