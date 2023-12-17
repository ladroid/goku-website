document.addEventListener('DOMContentLoaded', function() {
    const messages = {
        en: {
            welcomeTitle: 'Goku',
            welcomeSubtitle: '2D Game Engine built in Rust',
            robustTitle: 'Robust Foundation',
            robustDescription: 'Built on the reliable SDL2 framework, Goku ensures a focused and lightweight development experience with minimal dependencies',
            graphicsMasteryTitle: 'Graphics Mastery',
            graphicsMasteryDescription: 'Dive into a comprehensive suite of 2D graphics tools, from buttons, sliders, and text, to advanced features like particle systems and parallax backgrounds',
            audioControlTitle: 'Audio Control',
            audioControlDescription: 'Enrich your games with captivating soundtracks and sound effects, offering full control to play, loop, pause, and resume audio to keep players immersed',
            interactiveEngagementTitle: 'Interactive Engagement',
            interactiveEngagementDescription: 'Effortless input handling for keyboards, mice, and gamepads ensures your players stay connected to the action',
            guiDevelopmentInterfaceTitle: 'GUI Development Interface',
            guiDevelopmentInterfaceDescription: 'Accelerate your development process with a built-in text editor and debug console, streamlining the journey from concept to launch',
            physicsAnimationTitle: 'Physics & Animation',
            physicsAnimationDescription: 'Breathe life into your games with essential physics and animation tools, from collisions and rigid body mechanics to fluid animations that captivate',
            sceneCompositionTitle: 'Scene Composition',
            sceneCompositionDescription: 'Leverage a flexible JSON file format to craft intricate scenes or individual meshes with ease',
            aiDialogueSystemsTitle: 'AI & Dialogue Systems',
            aiDialogueSystemsDescription: 'Build engaging narratives and smart AI systems, with an intuitive behavior tree and dialogue system at your disposal',
            getStarted: 'Get Started',
            menu: {
                home: 'Home',
                learn: 'Learn',
                news: 'News',
                community: 'Community',
                assets: 'Assets',
                examples: 'Examples',
                github: 'GitHub'
            },
            githubDesc: 'Interact with Goku\'s source code, report issues, and suggest changes',
            discordDesc: 'A community to discuss Goku, Rust, and game development',
            gokuQADesc: 'The go-to place to ask Goku questions and get Goku answers',
            gokuDiscussionsDesc: 'The place to discuss about Goku',
            // ...other translations
        },
        es: {
            welcomeTitle: 'Goku',
            welcomeSubtitle: 'Motor de juego 2D construido en Rust',
            robustTitle: 'Fundación Robusta',
            robustDescription: 'Construido sobre el confiable marco SDL2, Goku asegura una experiencia de desarrollo enfocada y ligera con dependencias mínimas',
            graphicsMasteryTitle: 'Maestría en Gráficos',
            graphicsMasteryDescription: 'Sumérgete en una completa suite de herramientas gráficas 2D, desde botones, deslizadores y texto, hasta características avanzadas como sistemas de partículas y fondos parallax',
            audioControlTitle: 'Control de Audio',
            audioControlDescription: 'Enriquece tus juegos con cautivadoras bandas sonoras y efectos de sonido, ofreciendo control total para reproducir, pausar y reanudar el audio para mantener a los jugadores inmersos',
            interactiveEngagementTitle: 'Interacción Activa',
            interactiveEngagementDescription: 'Manejo de entrada sin esfuerzo para teclados, ratones y gamepads que asegura que tus jugadores se mantengan conectados a la acción',
            guiDevelopmentInterfaceTitle: 'Interfaz de Desarrollo GUI',
            guiDevelopmentInterfaceDescription: 'Acelera tu proceso de desarrollo con un editor de texto incorporado y consola de depuración, agilizando el viaje desde el concepto hasta el lanzamiento',
            physicsAnimationTitle: 'Física y Animación',
            physicsAnimationDescription: 'Dale vida a tus juegos con herramientas esenciales de física y animación, desde colisiones y mecánicas de cuerpos rígidos hasta animaciones fluidas que cautivan',
            sceneCompositionTitle: 'Composición de Escena',
            sceneCompositionDescription: 'Aprovecha un formato de archivo JSON flexible para crear escenas intrincadas o mallas individuales con facilidad',
            aiDialogueSystemsTitle: 'Sistemas de IA y Diálogo',
            aiDialogueSystemsDescription: 'Construye narrativas atractivas y sistemas de IA inteligentes, con un intuitivo árbol de comportamiento y sistema de diálogo a tu disposición',
            getStarted: 'Comenzar',
            menu: {
                home: 'Inicio',
                learn: 'Aprender',
                news: 'Noticias',
                community: 'Comunidad',
                assets: 'Activos',
                examples: 'Ejemplos',
                github: 'GitHub'
            },
            githubDesc: 'Interactúa con el código fuente de Goku, reporta problemas y sugiere cambios',
            discordDesc: 'Una comunidad para discutir sobre Goku, Rust y el desarrollo de juegos',
            gokuQADesc: 'El lugar indicado para hacer preguntas sobre Goku y obtener respuestas',
            gokuDiscussionsDesc: 'El lugar para discutir sobre Goku',
            // ...other translations
        },
        de: {
            welcomeTitle: 'Goku',
            welcomeSubtitle: '2D-Spiel-Engine entwickelt in Rust',
            robustTitle: 'Robuste Grundlage',
            robustDescription: 'Auf dem zuverlässigen SDL2-Framework aufgebaut, gewährleistet Goku eine fokussierte und leichtgewichtige Entwicklungserfahrung mit minimalen Abhängigkeiten',
            graphicsMasteryTitle: 'Grafikbeherrschung',
            graphicsMasteryDescription: 'Tauchen Sie ein in eine umfassende Palette von 2D-Grafiktools, von Buttons, Schiebereglern und Text bis hin zu erweiterten Funktionen wie Partikelsystemen und Parallax-Hintergründen',
            audioControlTitle: 'Audiosteuerung',
            audioControlDescription: 'Bereichern Sie Ihre Spiele mit fesselnden Soundtracks und Soundeffekten und bieten Sie volle Kontrolle, um Audio abzuspielen, zu wiederholen, anzuhalten und fortzusetzen, um die Spieler zu fesseln',
            interactiveEngagementTitle: 'Interaktives Engagement',
            interactiveEngagementDescription: 'Mühelose Eingabeverarbeitung für Tastaturen, Mäuse und Gamepads stellt sicher, dass Ihre Spieler mit der Aktion verbunden bleiben',
            guiDevelopmentInterfaceTitle: 'GUI-Entwicklungsschnittstelle',
            guiDevelopmentInterfaceDescription: 'Beschleunigen Sie Ihren Entwicklungsprozess mit einem integrierten Texteditor und einer Debug-Konsole und verkürzen Sie die Reise von der Konzeption bis zum Start',
            physicsAnimationTitle: 'Physik & Animation',
            physicsAnimationDescription: 'Beleben Sie Ihre Spiele mit wichtigen Physik- und Animationstools, von Kollisionen und starren Körpermechaniken bis hin zu flüssigen Animationen, die faszinieren',
            sceneCompositionTitle: 'Szenenzusammensetzung',
            sceneCompositionDescription: 'Nutzen Sie ein flexibles JSON-Dateiformat, um komplexe Szenen oder einzelne Meshes mit Leichtigkeit zu erstellen',
            aiDialogueSystemsTitle: 'KI- & Dialogsysteme',
            aiDialogueSystemsDescription: 'Erstellen Sie ansprechende Erzählungen und intelligente KI-Systeme mit einem intuitiven Verhaltensbaum und einem Dialogsystem zur Verfügung',
            getStarted: 'Anfangen',
            menu: {
                home: 'Startseite',
                learn: 'Lernen',
                news: 'Nachrichten',
                community: 'Gemeinschaft',
                assets: 'Vermögenswerte',
                examples: 'Beispiele',
                github: 'GitHub'
            },
            githubDesc: 'Interagiere mit dem Quellcode von Goku, melde Probleme und schlage Änderungen vor',
            discordDesc: 'Eine Gemeinschaft, um über Goku, Rust und die Spieleentwicklung zu diskutieren',
            gokuQADesc: 'Der Anlaufpunkt, um Fragen zu Goku zu stellen und Antworten zu bekommen',
            gokuDiscussionsDesc: 'Der Ort, um über Goku zu diskutieren',
            // ...other translations
        },
        fr: {
            welcomeTitle: 'Goku',
            welcomeSubtitle: 'Moteur de jeu 2D développé en Rust',
            robustTitle: 'Fondation Robuste',
            robustDescription: 'Construit sur le framework fiable SDL2, Goku assure une expérience de développement concentrée et légère avec des dépendances minimales',
            graphicsMasteryTitle: 'Maîtrise Graphique',
            graphicsMasteryDescription: 'Plongez dans une suite complète d\'outils graphiques 2D, des boutons, curseurs et textes, aux fonctionnalités avancées comme les systèmes de particules et les arrière-plans parallaxe',
            audioControlTitle: 'Contrôle Audio',
            audioControlDescription: 'Enrichissez vos jeux avec des bandes sonores captivantes et des effets sonores, offrant un contrôle total pour jouer, boucler, mettre en pause et reprendre l\'audio pour maintenir les joueurs immergés',
            interactiveEngagementTitle: 'Engagement Interactif',
            interactiveEngagementDescription: 'Gestion des entrées sans effort pour les claviers, souris, et manettes garantissant que vos joueurs restent connectés à l\'action',
            guiDevelopmentInterfaceTitle: 'Interface de Développement GUI',
            guiDevelopmentInterfaceDescription: 'Accélérez votre processus de développement avec un éditeur de texte intégré et une console de débogage, simplifiant le parcours du concept au lancement',
            physicsAnimationTitle: 'Physique & Animation',
            physicsAnimationDescription: 'Donnez vie à vos jeux avec des outils essentiels de physique et d\'animation, des collisions et mécaniques de corps rigides aux animations fluides qui captivent',
            sceneCompositionTitle: 'Composition de Scène',
            sceneCompositionDescription: 'Exploitez un format de fichier JSON flexible pour créer des scènes complexes ou des maillages individuels en toute simplicité',
            aiDialogueSystemsTitle: 'Systèmes IA & Dialogue',
            aiDialogueSystemsDescription: 'Construisez des récits engageants et des systèmes IA intelligents, avec un arbre de comportement intuitif et un système de dialogue à votre disposition',
            getStarted: 'Commencer',
            menu: {
                home: 'Accueil',
                learn: 'Apprendre',
                news: 'Actualités',
                community: 'Communauté',
                assets: 'Actifs',
                examples: 'Exemples',
                github: 'GitHub'
            },
            githubDesc: 'Interagissez avec le code source de Goku, signalez des problèmes et suggérez des modifications',
            discordDesc: 'Une communauté pour discuter de Goku, Rust et du développement de jeux',
            gokuQADesc: 'L\'endroit idéal pour poser des questions sur Goku et obtenir des réponses',
            gokuDiscussionsDesc: 'Le lieu pour discuter de Goku',
            // ...other translations
        },
        ja: {
            welcomeTitle: 'Goku',
            welcomeSubtitle: 'Rustで構築された2Dゲームエンジン',
            robustTitle: '頑健な基盤',
            robustDescription: '信頼性の高いSDL2フレームワークに構築されたGokuは、最小の依存関係で集中的かつ軽量な開発体験を提供します',
            graphicsMasteryTitle: 'グラフィックスマスタリー',
            graphicsMasteryDescription: 'ボタン、スライダー、テキストから、パーティクルシステムやパララックスバックグラウンドのような高度な機能まで、包括的な2Dグラフィックスツールにダイブしましょう',
            audioControlTitle: 'オーディオコントロール',
            audioControlDescription: '魅力的なサウンドトラックと効果音でゲームを豊かにし、プレイヤーが没頭できるようにオーディオの再生、ループ、一時停止、および再開を完全に制御します',
            interactiveEngagementTitle: 'インタラクティブエンゲージメント',
            interactiveEngagementDescription: 'キーボード、マウス、ゲームパッドの入力処理が簡単で、プレイヤーがアクションに接続されたままでいられます',
            guiDevelopmentInterfaceTitle: 'GUI開発インターフェース',
            guiDevelopmentInterfaceDescription: '組み込みのテキストエディターとデバッグコンソールで開発プロセスを加速し、コンセプトからローンチまでの旅を効率化します',
            physicsAnimationTitle: '物理学とアニメーション',
            physicsAnimationDescription: '衝突やリジッドボディメカニクスから流れるようなアニメーションまで、基本的な物理学とアニメーションツールでゲームに命を吹き込みます',
            sceneCompositionTitle: 'シーン構成',
            sceneCompositionDescription: '柔軟なJSONファイルフォーマットを活用して、複雑なシーンや個々のメッシュを簡単に作成します',
            aiDialogueSystemsTitle: 'AIとダイアログシステム',
            aiDialogueSystemsDescription: '直感的な動作ツリーとダイアログシステムを利用して、エンゲージングなナラティブとスマートなAIシステムを構築します',
            getStarted: '始める',
            menu: {
                home: 'ホーム',
                learn: '学ぶ',
                news: 'ニュース',
                community: 'コミュニティ',
                assets: 'アセット',
                examples: '例',
                github: 'GitHub'
            },
            githubDesc: 'Gokuのソースコードとの対話、問題の報告、変更の提案',
            discordDesc: 'Goku、Rust、ゲーム開発について話し合うコミュニティ',
            gokuQADesc: 'Gokuに関する質問をして答えを得るための場所',
            gokuDiscussionsDesc: 'Gokuについて話し合う場所',
            // ...other translations
        },        
        // ...other languages
    };

    // Create a new VueI18n instance
    const i18n = new VueI18n({
        locale: localStorage.getItem('selectedLanguage') || 'en', // set locale based on saved preference or default to 'en'
        messages, // set locale messages
    });

    // Create a new Vue instance
    new Vue({
        el: '#app', // attach this vue instance to an element in your HTML
        i18n, // pass the VueI18n instance to the Vue instance
    });

    // Change Language Function
    window.changeLanguage = function(selector) {
        var lang = selector.value;
        i18n.locale = lang; // Change the language
        localStorage.setItem('selectedLanguage', lang); // Save the selected language
    }

    // Set the language selector to the saved language
    var savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        var languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            languageSelector.value = savedLanguage;
        }
    }
});
