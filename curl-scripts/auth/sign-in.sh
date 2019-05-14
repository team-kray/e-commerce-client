curl "https://tranquil-plains-95557.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "credentials": {
         "email": "'"${EMAIL}"'",
         "password": "'"${PASSWORD}"'",
         "password_confirmation": "'"${PASSWORD}"'"
       }
  }'

echo
