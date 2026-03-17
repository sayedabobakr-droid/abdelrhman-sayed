const { OpenAI } = require('openai');

// إعداد الاتصال بموديل Qwen عبر منصة Hugging Face
const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_TOKEN, 
});

module.exports = async (req, res) => {
    // السماح فقط بطلبات POST
    if (req.method !== 'POST') {
        return res.status(405).json({ text: "طريقة الطلب غير مسموحة." });
    }

    try {
        const { prompt } = req.body;

        const chatCompletion = await client.chat.completions.create({
            model: "Qwen/Qwen2.5-7B-Instruct:together",
            messages: [
                { role: "system", content: "أنت مساعد تعليمي خبير ومفيد للطلاب في منصة TAIPING STUDY HARD." },
                { role: "user", content: prompt },
            ],
            max_tokens: 500,
        });

        res.status(200).json({ text: chatCompletion.choices[0].message.content });
    } catch (error) {
        console.error("خطأ سيرفر:", error.message);
        res.status(500).json({ text: "حدث خطأ في الاتصال بالذكاء الاصطناعي، حاول مرة أخرى." });
    }
};