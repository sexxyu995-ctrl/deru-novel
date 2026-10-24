import {getPublishedNovels,searchNovels,filterNovels} from './novels.js';
export function findNovels(options={}){return filterNovels(searchNovels(options.query||'',getPublishedNovels()),options)}
