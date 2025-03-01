import { json } from '@sveltejs/kit';
import dotenv from 'dotenv';
import { ORG_SID } from '../../../config.js';

dotenv.config();

export async function GET() {
    const API_KEY = process.env.API_KEY;

    try {
        const response = await fetch(`https://api.starcitizen-api.com/${API_KEY}/v1/live/organization_members/${ORG_SID}`);
        const result = await response.json();

        if (!result || !Array.isArray(result.data)) {
            return json({ error: 'No data found' }, { status: 404 });
        }

        return json({ members: result.data });
    } 

    catch (error) {
        return json({ error: (error as Error).message }, { status: 500 });
    }
}