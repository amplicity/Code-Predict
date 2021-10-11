# Code Predict

Code Predict is a lightweight VS Code extension that accepts an OpenAI api key to enable code prediction via OpenAI's Codex product through a VS Code shortcut.

## Demo

https://www.loom.com/share/9cac00116afa4344beebe1b5d878817b

## Installation

1. Download ZIP
2. Obtain API Key from OpenAI
3. In `extension.js`, copy and paste your API key over 'YOUR-KEY', then save
4. `npm install -g vsce`
5. Run `vsce package`
6. From VS Code, select 'Extensions', then select 'Install from VSIX'
7. Choose `.vsix` file that was created from step 5

## Usage

1. Highlight code for context
2. (Mac) Cmd+Shift+P / (Windows) Ctrl+Shift+P

As seen in the demo, there are times that the code returned will be incomplete. This can be adjusted from within `extension.js` (the `max_tokens` parameter). Alternatively, you can simply re-select the code (cmd+a / ctrl+a) and re-run Code Predict.

## Support
Log an issue if you need help with anything! 

If you like Code Predict (and are using Brave) please consider setting a monthly tip, I greatly appreciate it!

I also accept and appreciate any other forms of crypto.
ETH: 0xcb5512CC5A9d875e06604803b7E7c8D2c56Cb150
SOL: 6kfob4TBtLjmoZEzzxwBQzLzupM2WhToeotZ8sBFtNyV
