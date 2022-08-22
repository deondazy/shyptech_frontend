import axios from 'axios'
import { authorizedHeader } from 'service/helper';
// import { verifyCSRF } from 'service/verifyCSRF';

const link = (item: string, reference?: string): { type: "post" | "get" | "patch", url: string } => {

    switch (item) {

        case "retrieve-reference":

            return { type: "get", url: `generate` };

        case "retrieve-auth":

            return { type: "post", url: `token` };

        case "subscribe-business":

            return { type: "post", url: `signup/${reference}` };

        default:
            return { type: "post", url: `waitlist/${reference}` };
    }

}

async function handler(req: { [key: string]: any }, res: { [key: string]: any }) {

    // await verifyCSRF(req, res);

    const { authType, reference, ...rest } = req.body;

    const { type, url } = link(authType, reference);

    const completeUrl = `${process.env.BASE_URL}/${url}`;

    try {



        const { data } = await axios.call(
            type,
            completeUrl,
            { ...authorizedHeader(req?.headers?.authorization), data: rest, method: type, timeout: 120000 }
        );

        res.status(200).json(data);

    } catch (error: any) {

        const { data } = error.response || {};
        const err = data || {};

        return res.status(400).json(err);
    }
};

export default handler;
