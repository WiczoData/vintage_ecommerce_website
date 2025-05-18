# Vintage Treasures - E-commerce Platform

Vintage Treasures to w pełni responsywna platforma e-commerce z estetyką vintage, oferująca filtrowanie produktów, funkcjonalność koszyka i bezpieczną realizację zamówień.

## Funkcje

- **Vintage Design**: Ciepła, stonowana paleta kolorów z czcionkami szeryfowymi i elementami inspirowanymi stylem vintage
- **Filtrowanie Produktów**: Kompleksowy system filtrowania na stronie produktów, umożliwiający filtrowanie według kategorii, zakresu cenowego i wyszukiwanych haseł
- **Koszyk Zakupowy**: W pełni funkcjonalny system koszyka, który utrzymuje się między sesjami za pomocą localStorage
- **Proces Zamówienia**: Kompletny proces realizacji zamówienia z informacjami o wysyłce, metodami płatności i potwierdzeniem zamówienia
- **Strona O Nas**: Sekcja "O Mnie" prezentująca 2-letnie doświadczenie w projektowaniu i tworzeniu stron internetowych
- **Responsywny Design**: Dostosowany do wszystkich rozmiarów urządzeń

## Technologie

- **Next.js**: Framework React do tworzenia aplikacji internetowych
- **React**: Biblioteka JavaScript do budowania interfejsów użytkownika
- **Tailwind CSS**: Framework CSS do szybkiego tworzenia niestandardowych projektów
- **shadcn/ui**: Komponenty UI zbudowane na Radix UI i Tailwind CSS
- **TypeScript**: Typowany nadzbiór JavaScript

## Instalacja

1. Sklonuj repozytorium:
\`\`\`bash
git clone https://github.com/twoj-username/vintage-treasures.git
cd vintage-treasures
\`\`\`

2. Zainstaluj zależności:
\`\`\`bash
npm install
\`\`\`

3. Uruchom serwer deweloperski:
\`\`\`bash
npm run dev
\`\`\`

4. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Struktura Projektu

\`\`\`
vintage-treasures/
├── app/                    # Główne komponenty aplikacji (Next.js App Router)
│   ├── about/              # Strona "O Nas"
│   ├── checkout/           # Proces realizacji zamówienia
│   ├── products/           # Strona produktów i szczegóły produktu
│   ├── globals.css         # Globalne style CSS
│   ├── layout.tsx          # Główny układ aplikacji
│   └── page.tsx            # Strona główna
├── components/             # Komponenty wielokrotnego użytku
│   ├── cart-drawer.tsx     # Komponent koszyka
│   ├── cart-provider.tsx   # Provider kontekstu koszyka
│   ├── featured-products.tsx # Sekcja polecanych produktów
│   ├── footer.tsx          # Stopka strony
│   ├── header.tsx          # Nagłówek strony
│   ├── newsletter-signup.tsx # Formularz newslettera
│   └── ui/                 # Komponenty UI (shadcn)
├── hooks/                  # Niestandardowe hooki React
├── lib/                    # Funkcje pomocnicze
├── public/                 # Statyczne zasoby
│   └── images/             # Obrazy
├── przeczytajmnie.md       # Dokumentacja projektu (ten plik)
└── tailwind.config.ts      # Konfiguracja Tailwind CSS
\`\`\`

## Użytkowanie

### Zarządzanie Produktami

Obecnie produkty są zdefiniowane jako dane statyczne w plikach komponentów. W rzeczywistej implementacji należałoby podłączyć bazę danych lub API e-commerce (np. Shopify, WooCommerce).

### Koszyk Zakupowy

Koszyk wykorzystuje localStorage do przechowywania produktów między sesjami. Funkcjonalność obejmuje:
- Dodawanie produktów do koszyka
- Usuwanie produktów z koszyka
- Aktualizację ilości produktów
- Obliczanie sumy częściowej, podatku i kosztów wysyłki

### Realizacja Zamówienia

Proces realizacji zamówienia jest obecnie symulowany. W rzeczywistej implementacji należałoby zintegrować bramkę płatności (np. Stripe, PayPal).

## Przyszłe Ulepszenia

- Integracja z bazą danych do przechowywania produktów i zamówień
- Dodanie systemu uwierzytelniania użytkowników
- Integracja z bramką płatności
- Dodanie panelu administracyjnego do zarządzania produktami i zamówieniami
- Implementacja systemu recenzji produktów
- Dodanie funkcji listy życzeń
