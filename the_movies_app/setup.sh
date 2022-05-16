#!/bin/bash

#
# Define VARS..
#
STARTER_DIR_PATH=`dirname $(readlink -f $0)`

function add_repository() {
  repoUrl="$1"
  git init
  git add .
  git commit -m "Project init"
  git branch -M main
  git remote add origin "$repoUrl"
  git push -u origin main
}


#
# Read Inputs..
#
read -rp "Project name: " prjName
if ! [[ $prjName =~ ^[a-z]+([-_]+[a-z0-9]+)*$ ]]; then
  echo "올바른 형식이 아닙니다."
  exit 0
fi

read -rp "Github mono repo url (press ENTER to skip): " monoRepoUrl
if [ -z "$monoRepoUrl" ]; then
  read -rp "Github api repo url (press ENTER to skip api): " apiRepoUrl
  read -rp "Github web repo url (press ENTER to skip web): " webRepoUrl
  read -rp "Github app repo url (press ENTER to skip app): " appRepoUrl
fi


#
# Setup project global
#
git pull
sed -i "" -e "s/starter/$prjName/g" README.md
if [ -d "$HOME/.volta" ]; then
  echo volta $(volta --version) already exists.
else
  curl https://get.volta.sh | bash
  exec "$SHELL"
fi
rm -rf .git


#
# Setup project-api
#
cd "$STARTER_DIR_PATH/starter-api"
find . -name '*.json' -print0 | xargs -0 sed -i "" "s/starter/$prjName/g"
cp .env.example .env
[ -n "$apiRepoUrl" ] && add_repository "$apiRepoUrl"


#
# Setup project-web
#
cd "$STARTER_DIR_PATH/starter-web"
find . -name '*.json' -print0 | xargs -0 sed -i "" "s/starter/$prjName/g"
find . -name '*.html' -print0 | xargs -0 sed -i "" "s/starter/$prjName/g"
cp .env.example .env
[ -n "$webRepoUrl" ] && add_repository "$webRepoUrl"


#
# Setup project-app
#
cd "$STARTER_DIR_PATH/starter-app"
[ -n "$appRepoUrl" ] && add_repository "$appRepoUrl"


#
# Finish Setup
#
cd "$STARTER_DIR_PATH"
mv starter-api "$prjName-api"
mv starter-web "$prjName-web"
mv starter-app "$prjName-app"
[ -n "$monoRepoUrl" ] && add_repository "$monoRepoUrl"
echo "done"
