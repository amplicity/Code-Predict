// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

 async function getCompletion(prompt){
	try{
		const searchReturn = await axios.post(
			'https://api.openai.com/v1/engines/davinci-codex/completions',
			{
				prompt: prompt,
				max_tokens: 100,
				temperature:0,
				top_p: .95,
				n:1,
				stream:false,
			},
			{
				headers: { Authorization: `Bearer YOUR-KEY` }
			});
		return searchReturn;
	} catch (error){
		console.error(error);
	}
}
async function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Predict has been activated. Halleluiah!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('predict.code', function () {
		
		let editor = vscode.window.activeTextEditor;
		if (editor){
			let prompt = editor.document.getText(editor.selection);
			editor.selection.end._line = editor.selection.end.line + 1;
			return vscode.window.withProgress({
				location: vscode.ProgressLocation.Window,
				cancellable: false,
				title: 'Predicting, please wait...'
			}, (progress) => {
				return new Promise((resolve, reject) =>{
					progress.report({increment:0});
					getCompletion(prompt).then(function(response){
						if (response){
							console.log('response', response);
							editor.edit(editBuilder => {
								progress.report({increment:100})
								editBuilder.replace(editor.selection.end, response.data.choices[0].text);
								resolve();
							})
						} else{
							reject();
							vscode.window.showInformationMessage('No output, try again.');
						}
	
					})
				})
			});


		} else {
			vscode.window.showErrorMessage('Please highlight code to predict from.');

		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
