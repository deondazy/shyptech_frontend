import axios from 'axios'
import { authorizedHeader } from 'service/helper';
// import { verifyCSRF } from 'service/verifyCSRF';

const link = (
    item: string, service?: string, provider?: string, address?: string, reference?: string
): { type: "post" | "get" | "patch", url: string } => {

    switch (item) {

        case "get-providers":

            return { type: "get", url: `service/${service}/providers` };

        case "get-provider-form":

            return { type: "get", url: `provider/${provider}/form` };

        case "get-provider-details":

            return { type: "post", url: `provider/${provider}` };

        case "get-location":

            return { type: "get", url: `geocode?${address}` };

        case "get-provider":

            return { type: "get", url: `provider/${provider}` };

        case "get-price":

            return { type: "post", url: `ship/pricing` };

        case "create-order":

            return { type: "post", url: `pay/${reference}` };

        case "get-payment-status":

            return { type: "get", url: `pay/${reference}/verify` };

        default:
            return { type: "post", url: `provider` };
    }

}

async function handler(req: { [key: string]: any }, res: { [key: string]: any }) {

    // await verifyCSRF(req, res);

    let { authType, service, provider, address, reference, ...rest } = req.body;

    rest.service = service;

    const { type, url } = link(authType, service, provider, address, reference);

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
