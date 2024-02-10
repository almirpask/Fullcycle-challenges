echo "Waiting for database to start..."

tries=0
max_tries=30

while ! nc -z $DB_HOST $DB_PORT; do
    sleep 1
    tries=$((tries + 1))
    if [ "$tries" -ge "$max_tries" ]; then
        echo "Database did not start in time. Exiting."
        exit 1
    fi
done

echo "Database is ready!"

echo "Starting server"
node main.js