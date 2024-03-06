import { getSingleVocab } from './vocabData';
import { getSingleLanguage } from './languageData';

const getVocabLanguage = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
  const vocabObject = await getSingleVocab(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then
  const languageObject = await getSingleLanguage(vocabObject.language_id); // this function uses the data response from the bookObject

  return languageObject.title;
};

export default getVocabLanguage;
