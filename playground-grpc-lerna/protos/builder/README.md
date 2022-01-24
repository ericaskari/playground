add this as dev dependencie



      "scripts": {
        "cookProtos": "cookProtos protoName ..."
      },
      "devDependencies": {
        "@protos/builder": "^1.0.0"
      }

create a `models` folder inside src folder and create an `.gitignore`

    /src/models/.gitignore
    /src/example.protos
put proto files inside src folder and 

and run 

    npm run cookProtos
