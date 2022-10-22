import jwt from "jsonwebtoken"; 

type Data = {[key: string]: any}

export const encryptData = (data: Data): string => {
    const token = jwt.sign(data, String(process.env.JWT_SECRET));

    return token;
};

export const decodeData = (token: string) => {
    try {
        const data = jwt.verify(token, String(process.env.JWT_SECRET)) as Data;
        const { iat, ...parsedData} = data;

        return { data: parsedData};
    } catch (error) {
        return { error };
    }
};