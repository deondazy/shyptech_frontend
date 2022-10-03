import axios from 'axios'
import { authorizedHeader } from 'service/helper';
// import { verifyCSRF } from 'service/verifyCSRF';

const link = (item: string, addressDetails?: { id: string }): { type: "post" | "get", url: string } => {
    switch (item) {
        case "retrieve-countries":
            return { type: "get", url: `countries` };
        case "retrieve-states":
            return { type: "get", url: `states` };
        case "retrieve-cities":
            return { type: "get", url: `cities` };
        case 'retrieve-localities':
            return { type: "get", url: `localities` };
        default:
            return { type: "get", url: `states` };
    }
}

async function handler(req: { [key: string]: any }, res: { [key: string]: any }) {

    // await verifyCSRF(req, res);

    try {

        const { authType, ...rest } = req.body;

        const { type, url } = link(authType, rest);

        const { data } = await axios.call(
            type,
            `${process.env.BASE_URL}/${url}`,
            { ...authorizedHeader(req?.headers?.authorization), data: rest, method: type, timeout: 120000 }
        );

        res.status(200).json(data);

    } catch (error: any) {

        const { data } = error.response || {};

        const err = data || {};

        return res.status(500).json(err);
    }
};

export default handler;
