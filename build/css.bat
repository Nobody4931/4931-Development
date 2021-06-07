cd ..
cd src

for /R %%f in (.\*.scss) do (
	sass --no-source-map "%%f":"%%~dpf%%~nf.css"
	postcss "%%~dpf%%~nf.css" --use autoprefixer --output "%%~dpf%%~nf.css" 
)
