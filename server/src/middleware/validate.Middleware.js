export const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      console.log("Validation errors:", errors);
      return res.status(400).json({ success: false, errors });
    }

    req.validateData = value;
    next();
  };
};
