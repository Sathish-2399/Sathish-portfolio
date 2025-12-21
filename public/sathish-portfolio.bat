@echo off
color 0f
title SATHISH Portfolio Shell

echo ==================================================
echo        WELCOME TO SATHISH PORTFOLIO SHELL
echo ==================================================
echo Type a command ( help for list of commands )
echo.

:menu
set "cmd="
set /p cmd="C:\> "

rem Auto clear screen command
if /i "%cmd%"=="clear" cls & goto menu

if /i "%cmd%"=="help" goto help
if /i "%cmd%"=="about" goto about
if /i "%cmd%"=="skills" goto skills
if /i "%cmd%"=="github" goto github
if /i "%cmd%"=="projects" goto projects
if /i "%cmd%"=="contact" goto contact
if /i "%cmd%"=="resume" goto resume
if /i "%cmd%"=="skillrack" goto skillrack
if /i "%cmd%"=="leetcode" goto leetcode
if /i "%cmd%"=="exit" exit

echo Invalid command. Type 'help'
echo.
goto menu


:help
echo Available Commands:
echo   about     - About me
echo   skills    - My skills list
echo   projects  - My projects list
echo   github    - My Github list
echo   contact   - Contact info
echo   resume    - Open my resume PDF
echo   skillrack - My Skillrack details 
echo   leetcode  - My Leetcode details
echo   exit      - Close shell
echo.
goto menu


:about
echo I'm Sathish, CSE 3rd year student passionate about Full Stack & Data Analytics.
echo.
goto menu


:skills
echo Power BI ^| Tableau ^| Java ^| C++ ^| Python ^| C
echo React ^| Node ^| Express ^| MYSQL ^| MongoDB
echo Data Analysis ^| Spring Boot ^| Tailwind CSS ^| Pandas
echo.
goto menu



:projects
echo 1) AutoHub
echo 2) Netflix Dashboard
echo 3) Train Ticket Booking Management System
echo.
goto menu

:github
start "" "https://github.com/Sathish-2399"
echo Github opened successfully
echo.
goto menu

:contact
echo Email: 2312099@nec.edu.in
echo LinkedIn: https://www.linkedin.com/in/sathish-b-5286b2349/
echo.
goto menu


:resume
start "" "C:\Users\ADMIN\Desktop\Sathish\SATHISH B - RESUME.pdf"
echo Resume opened successfully.
echo.
goto menu

:skillrack
start "" "https://www.skillrack.com/faces/resume.xhtml?id=440650&key=d1728d82a5847917a924c258de612952b8cece8a"
echo Skillrack opened successully
echo.
goto menu


:leetcode
start "" "https://leetcode.com/u/sathish3718/"
echo Leetcode opened successfully
echo.
goto menu
