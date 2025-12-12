import {
    eventHandler,
    proxyRequest,
    getRouterParam,
    getProxyRequestHeaders,
} from "h3";

export default eventHandler(async (event) => {
    const path = getRouterParam(event, "path") || "";
    const target = `https://ai-gateway.vercel.sh/v1/${path}`;
    const AI_GATEWAY_API_KEY = process.env.AI_GATEWAY_API_KEY || "";
    return proxyRequest(event, target, {
        headers: {
            ...getProxyRequestHeaders(event),
            Authorization: `Bearer ${AI_GATEWAY_API_KEY}`,
        },
    });
});
