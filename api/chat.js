const { OpenAI } = require('openai');

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_TOKEN, 
});

module.exports = async (req, res) => {
    // التحقق من أن الطلب من نوع POST فقط
    if (req.method !== 'POST') {
        return res.status(405).json({ text: "Method Not Allowed" });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ text: "الرجاء إدخال نص السؤال." });
        }

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
        console.error("Error:", error.message);
        // خطأ 500 غالباً بسبب HF_TOKEN غير صحيح
        res.status(500).json({ text: "حدث خطأ في الاتصال بالذكاء الاصطناعي، تأكد من إعدادات التوكن." });
    }
};
