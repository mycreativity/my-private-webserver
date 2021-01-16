# Static Server
Static Server is a simple web server that serves static files only. It is meant to help during local development of static HTML web pages.<br/>

Download your executable here:
- <a id="raw-url" href="https://raw.githubusercontent.com/mycreativity/static-server/master/src/bin/mac-x64/sts">Mac OSX executable file</a>
- <a id="raw-url" href="https://raw.githubusercontent.com/mycreativity/static-server/master/src/bin/win-x64/sts">Windows x64 executable file</a>

## Usage
Execute the following command in your terminal:
```sh
./sts .
```

Run `./sts --help` without arguments to see list of options.

### Root folder


# Development

### Compiling to executable
Compiling for Mac
```sh
pkg index.js --targets node8-macos-x64 --output bin/mac-x64/sts
```
Compiling for Windows
```sh
pkg index.js --targets node8-win-x64 --output bin/win-x64/sts
```