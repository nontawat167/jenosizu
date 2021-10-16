import { query } from "express-validator";

export const findplaceValid = [
  query("keyword", "keyword should be String").optional({checkFalsy: true}).isString(),
  query("lat", "lat should be number").optional({checkFalsy: true}).not().isString(),
  query("lon", "lon should be number").optional({checkFalsy: true}).not().isString(),
];
