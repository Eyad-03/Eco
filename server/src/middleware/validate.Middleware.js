export const validate = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false
        });

        // FIX: Remove the '!' so it checks IF an error exists
        if (error) { 
            const errors = error.details.map((detail) => detail.message);
            console.log("Validation errors:", errors); 
            return res.status(400).json({ success: false, errors });
        }

        // If no error, attach the validated value and move to the controller
        req.validateData = value; 
        next();
    };
};