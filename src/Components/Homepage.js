import React from "react";
import Popular from "./popular";

// import { Container } from './styles';

function Homepage() {
  const [rendered, setRendered] = React.useState("popular");

  // eslint-disable-next-line no-unused-vars
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
//adjust
export default Homepage;
