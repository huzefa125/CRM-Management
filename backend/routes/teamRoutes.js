import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { allowRoles } from "../middleware/roleMiddleware.js";
import { inviteMember } from "../controllers/teamController.js";

const router = express.Router();

router.post("/",protect,allowRoles("owner"),inviteMember);

export default router;