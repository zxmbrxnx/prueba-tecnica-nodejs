const handleValidation = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false })
  if (error) {
    return res
      .status(400)
      .json({ errores: error.details.map((err) => err.message) })
  }
  next()
}

export default handleValidation
