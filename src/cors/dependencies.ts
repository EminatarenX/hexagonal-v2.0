import { Cors } from "./SetupCors";
import { CorsService } from "./CorsService";
import { FRONTEND_URL } from "..";

const corsService = new CorsService(FRONTEND_URL)
export const cors = new Cors( corsService )