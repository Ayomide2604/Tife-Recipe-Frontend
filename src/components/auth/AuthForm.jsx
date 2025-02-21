import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ isLogin, handleSubmit, formData, setFormData, error }) => {
	return (
		<div className="auth-card">
			<h2>{isLogin ? "Login" : "Sign Up"}</h2>
			{error && <p className="error">{error}</p>}
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<label>username</label>
					<input
						type="text"
						value={formData.username}
						onChange={(e) =>
							setFormData({ ...formData, username: e.target.value })
						}
						required
					/>
				</div>
				<div className="input-group">
					<label>Password</label>
					<input
						type="password"
						value={formData.password}
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
						required
					/>
				</div>
				{!isLogin && (
					<div className="input-group">
						<label>Confirm Password</label>
						<input
							type="password"
							value={formData.confirmPassword}
							onChange={(e) =>
								setFormData({ ...formData, confirmPassword: e.target.value })
							}
							required
						/>
					</div>
				)}
				<button type="submit" className="auth-button">
					{isLogin ? "Login" : "Sign Up"}
				</button>
			</form>
			<p>
				{isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
				<Link to={isLogin ? "/signup" : "/login"}>
					{isLogin ? "Sign Up" : "Login"}
				</Link>
			</p>
		</div>
	);
};

export default AuthForm;
