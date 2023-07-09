import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// POST defines a post method
export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();

    try {
        // we need to connect to the db everytime we make a POST request coz this is a lambda function as per nextjs functionality
        await connectToDB()
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 })
    }
}