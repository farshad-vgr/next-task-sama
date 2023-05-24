// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
	id: number;
	name: string;
	province: string;
}[];

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	if (req.method === "GET" && req.query["country"] === "iran") {
		res.status(200).json([
			{ id: 1, name: "Tehran", province: "Tehran" },
			{ id: 2, name: "Karaj", province: "Alborz" },
			{ id: 3, name: "Shiraz", province: "Fars" },
		]);
	} else if (req.method === "GET" && req.query["country"] === "germany") {
		res.status(200).json([
			{ id: 1, name: "Berlin", province: "Berlin" },
			{ id: 2, name: "Frankfort", province: "Frankfort" },
			{ id: 3, name: "Munich", province: "Munich" },
		]);
	}
}
