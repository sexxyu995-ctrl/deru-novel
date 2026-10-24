const PREFIX='deru:v1:';
export function readStore(key,fallback=null){try{const raw=localStorage.getItem(PREFIX+key);return raw===null?fallback:JSON.parse(raw)}catch(error){console.warn('DERU: data lokal tidak dapat dibaca',error);return fallback}}
export function writeStore(key,value){try{localStorage.setItem(PREFIX+key,JSON.stringify(value));return true}catch(error){console.error('DERU: penyimpanan gagal',error);return false}}
export function removeStore(key){try{localStorage.removeItem(PREFIX+key);return true}catch{return false}}
export function clearDeruStore(){try{Object.keys(localStorage).filter(k=>k.startsWith(PREFIX)).forEach(k=>localStorage.removeItem(k));return true}catch{return false}}
