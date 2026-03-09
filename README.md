# RovaKetchup
En Avancerad 
# 🍅 KETCHUP PMS - Flagship Edition
**Projekt Äppelskrutt | Rova Ultra Pro**

En ultra-optimerad, lokalt körd PWA (Progressive Web App) designad för att spåra kliniska medicin-protokoll (med fokus på Slinda/Drospirenon). Byggd för att leverera extrem prestanda, integritet och en premium-användarupplevelse på moderna smartphones som OnePlus 15 och iPhone.

![Version](https://img.shields.io/badge/Version-3.0_Ultra-red)
![Platform](https://img.shields.io/badge/Platform-iOS_%7C_Android-black)
![Tech](https://img.shields.io/badge/Tech-React_%7C_Tailwind_%7C_PWA-blue)

## ✨ Flaggskeppsfunktioner

* ⚡ **120Hz Optimerad:** Mjuka `cubic-bezier`-animationer, hårdvaruaccelerering (GPU) och förhindrad "overscroll" anpassat för högfrekventa skärmar.
* 🕶️ **OLED True Dark Mode:** Djup svärta (`#030303`) för batteribesparing, kombinerat med avancerad "Glassmorphism" (frostade glaspaneler).
* 📡 **100% Offline-First:** Tack vare en inbyggd Service Worker (`sw.js`) sparas ramverket lokalt. Appen fungerar sömlöst i flygplansläge.
* 🔒 **Lokal & Säker Lagring:** All känslig hälsodata sparas exklusivt på enhetens interna minne (`localStorage`). Ingen data skickas till externa molnservrar.
* 📍 **Geolokalisering & Haptik:** Registrerar automatiskt position (stad) när en dos loggas via OpenStreetMap API. Bekräftar inmatning med tung, fysisk haptisk feedback (vibration).
* 🧠 **Rova-Brain AI:** En inbyggd matematisk motor som analyserar dagsform och blödningsfrekvens för att ge realtids-utlåtanden baserat på klinisk logik för Drospirenon.

## 🛠️ Teknisk Stack
Ingen bygg-process (npm/webpack) krävs. Appen körs rent i webbläsaren via CDN-injektion.
* **Frontend:** React 18, Babel (Standalone)
* **Styling:** Tailwind CSS
* **Ikoner:** Lucide Icons
* **Grafer:** Recharts & Chart.js
* **PWA:** Vanilla JavaScript Service Worker

## 🚀 Driftsättning (GitHub Pages)
För att starta systemet:
1. Ladda upp `index.html`, `manifest.json` och `sw.js` till huvudbranchen (`main`).
2. Navigera till **Settings -> Pages** i ditt GitHub-repo.
3. Välj **Deploy from a branch** och sätt till `main`. Spara.
4. Öppna länken i telefonens webbläsare (Safari/Chrome).
5. Välj **"Lägg till på hemskärmen"** för att installera appen.

---

## ⚠️ ROVA ENCRYPTION ENGINE (Admin Mode)
Appen innehåller en dold administratörsterminal för utvecklare, med full insyn i den lokala databasen.

**Hur man öppnar portalen:**
1. I appens huvudvy, klicka **exakt 4 gånger** snabbt (inom 1.5 sekunder) på "🍅 KETCHUP"-logotypen uppe till vänster.
2. Systemet bekräftar med en sekventiell vibration och skärmen går in i Terminal Mode.
3. **Passkey:** Ange `rova6666` för att dekryptera.

**Admin-verktyg:**
* Raw JSON Data Dump av `localStorage`.
* **NUKE DATABASE:** Möjlighet att oåterkalleligen radera all lokal patientdata (används för återställning/felsökning).

---
*Utvecklad av Rova Systems | 2026*
