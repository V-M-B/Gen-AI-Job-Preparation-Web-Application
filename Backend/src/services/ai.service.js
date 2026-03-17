const {GoogleGenAI} = require("@google/genai")
const {zod}= require("zod")
const {zodToJsonSchema} = require("zod-to-json-schema")


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
})



async function generateInterviewReport(jobDescription, resumeText, selfDescription) {}


























































// async function invokeai(){
//     const response = await ai.models.generateContent({
//         model: "models/gemini-2.5-flash",
//         contents:"Helllo gemi ! explian the concept of AI in simple terms"
//     })
//     console.log(response.text)
// }    

// module.exports = invokeai;