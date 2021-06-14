@echo off
setlocal enabledelayedexpansion

for /R ..\src\frontend %%f in (*.js) do (
	set "fn=%%~nf"
	if "x!fn:.obf=!"=="x!fn!" (
		call npx javascript-obfuscator "%%f"^
			--compact "true"^
			--control-flow-flattening "false"^
			--dead-code-injection "false"^
			--debug-protection "true"^
			--debug-protection-interval "true"^
			--identifier-names-generator "mangled-shuffled"^
			--numbers-to-expressions "true"^
			--self-defending "true"^
			--simplify "true"^
			--string-array "true"^
			--string-array-encoding "base64"^
			--target "browser"^
			--transform-object-keys "true"^
			--unicode-escape-sequence "true"^
			--output "%%~dpf%%~nf.obf.js" > nul
	)
)
