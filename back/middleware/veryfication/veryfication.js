const { jwtDecrypt, importJWK, jwtVerify } = require("jose");

async function veryfication(req, res, next) {
  try {
    if (!req.signedCookies["Y_V"]) throw new Error("No cookie");
    const { payload: jweDec } = await jwtDecrypt(
      req.signedCookies["Y_V"],
      await importJWK(JSON.parse(process.env.JE_K))
    );
    const { payload: jwsDec } = await jwtVerify(
      jweDec.jwt,
      await importJWK(JSON.parse(process.env.PB_K))
    );
    req.user = { _id: jwsDec._id, status: jweDec.status };
    next();
  } catch (err) {
    Object.keys(req.signedCookies).forEach((cookie) => {
      res.clearCookie(cookie);
    });
    next(err);
    return;
  }
}
module.exports = veryfication;
