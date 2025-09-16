//import OpenAI from 'openai';
//import {OPENAI_KEY} from './constants';

//const openAI = new OpenAI({
//  apiKey: OPENAI_KEY, 
//  dangerouslyAllowBrowser: true,
//});

//export default openAI;



import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
console.log(genAI)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export { genAI, model };


