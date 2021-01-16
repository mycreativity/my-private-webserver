# StaticServer
StaticServer is a simple web server that serves static files only. It is meant to help during local development of static HTML web pages.<br/>

Download your executable here:
- <a id="raw-url" href="https://raw.githubusercontent.com/mycreativity/my-private-webserver/master/src/bin/mac/sts">Mac OSX executable file</a>

## Usage

```sh
./sts .
```

Run `./sts --help` without arguments to see list of options.

### Root folder


# Development

### Compiling to executable
Compiling for Mac
```sh
pkg index.js --targets node8-macos-x64 --output bin/mac/sts
```