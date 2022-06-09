import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const resp = await axios.get('http://api.covid19api.com/summary');

        return res.status(200).send(resp.data);
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default handler;
