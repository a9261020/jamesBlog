
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# if you are deploying to https://a9261020.github.io/jamesBlog
git push -f https://github.com/a9261020/jamesBlog.git master:gh-pages


cd -