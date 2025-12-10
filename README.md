# Frontend Lab

Platforma demonstracyjna prezentująca nowoczesne techniki tworzenia aplikacji webowych z wykorzystaniem frameworka Next.js oraz usług Firebase. Projekt skupia się na implementacji mechanizmów uwierzytelniania, zarządzania danymi w czasie rzeczywistym oraz responsywnego interfejsu użytkownika.

## Autor

**Marcin Świderski**  
Nr albumu: **15283**

## Link do wersji live

https://frontendlab-pi.vercel.app/

## Technologie

Projekt został zbudowany w oparciu o następujący stos technologiczny:

*   **Next.js** – Najnowsza wersja frameworka React, wykorzystująca App Router.
*   **React** – Biblioteka do budowania interfejsów użytkownika.
*   **Tailwind CSS** – Nowoczesny framework CSS do szybkiego stylowania (utility-first).
*   **Firebase** – Backend-as-a-Service:
    *   **Authentication** – Zarządzanie użytkownikami, logowanie, rejestracja, zmiana hasła.
    *   **Firestore Database** – Baza danych NoSQL działająca w czasie rzeczywistym (przechowywanie notatek).
*   **React Icons** – Zbiór ikon dla aplikacji React.

## Funkcjonalności

1.  **System Uwierzytelniania:**
    *   Rejestracja i logowanie użytkowników (Email/Hasło).
    *   Weryfikacja adresu email.
    *   Odzyskiwanie/Zmiana hasła.
    *   Bezpieczne wylogowywanie.
    *   Chronione ścieżki (dostępne tylko dla zalogowanych).

2.  **Panel Użytkownika (Dashboard):**
    *   Dodawanie notatek osobistych z użyciem Firestore.

3.  **Zarządzanie Profilem:**
    *   Edycja danych profilowych (Display Name, Photo URL).
    *   Zmiana hasła.

4.  **Komponenty UI:**
    *   **Tabela (Table Component)** - Zaawansowana tabela z sortowaniem, zaznaczaniem wierszy i grupowaniem ukrytych elementów.
    *   Responsywny Sidebar i pasek nawigacji (TopBar) z obsługą wersji mobilnej.

## Uruchomienie Projektu

### Wymagania wstępne

*   Node.js zainstalowany w systemie.
*   Skonfigurowany projekt w Firebase Console (włączone Authentication i Firestore Database).

### Instalacja

1.  Sklonuj repozytorium
2.  Zainstaluj zależności:

```
npm install
```

3.  Skonfiguruj zmienne środowiskowe z Firebase. Utwórz plik `.env` w głównym katalogu i dodaj swoje klucze:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=twoj_klucz
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=twoja_domena.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=twoj_projekt_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=twoj_bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=twoj_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=twoj_app_id
```

4.  Uruchom:

```
npm run dev
```


