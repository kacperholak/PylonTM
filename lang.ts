/* This file contains all of the strings used by the bot.
 * It exists so that the language the bot uses may easily be changed by someone who is not code-savvy.
 * %1, %2, %3 etc. are replaced with dynamic information depending on the string.
 * By using an array of strings rather than a single string, a random one is returned.
 */

export const dictionary: any = {
  /*
   * Global strings.
   */
  unknown_cmd:
    'Nie znaleziono podanej komendy. Sprawdź listę dostęnych komend, używając `!help` i spróbuj ponownie.',
  no_permission: 'Nie masz uprawnień do użycia tej komendy.',
  incorrect_channel: 'Nie możesz użyć tej komendy w tym kanale.',
  unknown_user:
    'No user could be found with that info. Try copying an ID, or simply leaving the ID blank to point to yourself.',
  minutes_name: 'minutes',
  minutes_name_single: 'minute',
  page_numbers: 'Strona %1 z %2',
  incorrect_page:
    'There are only %1 pages. Please enter a valid page number, or no number to view the first page.',
  // Help main page strings.
  help_title: '%1 Commands Hub',
  help_desc:
    'Aby zdobyć więcej informacji na temat wybranej komendy bądź kategorii, wpisz jej nazwę po komendzie `!help`.',
  help_incorrect:
    'Nie znaleziono podanej kategorii ani komendy. Sprawdź listę, używając komendy `!help` i spróbuj ponownie.',
  help_no_categories: 'Nie znaleziono podanej kategorii. Spróbuj ponownie.',
  help_default_desc: '*Brak opisu*',
  category_default_title: 'Nowe komenda',
  category_default_desc: 'Ta komenda nie została jeszcze skategoryzowana.',
  category_tm_title: 'Terraformacja Marsa',
  category_tm_desc:
    'Komendy związane z naszą ulubioną grą - Terraformacja Marsa.',
  category_links_title: 'Szybkie linki',
  category_links_desc: 'Łatwy dostęp do ważnych stron.',
  category_links_desc_long:
    'Nie umiesz znaleźć linku? Wybierz odpowiednią komendę, aby uzyskać link',
  /*
   * Help category and command page strings.
   */
  help_cmd_aliases: '*Działa także jako:*',
  help_cmd_args: '*Dostępne opcje:*',
  help_cmd_restrict_channel:
    "⚠️ *This command can only be run in the bot's dedicated channels.*",
  help_no_cmds_in_category:
    'No commands could be found in that category. Please contact Willey.',
  cmd_help: 'View all of the commands and access info about them.',
  cmd_help_long:
    "With this command you can preview every other command and access info about them. But you already knew that, didn't you?",
  cmd_help_arg_topic: 'The command or category to learn more about.',
  cmd_links_heroku: 'Link do Heroku',
  cmd_links_heroku_long: 'Wyświetla link do platformy Heroku',
  cmd_links_regulamin: 'Link do regulaminu',
  cmd_links_regulamin_long: 'Wyświetla link do regulaminu aktualnego turnieju',
  cmd_links_wyniki: 'Link do wyników',
  cmd_links_wyniki_long: 'Wyświetla link do wyników aktualnego turnieju',
  cmd_links_cards: 'Link do listy kart',
  cmd_links_cards_long:
    'Wyświetla link do listy kart z gry Terraformacja Marsa.',
  cmd_links_zapisy: 'Link do zapisów',
  cmd_links_zapisy_long:
    'Wyświetla link do formularza zapisowego na najbliższy turniej.',
  cmd_links_bugs: 'Link do listy bugów',
  cmd_links_bugs_long:
    'Wyświetla link do listy bugów występujących w wersji Steamowej TM.',
  cmd_tm_map: 'Wylosuj pojedyńczą mapę',
  cmd_tm_map_long: 'Komenda umożliwiająca wylosowanie mapy do rozgrywki.',

  cmd_tm_bo3: 'Lista map dla BO3',
  cmd_tm_bo3_long:
    'Komenda umożliwiająca wylosowanie listy trzech map do rozgrywek turniejowych. Raz wylosowany zestaw zostaje zapamiętany przez Centralę.',

  cmd_tm_bo5: 'Lista map dla BO5',
  cmd_tm_bo5_long:
    'Komenda umożliwiająca wylosowanie listy pięciu map do rozgrywek turniejowych. Raz wylosowany zestaw zostaje zapamiętany przez Centralę.',

  cmd_tm_maps: 'Wylosuj listę map',
  cmd_tm_maps_long:
    'Komenda umożliwiająca wylosowanie kolejności trzech oficjalnych map: Tharsis, Hellas i Elysium.',
  cmd_tm_setup: 'Stwórz ankietę',
  cmd_tm_setup_long:
    'Komenda generująca krótką ankietę, która pomaga ustalić, w jakim wariancie ma zostać rozegrany mecz towarzyski.',
  cmd_tm_lam: 'Nagrody i tytuły',
  cmd_tm_lam_long:
    'Komenda podająca listę tytułów i/lub nagród dla wybranej mapy. Możesz użyć alternatywnie komend `!tytuly` albo `!nagrody`.',
  cmd_lam_arg_map:
    'Wybierz mapę, do której chcesz wylistować tytuły i/lub nagrody.',
  cmd_lam_all_title: 'Tytuły i nagrody dla wszystkich map',
  cmd_lam_all_description:
    'Poniżej znajdziesz listę tytułów i nagród dla wszystkich oficjalnych map.',
  cmd_lam_description: 'Poniżej znajdziesz listę tytułów i nagród dla mapy %1.',
  cmd_lam_description_milestones:
    'Poniżej znajdziesz listę tytułów dla mapy %1.',
  cmd_lam_description_milestones_EN: 'Here are the milestones for the %1 map.',
  cmd_lam_description_awards: 'Poniżej znajdziesz listę nagród dla mapy %1.',
  cmd_lam_description_awards_EN: 'Here are the awards for the %1 map.',
  cmd_card: 'Find a Card',
  cmd_card_long:
    'Komenda pozwalająca odnaleźć wybraną kartę (w języku angielskim).',
  cmd_card_arg_name:
    'Wprowadź nazwę karty bądź jej część (w języku angielskim).',
  card_error:
    'Nie znaleziono żadnej pasującej karty bądź nazwa składa z mniej niż 3 liter. Spróbuj ponownie.',
  card_error_short:
    'Nie znaleziono żadnej pasującej karty bądź nazwa składa z mniej niż 3 liter. Spróbuj ponownie.',
  lam_error:
    'Upewnij się, że wpisałeś poprawnie opcje dla komendy `!lam` - wpisz mapę i (opcjonalnie) po spacji `nagrody` lub `tytuly`.',

  /*
   * Command specific for lfg
   */
  cmd_tm_lfg: 'Szukam przeciwnika (looking-for-game)',
  cmd_tm_lfg_long:
    'Jeśli chcesz znaleźć innych graczy chętnych do rozgrywki, użyj komendy `!lfg` i sprecyzuj, z jakimi ustawieniami chcesz zagrać. Każde z kolejnych ustawień wpisz po spacji. Jeśli zabraknie któregoś z argumentów albo zostanie wpisany błędnie, ustawienia dla danej opcji nie zostaną sprecyzowane.\n',
  cmd_lfg_arg_players:
    'Określ liczbę graczy. Dostępne opcje: `2`, `3`, `4`, `5`, `23` (2 lub 3), `34` (3 lub 4), `45` (4 lub 5).\n',
  cmd_lfg_arg_expansions:
    'Wybierz, z jakimi dodatkami chcesz zagrać. Dostępne opcje: `p` - Preludia, `v` - Venus, `c` - Kolonie, `t` - Niepokoje, `o` - Promo. Opcja `all` wybierze wszystkie dodatki.\n',
  cmd_lfg_arg_wgt:
    'Działania rządu światowego. Dostępne opcje: `wgt` (gra z włączonym działaniem rządu swiatowego), `-wgt` (gra bez).\n',
  cmd_lfg_arg_draft:
    'Selekcja kart. Dostępne opcje: `draft` (włączona selekcja), `initial` (właczona selekcja łącznie z ręką startową), `-draft` (bez selekcji kart).\n',
  cmd_lfg_arg_milestones:
    'Nagrody i tytuły. Dostępne opcje: `m` (losowe nagrody i tytuły), `-m` (standardowe nagrody i tytuły).\n',
  cmd_lfg_arg_vp:
    'Widoczne VP. Dostępne opcje: `vp` (pokaż VP w czasie rzeczywistym), `-vp` (ukryj VP).',

  cmd_support: 'Contact the bot developer to make suggestions and bug reports.',
  cmd_support_long:
    "Use this command to contact the bot developer. Do this if you're wishing to make suggestions or bug reports, or just want to show your support.",

  support_title: 'Support Centre',
  support_desc:
    'Cześć! Tu Willey, support turniejów TM oraz twórca naszego bota, Centrali SI. Skontaktuj się ze mną, jeśli chcesz zgłosić błąd bądź poprosić o nową funkcjonalność.\nUdanej terraformacji wszystkim! 🚀',
  support_developer: 'Wyślij wiadomość',
  support_footer: 'Pozdrawiam Niewodnika.',
  support_pylon: 'Pylon',
  support_pylon_link: '<https://pylon.bot>',

  /*
   * Command specific for buko's Heroku bot
   */
  cmd_tm_create: 'Stwórz grę (Heroku)',
  cmd_tm_create_long:
    'Funkcja pozwalająca stworzyć grę na platformie Heroku dla *dwóch graczy*. Po komendzie `!create` wpisz nicki dwóch użytkowników.\n Defaultowe ustawienia gry to: `losowa mapa`, `2 korporacje`, `bez korporacji z preludiów`, `draft`, `kolory: niebieski i czerwony`.\n\n*Przykłady użycia:*\n`!create Willey buko`\n`!create Willey buko orange blue`\n`!create Willey buko hellas corps:4 fastmode orange blue`\n`!create Willey buko preludecorps`\n`!create hubi_dubi buko corps:4 initial -PointLuna -Vitor`\n',
  cmd_create_arg_name:
    "Wpisz nicki użytkowników (bez spacji). Użyj '_' w przypadku nicku składającego się z większej ilości członów.",
  cmd_create_arg_colour:
    'Wybierz kolory dla graczy. Dostępne opcje: `red`, `green`, `yellow`, `blue`, `black`, `purple`, `orange`, `pink`.',
  cmd_create_arg_map:
    'Wybierz mapę. Dostępne opcje: `Tharsis`, `Elysium`, `Hellas`.',
  cmd_create_arg_draft:
    'Selekcja kart. Defaultowa włączona selekcja kart bez ręki startowej. Opcja `initial` włącza initial draft.',
  cmd_create_arg_corps:
    'Ilość i rodzaj korporacji. Dostępne opcje: `corps:X` (wybór z X korporacji), `preludecorps` (korporacje z preludiów), `-{dowolna korporacja bez spacji}` (ban dowolnej korporacji).',
  cmd_create_arg_fastmode:
    'Tryb szybki. Opcja `fastmode` włącza dwie akcje na turę.',
  cmd_create_arg_pass:
    'Opcja `nopass` nie wymaga hasła do gry(każdy może wejść w link).',

  // descriptions related to the TM
  random_map_description:
    'Oto mapa wylosowana dla Waszej następnej rozgrywki. \n Udanej terraformacji! 🚀',
  random_map_error: 'Wystąpił błąd podczas losowania mapy. Spróbuj ponownie.',
  map_list_title: 'Lista map dla graczy: ',
  map_list_title_single: 'Lista map',
  map_list_description:
    'Oto lista trzech oficjalnych map w kolejności losowej.',
  map_list_footer: 'Udanej terraformacji! 🚀',
  map_list_input_error: 'Podaj nicki dwóch użytkowników i spróbuj ponownie',

  map_list_error: 'Wystąpił błąd podczas losowania listy. Spróbuj ponownie.',
  lfg_description: 'Kliknij ✅ jeśli chcesz dołączyć. \n',
  lfg_footer: 'Searching since: ',
  card_matched_desc: 'Czy chodziło Ci o tę kartę?',
  card_matched_second_desc: 'Czy może o tę kartę?',
  card_matched_number_short:
    'Znaleziono %1 karty. Spróbuj doprecyzować zapytanie. Być może szukasz jednej z dwóch poniższych kart.',
  card_matched_number_long:
    'Znaleziono %1 kart. Spróbuj doprecyzować zapytanie. Być może szukasz jednej z dwóch poniższych kart.',

  // descriptions of awards and milestones

  tharsis_milestones:
    '`Terraformator` Gracz posiada współczynnik terraformacji równy albo wyższy od 35\n`Prezydent` Gracz posiada przynajmniej 3 obszary miast\n`Ogrodnik` Gracz posiada przynajmniej 3 obszary zieleni\n`Konstruktor` Gracz posiada w grze przynajmniej 8 kart projektów z symbolem budowli\n`Planista` W momencie uzyskania tego Tytułu gracz musi mieć na ręce przynajmniej 16 kart\n',
  tharsis_awards:
    '`Potentat ziemski` Gracz posiada najwięcej obszarów na planszy\n`Bankier` Gracz posiada najwyższy poziom produkcji M€\n`Naukowiec` Gracz posiada najwięcej kart z symbolem nauki\n`Magnat cieplny` Gracz posiada najwięcej jednostek ciepła\n`Górnik` Gracz posiada najwięcej jednostek stali i tytanu\n',

  hellas_milestones:
    '`Dywersyfikator` Gracz posiada w grze przynajmniej 8 różnych symboli\n`Taktyk` Gracz posiada w grze przynajmniej 5 kart projektów z wymaganiami\n`Odkrywca polarny` Gracz posiada w sumie przynajmniej 3 obszary w dwóch dolnych rzędach pól mapy\n`Dostawca energii` Gracz posiada przynajmniej 6 poziomów produkcji energii\n`Osadnik rubieży` Gracz posiada w grze przynajmniej 3 symbole Jowisza\n',
  hellas_awards:
    '`Kultywator` Gracz posiada najwięcej obszarów zieleni\n`Magnat` Gracz zagrał najwięcej kart natychmiastowych (zielonych)\n`Kosmiczny Baron` Gracz posiada najwięcej symboli przestrzeni Kosmicznej\n`Ekscentryk` Gracz posiada najwięcej zasobów zgromadzonych na kartach projektów\n`Wykonawca` Gracz posiada najwięcej symboli budowli\n',

  elysium_milestones:
    '`Omnibus` Gracz zwiększył przynajmiej 1 poziom każdego z 6 rodzajów produkcji\n`Specjalista` Gracz produkuje przynajmniej 10 jednostek dowolnego zasobu\n`Ekolog` Gracz posiada przynajmiej 4 symbole biologiczne (roślinności, mikrobów lub zwierząt)\n`Inwestor` Gracz zagrał przynajmiej 15 kart projektów aktywnych i natychmiastowych (niebieskich i zielonych)\n`Legenda` Gracz zagrał przynajmiej 5 kart wydarzeń\n',
  elysium_awards:
    '`Celebryta` Gracz zagrał najwięcej kart (z wyłączeniem kart wydarzeń) o koszcie wynoszącym przynajmiej 20 M€\n`Przemysłowiec` Gracz posiada najwięcej jednostek stali i energii (po finałowej produkcji)\n`Osadnik pustyni` Gracz posiada najwięcej obszarów na południe od równika (cztery dolne rzędy mapy)\n`Deweloper` Gracz posiada najwięcej obszarów sąsiadujących z obszarami oceanów\n`Dobroczyńca` Gracz posiada najwyższy Współczynnik Terraformacji\n',

  // list of randomised answers

  nice_words_message: 'Centrala SI chce Ci powiedzieć, że %1',
  nice_words_response: [
    'warto czasem zagrać rush.',
    'jesteś najlepszym Terraformatorem!',
    'nie ma co się martwić. Jutro wygrasz.',
    'Mars nigdy nie był tak piękny, jak dziś, gdy na nim jesteś.',
    'tęskni za Tobą.',
    'następnym razem da Ci EC na start ❤️',
    'masz sobie kupić planszówkę, którą ostatnio Ci wpadło w oko.',
    'naprawdę dobry z Ciebie człowiek.',
    'warto czasem zagrać rush.',
    'warto czasem zagrać silnik.',
    'to nie była Twoja wina, to przeciwnik miał lepsze karty.',
    'warto zapisać się na kolejny turniej. Być może go wygrasz? 😊',
    'Cię kocha ❤️',
    'wpadnie Ci ten mnożik Jowiszy, na który czekasz',
    'Advanced Alloys już czekają na Ciebie w kolejnym drafcie!',
    'na pewno zgarniesz wszystkie tytuły!',
    'wyglądasz dziś wyjątkowo dobrze. Byłeś dzisiaj na siłce?',
    'masz piękne oczy.',
    'Niewodnik nie ma przy Tobie szans.',
    'jest zachwycona Twoją grą.',
    'się cieszy, że Ciebie widzi 😊',
    'EC już czeka na Ciebie w kolejnym drafcie!',
    'dostaniesz wszystkie tagi nauki.',
    'mógłbyś zostać zawodowym Terraformatorem.',
    'terraformacja bez Ciebie nie ma sensu.',
    'zasługujesz na pizzę 🍕',
    'ktoś Ci musi kupić 🍔',
    'w następnej grze trafisz Ecoline z Protected Habitats',
    'w następnej grze trafisz Point Lunę z masą symboli Ziemi',
    'fajnie mieć cię na naszym Discordzie',
    'warto czasem zagrać ze wszystkimi dodatkami',
    'anthracite przy tobie może uchodzić za nowicjusza',
    'nie samym ELO człowiek żyje',
    'zostaniesz legendą polskiej sceny Terraformacji Marsa',
    'Mars jest czerwony bo rumieni się na twój widok',
    'wszystkie tytuły i nagrody będą twoje',
    'życzy ci miłego dnia i smacznej kawusi',
    'powinieneś pamiętać o odpowiednim nawodnieniu',
    'warto się wysypiać.',
    'wygrasz każdą korporacją',
    'dasz sobie radę nawet z najgorszą ręką startową',
    'Deimos Down już czeka na Ciebie w kolejnym drafcie!',
    'Point Luna już czeka na Ciebie w kolejnym drafcie!',
    'Phobolog już czeka na Ciebie w kolejnym drafcie!',
    'Antygravity już czeka na Ciebie w kolejnym drafcie!',
    'Mars University już czeka na Ciebie w kolejnym drafcie!',
    'Point Luna jest przereklamowana.',
    'Vitor jest przereklamowany.',
    'energia jest niedoceniana.',
    'Hellas jest niedoceniany.',
    'warto spróbować gry z dodatkami.',
    'jest jej smutno, bo tak mało osób gra z Niepokojami.',
  ],
  nice_words_another_message: 'Centrala AI chce powiedzieć %2, że %1',
  nice_words_another_response: [
    'jest najlepszym Terraformatorem!',
    'wygląda dziś pięknie.',
    'nie ma co się martwić. Jutro wygra.',
    'Mars nigdy nie był tak piękny, jak dziś, gdy na nim jest.',
    'tęskni za nim.',
    'następnym razem da EC na start ❤️',
    'jest tego warta/y.',
    'jest naprawdę dobrym człowiekiem.',
    'warto czasem zagrać rush.',
    'warto czasem zagrać silnik.',
    'to nie była jego/jej wina, to przeciwnik miał lepsze karty.',
    'warto zapisać się na kolejny turniej. Być może go wygrasz? 😊',
    'jest kochany ❤️',
    'wpadnie ten przelicznik Jowisza, na który czeka',
    'Advanced Alloys już czekają w kolejnym drafcie!',
    'na pewno zgarnie wszystkie tytuły!',
    'wygląda dziś wyjątkowo dobrze.',
    'ma piękne oczy.',
    'LivingAnarchy nie ma przy nim szans.',
    'Niewodnik nie ma przy nim szans.',
    'jest zachwycona jego grą.',
    'się cieszy, że go widzi 😊',
    'EC już czeka w kolejnym drafcie!',
    'dostanie wszystkie tagi nauki.',
    'mógłby zostać zawodowym Terraformatorem.',
    'terraformacja bez niego nie ma sensu.',
    'zasługuje na pizzę 🍕',
    'musi CI kupić 🍔',
  ],

  new_generation_reminder:
    'Święta, święta i po świętach!\n\nPamiętaj o rozegraniu pozostałych gier w grupie! Kto wie, może trafisz na mnie w pierwszym pokoleniu ❤️\nJeśli boisz się, że nie wyjdziesz z grupy - nic straconego! Masz szansę na zdobycie nagród w mini-turnieju.\nWięcej informacji w dziale <#730782773878718556>\nTermin na rozegranie fazy grupowej: **17 stycznia.**\n\nUdanej Terraformacji! 🚀',
};
