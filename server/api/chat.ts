import { convertToModelMessages, streamText, UIMessage } from "ai";

// http://localhost:3000/api/chat
export default defineEventHandler(async (event) => {
    const { messages, model }: { messages: UIMessage[]; model: string } =
        await readBody(event);

    const result = streamText({
        model,
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
});
