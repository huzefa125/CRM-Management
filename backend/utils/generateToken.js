import jwt from 'jsonwebtoken';


const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        role: user.role,
        workspaceId: user.workspaceId,
    }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

export default generateToken;