import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dxbxbdarb",
  api_key: "546467729775296",
  api_secret: "evuqe9gF8NoHkr4-YSj_ozo8Hi8",
});

const asset = "casoni/IMG_8252_wvwnug";

const app = express();
app.use(cors());
app.use(express.json());

cloudinary.api
  .resource(asset, { image_metadata: true })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.warn(error);
  });
