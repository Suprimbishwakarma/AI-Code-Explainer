import OpenAI from "openai";

const API_KEY = process.env.NEBIUS_API_KEY;

const client = new OpenAI({
  baseURL: "https://api.tokenfactory.nebius.com/v1/",
  apiKey: API_KEY,
});

const postCode = async (req, res) => {
  try {
    //Get the code and language from the request.
    const { code, language } = req.body;
    //Checking if everything we need is received or not.
    if (!code || !language) {
      return res.status(400).json({ message: "fields are required!" });
    }

    //preparing the message for AI.
    const messages = [
      {
        role: "user",
        content: `Please explain this ${language} code in simple terms: \n\n\`\`\`${language} \n ${code} \n\`\`\` `,
      },
    ];

    //Ask the AI to explain the code.
    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-120b", //brain to be used. (LLMs)
      messages, //prompt passed by the user.
      temperature: 0.3, //randomness and creativity of the response from LLMs.
      max_tokens: 800, //maximum number of words. (input prompt + response).
    });

    //extract the explanation from the AI's response.
    const explanation = response?.choices[0]?.message?.content;

    if (!explanation) {
      return res.status(500).json({ message: "failed to explain your code!" });
    }

    //Send the explanation back to the frontend.
    res.status(200).json({ explanation, language: language });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error!", details: error.message });
  }
};

export { postCode };
