#!/bin/bash
cd "$(dirname "$0")"
sublime .
sublime index.html
sublime --command auto_save
open -a Chrome start.html
python -m SimpleHTTPServer