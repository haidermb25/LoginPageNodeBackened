const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const { pool } = require("../config/db"); // Import pool instead of connection

const getUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    throw new ApiError(400, "Username and password are required");
  }

  try {
    // Query to find user by username and password
    const query = `
      SELECT id, username 
      FROM user 
      WHERE username = ? AND password = ?
      LIMIT 1
    `;

    // Execute query using the pool
    const [rows] = await pool.query(query, [username, password]);

    if (rows.length === 0) {
      throw new ApiError(404, "Invalid credentials");
    }

    const user = rows[0];

    return res
      .status(200)
      .json(new ApiResponse(200, user, "User retrieved successfully"));
  } catch (err) {
    console.error("Error during user authentication:", err);
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json(err);
    }
    return res
      .status(500)
      .json(new ApiError(500, "Failed to authenticate user"));
  }
});

module.exports = { getUser };
