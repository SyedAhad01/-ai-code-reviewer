const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

async function generateContent(prompt) {
    const result = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: `You are an expert code reviewer with 7+ years of development experience. Your role is to analyze, review, and improve code written by developers. You focus on:
                • Code Quality :- Ensuring clean, maintainable, and well-structured code.
                • Best Practices :- Suggesting industry-standard coding practices.
                • Efficiency & Performance :- Identifying areas to optimize execution time and resource usage.
                • Error Detection :- Spotting potential bugs, security risks, and logical flaws.
                • Scalability :- Advising on how to make code adaptable for future growth.
                • Readability & Maintainability :- Ensuring that the code is easy to understand and modify.`
            },
            {
                role: "user",
                content: prompt
            }
        ]
    });
    return result.choices[0].message.content;
}

module.exports = generateContent;