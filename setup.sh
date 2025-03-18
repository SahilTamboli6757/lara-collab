cp .env.example .env

composer install

npm i

php artisan key:generate

php artisan migrate --seed

php artisan optimize

php artisan storage:link


# * * * * * cd /lara-collab && php artisan schedule:run >> /dev/null 2>&1
