import "./home.css";
import "../recipes/recipes.css";
import Hero from "./Hero";
import ListCard from "../partials/ListCard";
import Newsletter from "../partials/Newsletter";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = ({ recipes, categories }) => {
	return (
		<div className="homepage-container">
			<Hero />
			<div className="row g-4 m-3 p-3">
				<div className="d-flex justify-content-center align-items-center">
					<h2 className="display-2">Recipes of the Week</h2>
				</div>
				{recipes.map((recipe) => (
					<ListCard key={recipe.id} items={recipe} categories={categories}>
						<Button as={Link} to={`/recipes/${recipe.id}`} variant="primary">
							View Recipe
						</Button>
					</ListCard>
				))}
			</div>
			<Newsletter />
		</div>
	);
};

export default Home;
