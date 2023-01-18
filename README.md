# Пам'ятні перлини 2023

## Доступ до API

API є відкритим, нижче наведено приклад запиту перлин для першого кварталу:

```http request
GET /api/_content/query?_params={"where":{"_path":"/gems/q1","_dir":"gems"}}
```

## Налаштування

Перегляньте [документацію Nuxt 3](https://nuxt.com/docs/getting-started/introduction), щоб дізнатися більше.

Обов'язково встановіть залежності:

```bash
yarn install
```

## Сервер розробки

Запустіть сервер розробки на http://localhost:3000

```bash
yarn dev
```

## Продакшн

Локальний попередній перегляд робочої збірки:

```bash
yarn preview
```
