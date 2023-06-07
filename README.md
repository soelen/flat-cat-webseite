In dieser README-Datei werden die folgenden Inhalte erklärt:

    Installation der erforderlichen Pakete:
        npm create vite@latest: Installiert das Vite-Build-Tool.
        npm install bulma --save-dev: Installiert das Bulma-Framework als Entwicklungsabhängigkeit.
        npm install node-sass: Installiert das Node-Sass-Paket.
        npm install react-router-dom --save-dev: Installiert das React Router DOM-Paket als Entwicklungsabhängigkeit.

    Starten des Projekts:
        npm run dev: Startet das Projekt.

Falls die Webseite nicht automatisch über das Repository auf Netlify veröffentlicht wurde, führe den folgenden Befehl aus: npm run build. 
= Erstellt eine Build-Version der Webseite für die Veröffentlichung auf Netlify.

!! Diese Datei ist keine Anleitung, sondern dient lediglich zur Veranschaulichung des Programmiercodes meiner Webseite.
__________________________________________________________________________________________

1. Führe die folgenden Befehle in deinem Terminal/der Befehlszeile aus, um die erforderlichen Pakete zu installieren:

   - `npm i` oder `npm install`: Dieser Befehl installiert die in der `package.json`-Datei aufgeführten Abhängigkeiten für dein Projekt.

   - `npm create vite@latest` oder `npm install vite`: Hierbei handelt es sich um einen Befehl zum Installieren des Vite-Build-Tools, das eine schnelle Entwicklungsumgebung für JavaScript-Projekte bietet.

   - `npm install bulma --save-dev`: Dieser Befehl installiert das Bulma-Framework, eine CSS-Bibliothek, die bei der Gestaltung deiner Webseite helfen kann. Die Option `--save-dev` fügt das Paket als Entwicklungsabhängigkeit hinzu, was bedeutet, dass es nur für die Entwicklung benötigt wird und nicht für die Produktion.

   - `npm install node-sass`: Dieser Befehl installiert das Node-Sass-Paket, das die Verwendung von Sass (Syntactically Awesome Stylesheets) in deinem Projekt ermöglicht. Sass ist eine CSS-Erweiterungssprache, die mehr Funktionen und Möglichkeiten bietet als herkömmliches CSS.

   - `npm install react-router-dom --save-dev`: Dieser Befehl installiert das React Router DOM-Paket, das eine Navigation und Routing-Funktionalität für React-Anwendungen bereitstellt. Auch hier wird das Paket als Entwicklungsabhängigkeit hinzugefügt.

2. Führe den Befehl `npm run dev` aus, um dein Projekt zu starten. Dieser Befehl führt die in der `package.json`-Datei definierten Skripte aus und startet die Entwicklungsserver, der deine Anwendung ausführt und Live-Reload-Funktionen bietet. Du kannst deine Webseite nun im Entwicklungsmodus anzeigen und Änderungen im Code automatisch beobachten.

_--Save_-dev_____________________________________________________________________________________________________

--Save -dev bezieht sich auf die Verwendung der Option --save-dev oder --save-devDependencies bei der Installation eines Pakets. Durch das Hinzufügen des Pakets als Entwicklungsabhängigkeit wird es nur für die Entwicklungsumgebung benötigt und nicht für die Produktionsumgebung. Das bedeutet, dass das Paket nicht in der finalen Build- oder Veröffentlichungsversion deiner Anwendung enthalten sein wird. Es wird jedoch verwendet, um beispielsweise den Entwicklungsprozess zu erleichtern, Werkzeuge bereitzustellen oder während der Entwicklung zu testen.