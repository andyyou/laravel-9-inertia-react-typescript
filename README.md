# README


## Development

```sh
$ composer create-project laravel/laravel demo "9.0.0"

# Inertia
$ composer require inertiajs/inertia-laravel
$ php artisan inertia:middleware

$ npm install react react-dom @types/react @types/react-dom
$ npm i @inertiajs/inertia @inertiajs/inertia-react
$ npm i -D ts-loader typescript
$ npx tsc --init --jsx react
# 1. Modify resources/js/*.js to .tsx
# 2. Modify webpack.mix.js
# 
# Configure TypeScript Resources:
# https://laravel-news.com/typescript-laravel
# https://dev.to/zubairmohsin33/laravel-and-inertia-with-react-and-typescript-18g
#
# 3. Reference docs of Inertia React to setup app.tsx with `createInertiaApp`
# 4. Reference docs for Code split which support dynamic import
# 5. Modify tsconfig.json to support code split
{
  "module": "esnext",
  "moduleResolution": "node", 
}
# Reference: https://stackoverflow.com/questions/56375703/angular-8-lazy-loading-modules-error-ts1323-dynamic-import-is-only-supporte
```

