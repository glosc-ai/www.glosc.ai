import { createVertex, GoogleVertexProvider } from "@ai-sdk/google-vertex";

export class VertexAI {
    public vertex: GoogleVertexProvider;
    public tools: GoogleVertexProvider["tools"];
    constructor() {
        const vertex = createVertex({
            project: process.env.GOOGLE_VERTEX_PROJECT || "",
            location: process.env.GOOGLE_VERTEX_LOCATION || "",
        });

        this.tools = vertex.tools;
        this.vertex = vertex;
    }
}
