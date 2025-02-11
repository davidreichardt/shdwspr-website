import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function GET() {
    const API_KEY = env.API_KEY;
    const ORG_SID = env.ORG_SID;

    try {
        const response = await fetch(`https://api.starcitizen-api.com/${API_KEY}/v1/live/organization_members/${ORG_SID}`);
        const result = await response.json();

        if (!result || !Array.isArray(result.data)) {
            return json({ error: "No data found" }, { status: 404 });
        }

        return json({ members: result.data });
    } 

    catch (error) {
        return json({ error: error.message }, { status: 500 });
    }
}