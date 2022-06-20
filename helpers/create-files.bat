@echo off
set /p startRange="Start Range [number]?: "
set /p endRange="End Range [number]?: "

@REM Create files
for /l %%x in (%startRange%, 1, %endRange%) do (
   echo.# Question %%x>Q%%x.md

   @echo on
   echo ---
   echo src: ./questions/Q%%x.md
   echo ---
   echo.
   @echo off
)