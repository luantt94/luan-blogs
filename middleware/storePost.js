module.exports = (req, res, next) => {
  if (
    !req.files.image ||
    !req.body.title ||
    !req.body.subtitle ||
    !req.body.content
  ) {
    errors = "errorsss";
    req.flash("errors", errors);
    return res.redirect("/posts/new");
  }
  next();
};
