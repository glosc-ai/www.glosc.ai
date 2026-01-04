import {
    convertToModelMessages,
    streamText,
    tool,
    jsonSchema,
    ToolLoopAgent,
} from "ai";
import type { ToolSet, UIMessage } from "ai";
import { webSearch } from "@exalabs/ai-sdk";

// http://localhost:3000/api/chat
export default defineEventHandler(async (event) => {
    const {
        messages,
        model,
        tools: clientTools,
        webSearch: clientWebSearch,
    }: {
        messages: UIMessage[];
        model: string;
        tools?: Record<string, any>;
        webSearch?: boolean;
    } = await readBody(event);

    const tools: ToolSet = {};
    if (clientTools) {
        for (const [name, toolDef] of Object.entries(clientTools)) {
            tools[name] = tool({
                description: toolDef.description,
                inputSchema: jsonSchema(toolDef.inputSchema.jsonSchema),
            });
        }
    }
    if (clientWebSearch) {
        tools["webSearch"] = webSearch();
    }

    // const vertex = new VertexAI();

    const agent = new ToolLoopAgent({
        model: model || "xai/grok-code-fast-1",
        tools,
    });

    const result = await agent.stream({
        messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
});
