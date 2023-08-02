import React from "react";
import Popular from "./Popular";

// import { Container } from './styles';

function Homepage() {
  const [rendered, setRendered] = React.useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return <div>Homepage</div>;
}

export default Homepage;
