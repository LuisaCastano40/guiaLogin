import { Router } from "express";
import { postAdmin, getAdmin, deleteAdminById } from "../controllers/admin.controller.js";
import auth from "../middleware/auth.js";

const adminRouter = Router();

adminRouter.get('/', auth('admin'), getAdmin);
adminRouter.post('/', postAdmin);
adminRouter.delete('/:id', auth(), deleteAdminById);

export default adminRouter;