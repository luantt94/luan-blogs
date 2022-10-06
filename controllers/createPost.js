module.exports = (req, res) => {
  if (req.session.userId) {
    return res.render("create", {
      errorss: req.flash("errorss"),
    });
  }

  res.redirect("/auth/login");
};
