# WC5 
<p>Je zal voor deze opdracht gebruik moeten maken van volgende concepten:</p>
<ul>
    <li style="list-style-type: none;">
        <ul>
            <li>POST request: een request methode waar data aan gestuurd kan worden</li>
            <li>GET request: een request methode die je in de browser kan bekijken</li>
            <li>fetch .then .catch om de requests uit te voeren</li>
            <li>localStorage</li>
        </ul>
    </li>
</ul>
<p>Indien een van deze concepten je niet duidelijk is, probeer dan nog eens te zoeken i het HC, of laat ons iets weten, dan leggen we het even uit.</p>
<p>&nbsp;</p>
<ol>
    <li>&nbsp;zorg ervoor dat je het login formulieren kan opvangen
        <ol>
            <li>haal het email en password uit de input fields</li>
            <li>stuur een POST request naar de API om in te loggen</li>
            <li>Sla het token op in de localstorage. Dit token zal je doorheen de rest van de opdracht gebruiken om jezelf te identificeren aan de API</li>
            <li>Verwijder het login form van de pagina</li>
        </ol>
    </li>
    <li>Het refreshen van de pagina zorgt dat je opnieuw moet inloggen
        <ol>
            <li>Zorg dat je elke keer als de pagina laad gaat kijken of er een token aanwezig is in de localstorage</li>
            <li>Indien wel, verwijder je het login formulier, en laad je de messages in&nbsp;</li>
            <li>Indien niet, moet de user eerst inloggen</li>
        </ol>
    </li>
    <li>Om de messages te laten zien, moet je een GET request sturen naar de API
        <ol>
            <li>Je zal het token mee moeten sturen in de URL, op de plaats van de __token__</li>
            <li>De response zal een status en een body hebben
                <ol>
                    <li>Indien de status 201 is, is er geen data, dat geef je dan ook weer aan de gebruiker</li>
                    <li>Indien de status 200 is, kan je de body parsen en weergeven aan de gebruiker</li>
                </ol>
            </li>
            <li>Parse de JSON en geef elk bericht weer
                <ol>
                    <li>Doe dit aan de hand van de voorbeeld HTML</li>
                </ol>
            </li>
        </ol>
    </li>
    <li>Om een bericht te sturen, zal je eerst het formulier onderaan de pagina moeten opvangen met een addEventListener
        <ol>
            <li>Stuur een POST request naar de api met de juiste data (je kan een overzicht vinden van alle endpoints op <a href="http://thecrew.cc/" target="_blank" rel="noopener">http://thecrew.cc/</a>)</li>
            <li>Zorg dat je je token mee stuurt in de URL</li>
        </ol>
    </li>
    <li>Na het sturen van een bericht, kan je de berichten opnieuw gaan halen in de API</li>
    <li>Zorg voor een interval dat de berichten elke paar seconden zal refreshen</li>
    <li>Indien de gebruiker op "logout" duwt, kan je de token verwijderen uit de localstorage</li>
    <li>Style it up</li>
</ol>