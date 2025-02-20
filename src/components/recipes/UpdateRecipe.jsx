import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { updateRecipe, getRecipeById } from "../../api/apiServices";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRecipe = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [recipe, setRecipe] = useState({
		title: "",
		description: "",
		image: null,
	});
	const [previewImage, setPreviewImage] = useState(null);

	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const data = await getRecipeById(id);
				setRecipe({ title: data.title, description: data.description });
				setPreviewImage(data.image);
			} catch (error) {
				console.error("Error fetching recipe:", error);
			}
		};
		fetchRecipe();
	}, [id]);

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
		const formData = new FormData();
		formData.append("title", recipe.title);
		formData.append("description", recipe.description);
		if (recipe.image) {
			formData.append("image", recipe.image);
		}

		try {
			await updateRecipe(id, formData);
			navigate("/recipes");
			window.location.reload();
		} catch (error) {
			console.error("Error updating recipe:", error);
			alert("Failed to update recipe");
		}
	};

	return (
		<Container className="mt-5">
			<Row className="justify-content-center">
				<Col md={10} lg={8}>
					<Card className="p-4 shadow-lg rounded">
						<h2 className="text-center mb-4">Edit Recipe</h2>
						{previewImage && (
							<img
								src={previewImage}
								alt="Preview"
								className="img-fluid rounded mb-3"
								style={{ maxHeight: "300px", objectFit: "cover" }}
							/>
						)}
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3">
								<Form.Label>Title</Form.Label>
								<Form.Control
									type="text"
									name="title"
									placeholder="Enter title"
									value={recipe.title}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									name="description"
									rows={3}
									placeholder="Enter description"
									value={recipe.description}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Image</Form.Label>
								<Form.Control
									type="file"
									name="image"
									onChange={handleImageChange}
								/>
							</Form.Group>

							<Button type="submit" className="w-100 btn-success">
								Update Recipe
							</Button>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default UpdateRecipe;
