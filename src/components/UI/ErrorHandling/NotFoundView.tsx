import { Link } from "react-router";
import ErrorState from "./ErrorState";
import Button from "../Button";
import notFoundImage from "../../../assets/Images/404-error.svg";

export default function NotFoundView() {
  return (
    <ErrorState
      image={<img src={notFoundImage} alt="" className="w-56 mx-auto" />}
      eyebrow="Page not found"
      title="This Pokémon wandered off the map."
      description="The page you're looking for doesn't exist or may have moved."
      action={
        <Button as={Link} to="/pokedex">
          Back to Home
        </Button>
      }
    />
  );
}
