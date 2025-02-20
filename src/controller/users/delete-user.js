import { Users } from "../modules/comment.model.js";

export const deleteUser = async (req, res) => {
  const {id} = req.body
  try {
    await Users.deleteMany({_id:id})

  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
};
