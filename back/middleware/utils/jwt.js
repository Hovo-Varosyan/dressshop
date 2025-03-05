const { SignJWT, EncryptJWT, importJWK } = require("jose");

async function genereteToken(payload, age) {
    try {
        const signedJwt = await new SignJWT(payload)
            .setProtectedHeader({ alg: "ES384" })
            .setIssuedAt()
            .setExpirationTime(age)
            .sign(await importJWK(JSON.parse(process.env.VP_K)));
        const encryptedJwt = await new EncryptJWT({ jwt: signedJwt })
            .setProtectedHeader({ alg: "A256GCMKW", enc: "A256GCM" })
            .encrypt(await importJWK(JSON.parse(process.env.JE_K)));
        return encryptedJwt
    } catch (err) {
        throw err
    }

}
module.exports={genereteToken}