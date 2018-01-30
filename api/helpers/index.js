const sendUserError = (err, res) => {
  //  USER_ERROR
  res.status(422);
  if (typeof err === 'String') {
    return res.json({ err });
  } else if (err && err.message) {
    return res.json({
      message: err.message,
      stack: err.stack
    });
  }
  res.json(err);
};

module.exports = { sendUserError };
