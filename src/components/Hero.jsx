import "./Hero.css";

function Hero(props) {

    return (
      <>
      <div className={props.cName}>
      <img src={props.heroImg} alt="HeroImg" />
        {/* <img alt="HeroImg" src=""/> */}

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href="/">Travel Plan</a>
        </div>
      </div>
      </>
    )
  }
  
  export default Hero