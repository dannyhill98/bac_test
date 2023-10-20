import jwt from "jsonwebtoken";

const GenerateToken = async(request, response) =>{

    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(401).send({ "message" : "Username and password are required"});
    }

    const userClaim = username + password;  // This is a security risk and should not be used 
                                            // in production under any circumstances 

    const JWToken = jwt.sign(
        { user: userClaim },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }
      );

    return response.status(200).send({"JWToken" : JWToken });
}

export { GenerateToken };