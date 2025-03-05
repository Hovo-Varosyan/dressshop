async function JWSGenerate(data,age) {

    await new SignJWT(payload)
        .setProtectedHeader({ alg: "ES384" })
        .setIssuedAt()
        .setExpirationTime(age)
        .sign(await importJWK(JSON.parse(process.env.VP_K)))
}