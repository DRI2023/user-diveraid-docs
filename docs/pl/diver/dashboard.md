# Diver: pulpit

## Screenshot

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profile menu (click on photo)](../../assets/screenshots/diver/en/profile-menu.png)

## Cel

Pulpit to strona startowa obszaru Diver, ktora zwykle agreguje glowne linki (kursy, certyfikaty, dokumenty itd.).

## Gdzie znalezc

Menu: **Pulpit**

## Co robic tutaj (typowe kroki)

1. Sprawdz elementy wyroznione (trwajace kursy, powiadomienia, terminy oraz szybkie akcje, np. **Pobierz certyfikat (Download Certification)** aby pobrac zaswiadczenie dla wszystkich twoich certyfikacji, **Moje centrum nurkowe (My Diving Center)** aby zobaczyc/zmienic dive center lub **Formularz medyczny (Medical Form)** aby wypelnic formularz medyczny).
2. Przejdz do [Moje kursy](courses.md), aby kontynuowac sciezke nauki (otworz liste kursow, wybierz kurs, wznow kolejny krok: module/quiz/exam/skills; jesli kursu brakuje, sprawdz tez *Expired*, jesli jest dostepne).
3. Przejdz do **Moje certyfikaty**, aby przejrzec karty i historie.
4. Przejdz do **Mój dziennik nurkowy**, aby utworzyc lub zaktualizowac logi.

## Gorny pasek (ikony obok daty/godziny)

W prawym gornym rogu, obok daty i godziny, znajdziesz kilka skrotow:

- **Ikony profilu (Diver / PRO / Dive Center / Distributor):** pozwalaja przelaczac sie miedzy obszarami.
  Ikony sa widoczne tylko, jesli twoje konto ma odpowiednia kwalifikacje/role (np. jesli jestes tylko Diver, zobaczysz tylko ikone Diver).
- **Po kliknieciu:** przechodzisz do pulpitu wybranego obszaru.
- **Jezyk (Language) (EN/IT/DE/FR/ES/ZH/AR/NL/KO/TR/PT/PL/RU):** zmienia jezyk interfejsu.
- **Pelny ekran (Full screen):** wlacza/wylacza tryb pelnoekranowy (przydatne na tabletach lub podczas prezentacji).
- **Motyw/kontrast (Theme/contrast):** zmienia wyglad interfejsu (np. jasny/ciemny, w zaleznosci od konfiguracji).
- **Zdjecie profilu (konto):** otwiera menu konta.

### Co sie stanie, gdy klikne swoje zdjecie?

Otwiera menu konta (jak na screenshot), z nastepujacymi pozycjami:

- **Mój profil (My Profile):** szczegoly twojego profilu.
- **Moje zadania (My Task):** przydzialy i zaproszenia (jesli dostepne dla twojego konta).
- **Moja historia medyczna (My Medical History):** informacje/formularze medyczne (jesli wlaczone dla twojego konta).
- **Moje bezpieczenstwo (My Security):** ustawienia/zgody bezpieczenstwa (jesli dostepne).
- **Moja prywatnosc (My Privacy):** ustawienia prywatnosci.
- **Wyloguj sie (Sign out):** wylogowuje z portalu.

W **Moje zadania (My Task)** zwykle mozesz:

- Zobaczyc oczekujace zaproszenia i aktywne wspolprace (np. Dive Center staff, Distributor staff, collaborations, translator).
- **Confirm** lub **Dismiss** zaproszenia.
- **Stop collaborating** (cofnij) gdy potrzebne (zwykle wymaga wpisania frazy potwierdzajacej; niektore cofniecia moga oferowac opcje, np. usuniecie classrooms, ktorych jestes owner).
- Wyszukiwac, sortowac i stronicowac liste wspolprac (gdy dostepne).

## Typowe problemy

- Przekierowanie do logowania: sesja wygasla lub brak uwierzytelnienia.
- Dostep zablokowany/blad: email niezweryfikowany.

## Uwagi

Strona glowna aplikacji (`/`) przekierowuje do logowania.

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

```text
GET https://user.diveraid.com/pl/diver/dashboard
```

</details>

Dalej: [Przesłane dokumenty](uploaded-documents.md)
