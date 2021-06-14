@echo off

for /R ..\src %%f in (*.scss) do (
	call sass^
		--no-source-map^
		"%%f":"%%~dpf%%~nf.css"
	call postcss "%%~dpf%%~nf.css"^
		--no-map^
		--use autoprefixer cssnano^
		--output "%%~dpf%%~nf.css"
)
