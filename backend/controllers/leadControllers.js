import Lead from "../models/Lead.js";


export const createLead = async (req, res) => {
    try {
        const lead = await Lead.create({
            ...req.body,
            workspaceId: req.user.workspaceId,
        });
        res.status(201).json(lead);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find({ workspaceId: req.user.workspaceId });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}