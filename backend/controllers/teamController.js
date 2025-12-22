import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import crypto from 'crypto';

export const inviteMember = async (req, res) => {
    const { name, email } = req.body;
    console.log("InviteMember request:", { by: req.user ? req.user._id : null, role: req.user ? req.user.role : null, body: req.body });
    try {
        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "User already exists" });
        }
        // generate a secure temporary password
        const generateTempPassword = (len = 12) => {
            // base64 gives a wide character set; replace URL-unsafe chars
            return crypto.randomBytes(Math.ceil(len * 3 / 4)).toString('base64').replace(/\+/g, 'A').replace(/\//g, 'B').slice(0, len);
        };
        const tempPassword = generateTempPassword(12);
        const member = await User.create({
            name,
            email,
            password: tempPassword,
            role: "member",
            workspaceId: req.user.workspaceId,
        });

        res.status(201).json({
            message: "Member invited successfully",
            member: {
                id: member._id,
                name: member.name,
                email: member.email,
                role: member.role,
            },
            tempPassword,
            token: generateToken(member)
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        console.error(error);
    }
};