#!/bin/sh

echo "Syncing code..."

# delete the file NEW_README.md if it exists
rm -f NEW_README.md

# create a copy of file MAIN.md to NEW_README.md
cp MAIN.md NEW_README.md

# find the string --- lazy-dev.tsx --- in the NEW_README.md file and replace it with the contents of the file ./src/components/lazy-dev/lazy-dev.tsx
sed -i '' -e '/--- lazy-dev.tsx ---/{r ./src/components/lazy-dev/lazy-dev.tsx' -e 'd;}' NEW_README.md

# delete the file README.md if it exists
rm -f README.md

# move the NEW_README.md file to README.md
mv NEW_README.md README.md

# move README.md to ./src/app/(mdx)/page.mdx
cp README.md "./src/app/(mdx)/page.mdx"

# remove first 2 lines from ./src/app/(mdx)/page.mdx
sed -i '' -e '1,2d' "./src/app/(mdx)/page.mdx"

# remove lines containing raw.githubusercontent.com from ./src/app/(mdx)/page.mdx
sed -i '' -e '/raw.githubusercontent.com/d' "./src/app/(mdx)/page.mdx"

# replace "// if" with "if" in ./src/app/(mdx)/page.mdx and README.md
sed -i '' -e 's/\/\/ if/if/g' "./src/app/(mdx)/page.mdx"
sed -i '' -e 's/\/\/ if/if/g' README.md

git add -A 2>/dev/null
