import { getVocab } from './vocabData';

const searchVocab = async (uid, searchValue) => {
  const allVocab = await getVocab(uid);
  const filteredVocab = await allVocab.filter((vocab) => (
    vocab.title.toLowerCase().includes(searchValue.toLowerCase())
    || vocab.definition.toLowerCase().includes(searchValue.toLowerCase())));

  return filteredVocab;
};

export default searchVocab;
