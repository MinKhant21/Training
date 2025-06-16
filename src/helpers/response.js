const responseSuccess = (res, data, message) => {
  return res.json({
    status: 200,
    data: data,
    message,
  });
};

module.exports = {
  responseSuccess
};
