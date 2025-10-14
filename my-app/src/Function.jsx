
function Function() {

  //classic function
  function getName1(gameName) {
    return gameName;
  }

  //arrow function
  const getName2 = (gameName) => {
    return gameName;
  };
  const title = "Top Trending Games 2024";
  const game1 = "God of War";
  const game2 = "Wwe 2k24";
  const game3 = "Fifa 24";
  const game4 = "Grand Theft Auto V";

  return (
    <>
      <div className="test">Functionl Component</div>
      <div className="div">
        <h2>{getName1(title)}</h2>
        <h3>{getName1(game1)}</h3>
        <h3>{getName1(game2)}</h3>
        <h3>{getName1(game3)}</h3>
        <h3>{getName1(game4)}</h3>
      </div>
      <div className="div">
        <h2>{getName2(title)}</h2>
        <h3>{getName2(game1)}</h3>
        <h3>{getName2(game2)}</h3>
        <h3>{getName2(game3)}</h3>
        <h3>{getName2(game4)}</h3>
      </div>
    </>
  );
}

export default Function;
