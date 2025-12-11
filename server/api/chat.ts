import {
    convertToModelMessages,
    streamText,
    ToolSet,
    UIMessage,
    tool,
    stepCountIs,
    jsonSchema,
} from "ai";

// http://localhost:3000/api/chat
export default defineEventHandler(async (event) => {
    const {
        messages,
        model,
        tools: clientTools,
    }: {
        messages: UIMessage[];
        model: string;
        webSearch: boolean;
        tools?: Record<string, any>;
    } = await readBody(event);

    const tools: ToolSet = {};
    if (clientTools) {
        for (const [name, toolDef] of Object.entries(clientTools)) {
            tools[name] = tool({
                description: toolDef.description,
                parameters: jsonSchema(toolDef.parameters),
            } as any);
        }
    }

    const result = streamText({
        model: model || "xai/grok-code-fast-1",
        messages: convertToModelMessages(messages),
        tools,
        stopWhen: stepCountIs(10),
    });

    return result.toUIMessageStreamResponse();
});
