export const validate = (schema) => {
  return (req, res, next) => {
    const errors = [];
    
    for (const [field, rules] of Object.entries(schema)) {
      const value = req.body[field];
      
      if (rules.required && (!value || value.trim() === '')) {
        errors.push(`${field} is required`);
        continue;
      }
      
      if (!rules.required && (!value || value.trim() === '')) {
        continue;
      }
      
      if (rules.min && value.length < rules.min) {
        errors.push(`${field} must be at least ${rules.min} characters`);
      }
      
      if (rules.max && value.length > rules.max) {
        errors.push(`${field} must be less than ${rules.max} characters`);
      }
      
      if (rules.email && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errors.push(`${field} must be a valid email address`);
        }
      }
    }
    
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }
    
    next();
  };
};
