import dotenv from "dotenv";
import app from "src/server";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})


dotenv.config();