import { cleanEnv, port , str} from "envalid";

const validateEnv = () => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port(),
        LOG_PATH: str(),
        URL_API: url(),
    });
};

export default validateEnv;