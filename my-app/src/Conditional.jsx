function Conditional() {

  //   if else
  const isLoggedIn = true;
  const isRegistered =  false;
  const isVisible = true;
  const visibilty = isVisible ? "visible" : "hidden";

  let message;

  if (isLoggedIn) {
    message = <div>Welcome, User!</div>;
  } else {
    message = <div>Please log in.</div>;
  }

  return (
    <>
        <div className="test">Conditional Component</div>
        <div>{message}</div>
        <div>{isRegistered ? <div>Welcome, User!</div> : <div>Please resgister.</div>}</div>
        <div className={isVisible ? "visible" : "hidden"}>Using css</div>
        <div className={visibilty}>Using css</div>
    </>
  )
}

export default Conditional;
