# A repo to demonstrate an IPFS error

Start an IPFS daemon locally, then run with

> npm install . && npm run build && python3 -m http.server 8081

and point your webbrowser to localhost:8081 and press the button.

When I do this, I get the following error printed on the IPFS daemon:

> ERROR commands/h: err: http: invalid Read on closed Body handler.go:285

and the response does not include the hashes for all the files or the enclosing directory.
