import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import Arr from "./testArr.js";

//console.log(Arr.resources[0].public_id);

import cloudinary from "cloudinary";

import { ParseDMS, ConvertDMSToDD } from'./dd.js'

cloudinary.config({
  cloud_name: "dxbxbdarb",
  api_key: "546467729775296",
  api_secret: "evuqe9gF8NoHkr4-YSj_ozo8Hi8",
});

const app = express();
app.use(cors());
app.use(express.json());

const array = Arr.resources;

let i = 0;

array.map((foto) => {

  let asset = Arr.resources[i].public_id;

  cloudinary.v2.api
    .resource(asset, { image_metadata: true })
    .then((result) => {
      const imgScelta = {};
      imgScelta.id = result.asset_id
      imgScelta.width = result.width
      imgScelta.height = result.height
      imgScelta.public_id = asset;
      imgScelta.lat = ParseDMS(result.image_metadata.GPSLatitude);
      imgScelta.lng = ParseDMS(result.image_metadata.GPSLongitude);

      console.log(imgScelta);
    })
    .catch((error) => {
      console.warn(error);
    });
    i++;
});

// cloudinary.v2.search
//   .expression('resource_type:image AND tags=casoni AND metadata=true')
//   .sort_by('public_id','desc')
//   .max_results(30)
//   .execute()
//   .then(result=>console.log(result));

// fetch(`https://546467729775296:evuqe9gF8NoHkr4-YSj_ozo8Hi8@api.cloudinary.com/v1_1/dxbxbdarb/resources/upload/image/${asset}?image_metadata=true`)
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// });
