@echo off

for /R ..\src %%f in (*.scss) do (
	call sass --no-source-map "%%f":"%%~dpf%%~nf.css"
	call postcss "%%~dpf%%~nf.css" --use autoprefixer --output "%%~dpf%%~nf.css" 
)
