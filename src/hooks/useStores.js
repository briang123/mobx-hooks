import { useContext } from 'react';
import storesContext from './contexts';

const useStores = () => useContext(storesContext);

export default useStores;
