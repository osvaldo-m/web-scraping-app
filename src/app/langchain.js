import { WebBrowser } from "langchain/tools/webbrowser";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

export async function run() {
  // this will not work with Azure OpenAI API yet
  // Azure OpenAI API does not support embedding with multiple inputs yet
  // Too many inputs. The max number of inputs is 1.  We hope to increase the number of inputs per request soon. Please contact us through an Azure support request at: https://go.microsoft.com/fwlink/?linkid=2213926 for further questions.
  // So we will fail fast, when Azure OpenAI API is used
  if (process.env.AZURE_OPENAI_API_KEY) {
    throw new Error(
      "Azure OpenAI API does not support embedding with multiple inputs yet"
    );
  }

  const model = new ChatOpenAI({ temperature: 0 });
  const embeddings = new OpenAIEmbeddings(
    process.env.AZURE_OPENAI_API_KEY
      ? { azureOpenAIApiDeploymentName: "Embeddings2" }
      : {}
  );

  const browser = new WebBrowser({ model, embeddings });

  const result = await browser.call(`https://www.mre.gov.py/`);

  console.log(result);

  return result;
}
