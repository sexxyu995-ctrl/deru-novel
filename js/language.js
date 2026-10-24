import {readStore,writeStore} from './storage.js';
const dictionary={id:{home:'Beranda',explore:'Jelajahi',genres:'Genre',library:'Perpustakaan',login:'Masuk',write:'Mulai Menulis',search:'Cari judul, penulis, atau deskripsi…'},en:{home:'Home',explore:'Explore',genres:'Genres',library:'Library',login:'Log in',write:'Start Writing',search:'Search titles, authors, or descriptions…'}};
export function getLanguage(){return readStore('language','id')}
export function setLanguage(lang){const value=lang==='en'?'en':'id';writeStore('language',value);applyLanguage();return value}
export function t(key){return dictionary[getLanguage()]?.[key]||dictionary.id[key]||key}
export function applyLanguage(){const lang=getLanguage();document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=dictionary[lang]?.[el.dataset.i18n]||dictionary.id[el.dataset.i18n]||el.textContent);document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>el.placeholder=dictionary[lang]?.[el.dataset.i18nPlaceholder]||el.placeholder)}
