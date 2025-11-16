@echo off
echo Deleting master branch from GitHub...
powershell -Command "& 'C:\Program Files\Git\cmd\git.exe' push origin --delete master"
echo Master branch deleted!
pause