import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { addRecipe } from "../../api/apiServices";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
	const navigate = useNavigate();
	const [recipe, setRecipe] = useState({
		title: "",
		description: "",
		image: null,
	});
	const [previewImage, setPreviewImage] = useState(null);

	const handleChange = (e) => {
		setRecipe({ ...recipe, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setRecipe({ ...recipe, image: file });
			setPreviewImage(URL.createObjectURL(file));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!recipe.title || !recipe.description || !recipe.image) {
			alert("Please fill in all fields and select an image");
			return;
		}

		// Create FormData object
		const formData = new FormData();
		formData.append("title", recipe.title);
		formData.append("description", recipe.description);
		formData.append("image", recipe.image);

		try {
			await addRecipe(formData);
			console.log("Recipe added successfully:", recipe);
			navigate("/recipes");
			window.location.reload();
		} catch (error) {
			console.error("Error adding recipe:", error);
			alert("Failed to add recipe");
		}
	};

	return (
		<Container className="add-recipe-container mt-5 d-flex justify-content-center align-items-center">
			<Row>
				<Col lg={6}>
					<div>
						<h1>Add Recipe</h1>
						<p>Fill in the details to add a new recipe.</p>
						{/* Display Image Preview if available */}
						{previewImage && (
							<img
								src={previewImage}
								alt="Selected Recipe"
								style={{
									width: "100%",
									maxHeight: "300px",
									objectFit: "cover",
									borderRadius: "8px",
								}}
								className="mb-3"
							/>
						)}
					</div>
				</Col>
				<Col lg={6}>
					<div className="m-3 p-3">
						<Form onSubmit={handleSubmit} className="add-recipe-form p-3">
							<Form.Group controlId="title" className="mb-3">
								<Form.Label className="text-dark">Title</Form.Label>
								<Form.Control
									className="text-dark p-2 mb-3"
									type="text"
									placeholder="Enter title"
									name="title"
									value={recipe.title}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group controlId="description" className="mb-3">
								<Form.Label className="text-dark">Description</Form.Label>
								<Form.Control
									className="text-dark p-2 mb-3"
									as="textarea"
									rows={3}
									placeholder="Enter description"
									name="description"
									value={recipe.description}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group controlId="image" className="mb-3">
								<Form.Label>Image</Form.Label>
								<Form.Control
									type="file"
									name="image"
									onChange={handleImageChange}
								/>
							</Form.Group>

							<Button type="submit">Add Recipe</Button>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default AddRecipe;
