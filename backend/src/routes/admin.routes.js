import { Router } from "express";
import { postAdmin, getAdmin, deleteAdminById } from "../controllers/admin.controller.js";
import auth from "../middleware/auth.js";

const adminRouter = Router();

adminRouter.get('/', getAdmin);
adminRouter.post('/', postAdmin);
adminRouter.delete('/:id', auth('admin'), deleteAdminById);

export default adminRouter;