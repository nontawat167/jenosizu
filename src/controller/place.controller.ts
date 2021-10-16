import { Request, Response } from "express";
import { getPlace } from "../service/place.service";
import { validationResult } from "express-validator";
import { Location, defaultLocation } from "../service/place.service";

export const findPlaceHandler = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const keyword = (req.query?.keyword as string) || "";
  let location: Location | null = null;

  if (req.query?.lat && req.query?.lon) {
    location = {
      lat: Number(req.query?.lat),
      lon: Number(req.query?.lon),
    };
  }

  try {
    const place: any = await getPlace({
      keyword: keyword,
      location: location ? location : defaultLocation,
    });

    return res.status(200).json({ result: place.results });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({ msg: "server error" });
  }
};
