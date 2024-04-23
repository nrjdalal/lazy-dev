#!/bin/sh

# delete the file NEW_README.md if it exists
rm -f NEW_README.md

# create a copy of file MAIN.md to NEW_README.md
cp MAIN.md NEW_README.md

# find the string --- lazy-dev.tsx --- in the NEW_README.md file and replace it with the contents of the file ./src/components/lazy-dev/lazy-dev.tsx
sed -i '' -e '/--- lazy-dev.tsx ---/{r ./src/components/lazy-dev/lazy-dev.tsx' -e 'd;}' NEW_README.md

# uncomment // if (process.env.NODE_ENV !== 'development') return null in the NEW_README.md file
sed -i '' -e 's|// if (process.env.NODE_ENV !== 'development') return null|if (process.env.NODE_ENV !== 'development') return null|' NEW_README.md

# delete the file README.md if it exists
rm -f README.md

# move the NEW_README.md file to README.md
mv NEW_README.md README.md

# commit the changes to the repository
git add README.md
git commit -m "sync README.md with code"
git push
