import { messages as englishMessages } from "./en-us";
import { messages as portugueseMessages } from "./pt-br";
import { messages as spanishMessages } from "./es";

const messages = {
  ...englishMessages,
  ...portugueseMessages,
  ...spanishMessages,
};

export { messages };
