
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
      <div>
        <h1>{getName1(title)}</h1>
        <h2>{getName1(game1)}</h2>
        <h2>{getName1(game2)}</h2>
        <h2>{getName1(game3)}</h2>
        <h2>{getName1(game4)}</h2>
      </div>
      <div>
        <h1>{getName2(title)}</h1>
        <h2>{getName2(game1)}</h2>
        <h2>{getName2(game2)}</h2>
        <h2>{getName2(game3)}</h2>
        <h2>{getName2(game4)}</h2>
      </div>
    </>
  );
}

export default Function;
