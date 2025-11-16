@echo off
echo Adding new remote...
powershell -Command "& 'C:\Program Files\Git\cmd\git.exe' remote add origin https://github.com/yeuditspiner/postman-gov-api.git"

echo Pushing to new repository...
powershell -Command "& 'C:\Program Files\Git\cmd\git.exe' push -u origin main"

echo Done! Your Postman collection is now at:
echo https://github.com/yeuditspiner/postman-gov-api
pause