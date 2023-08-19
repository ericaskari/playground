mkdir -p  ./.github/actions/$1
touch     ./.github/actions/$1/action.yml

mkdir -p  ./Tools.Github.Actions/src/actions/$1
touch     ./Tools.Github.Actions/src/actions/$1/action.ts


npx concurrently --names "$(printf "%-25s" $1)" \
"npx nodemon --watch './_dist/Tools.Github.Actions/src/actions/$1' --ext '*' --exec 'ncc build ./_dist/Tools.Github.Actions/src/actions/$1/action.js --out ./.github/actions/$1'"
