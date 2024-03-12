import OpenAI from "openai";
import { OpenAI_key } from "./constants";

const openai = new OpenAI({
  apiKey: OpenAI_key,
  dangerouslyAllowBrowser: true,
});

export default openai;
