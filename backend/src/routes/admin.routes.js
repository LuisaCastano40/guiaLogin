import { Router } from "express";
import { postAdmin, getAdmin, deleteAdminById } from "../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.get('/', getAdmin);
adminRouter.post('/', postAdmin);
adminRouter.delete('/:id', deleteAdminById);

export default adminRouter;