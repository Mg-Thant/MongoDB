exports.get404Page = (req, res) => {
  res.status(404).render("error/404", { title: "Page Not Found" });
};

exports.get500Page = (err, req, res, next) => {
  res.stauts(500).render("error/500", { title: "Post Not Found", message: err.message });
};
