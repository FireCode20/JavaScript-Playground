#!/usr/bin/bash

    #VN="$VN-mod"
#fi

filename=~/bin/num.txt
line=$(head -n 1 $filename)
cd ~/workspace/JavaScript-Playground
cgit auto

if ! git diff-index --quiet HEAD --; then

 git add .
 git commit -a -m "Auto Upload $line"
 git push
 
echo $(($line+1)) > temp && mv temp $filename
fi