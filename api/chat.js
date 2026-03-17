const { OpenAI } = require('openai');

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_TOKEN, 
});

module.exports = async (req, res) => {
    // إعدادات CORS للسماح بالطلبات
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ text: "طريقة الطلب غير مسموحة." });
    }

    try {
        const { prompt } = req.body;

        const chatCompletion = await client.chat.completions.create({
            model: "Qwen/Qwen2.5-7B-Instruct:together",
            messages: [
                { role: "system", content: "أنت مساعد تعليمي خبير في منصة TAIPING STUDY HARD." },
                { role: "user", content: prompt },
            ],
            max_tokens: 500,
        });

        res.status(200).json({ text: chatCompletion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ text: "حدث خطأ في الاتصال بالذكاء الاصطناعي." });
    }
};const { OpenAI } = require('openai');

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_TOKEN, 
});

module.exports = async (req, res) => {
    // إعدادات CORS للسماح بالطلبات
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ text: "طريقة الطلب غير مسموحة." });
    }

    try {
        const { prompt } = req.body;

        const chatCompletion = await client.chat.completions.create({
            model: "Qwen/Qwen2.5-7B-Instruct:together",
            messages: [
                { role: "system", content: "أنت مساعد تعليمي خبير في منصة TAIPING STUDY HARD." },
                { role: "user", content: prompt },
            ],
            max_tokens: 500,
        });

        res.status(200).json({ text: chatCompletion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ text: "حدث خطأ في الاتصال بالذكاء الاصطناعي." });
    }
};const { OpenAI } = require('openai');

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_TOKEN, 
});

module.exports = async (req, res) => {
    // إعدادات CORS للسماح بالطلبات
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ text: "طريقة الطلب غير مسموحة." });
    }

    try {
        const { prompt } = req.body;

        const chatCompletion = await client.chat.completions.create({
            model: "Qwen/Qwen2.5-7B-Instruct:together",
            messages: [
                { role: "system", content: "أنت مساعد تعليمي خبير في منصة TAIPING STUDY HARD." },
                { role: "user", content: prompt },
            ],
            max_tokens: 500,
        });

        res.status(200).json({ text: chatCompletion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ text: "حدث خطأ في الاتصال بالذكاء الاصطناعي." });
    }
};
