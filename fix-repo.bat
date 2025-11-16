@echo off
echo Step 1: Go to GitHub and change default branch
echo 1. Visit: https://github.com/yeuditspiner/gov-test/settings/branches
echo 2. Under "Default branch" click the arrow next to "master"
echo 3. Select "postman-only"
echo 4. Click "Update"
echo 5. Confirm the change
echo.
echo Press any key after you've done this...
pause

echo Step 2: Deleting master branch...
powershell -Command "& 'C:\Program Files\Git\cmd\git.exe' push origin --delete master"

echo Done! Now your repository only has the Postman collection.
echo Repository: https://github.com/yeuditspiner/gov-test
pause