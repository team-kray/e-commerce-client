curl "https://tranquil-plains-95557.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
         "email": "'"${EMAIL}"'",
         "password": "'"${PASSWORD}"'",
         "password_confirmation": "'"${PASSWORD}"'"
       }
  }'

echo
