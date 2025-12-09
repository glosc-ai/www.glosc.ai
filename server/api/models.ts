//http://localhost:3000/api/models
export default defineEventHandler(async (event) => {
    const res = await fetch("https://ai-gateway.vercel.sh/v1/models");
    return res.json();
});
