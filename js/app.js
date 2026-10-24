import {renderNavbar} from '../components/navbar.js';
import {renderFooter} from '../components/footer.js';
import {applyLanguage} from './language.js';
import {readStore} from './storage.js';
import {initHome} from './pages/home.js';
import {initExplore} from './pages/explore.js';
import {initNovelDetail} from './pages/novel-detail.js';
import {initReader} from './pages/reader-page.js';
import {initWrite} from './pages/write-page.js';
import {initEditor} from './pages/editor-page.js';
import {initProfile} from './pages/profile-page.js';
import {initLibrary} from './pages/library-page.js';
import {initNotifications} from './pages/notifications-page.js';
import {initSettings} from './pages/settings-page.js';
import {initAuthPage} from './pages/auth-page.js';
renderNavbar();renderFooter();applyLanguage();const savedPrefs=readStore('readerPreferences',{});if(savedPrefs.theme==='dark')document.body.classList.add('theme-dark');if(savedPrefs.theme==='sepia')document.body.classList.add('theme-sepia');
const pages={home:initHome,explore:initExplore,novel:initNovelDetail,reader:initReader,write:initWrite,editor:initEditor,profile:initProfile,library:initLibrary,notifications:initNotifications,settings:initSettings,login:()=>initAuthPage('login'),register:()=>initAuthPage('register')};
try{pages[document.body.dataset.page]?.()}catch(error){console.error('DERU page error:',error);const target=document.querySelector('#page-module')||document.querySelector('#page-content');if(target)target.innerHTML='<div class="notice">Halaman mengalami kendala saat dimuat. Muat ulang halaman atau kembali ke beranda.</div>'}
