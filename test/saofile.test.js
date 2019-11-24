const { mock } = require('sao');
const test = require('ava');
const path = require('path')

const generator = path.join(__dirname, '..');

test('generator with default answers', async t => {
	const stream = await mock({ generator });
	const packageJson = JSON.parse(await stream.readFile('package.json'));
	t.is(packageJson.name, 'output');
	t.is(packageJson.description, 'generated by sao-wm');
	t.is(packageJson.license, 'MIT');
	t.is(packageJson.author, 'MOCK_NAME');
})

test('generator with custom answers', async t => {
	const answers = {
		name: 'template',
		description: 'tested by AVA',
		license: 'BSD-2-Clause',
		author: 'AVA'
	}
	const stream = await mock({ generator }, answers);
	const packageJson = JSON.parse(await stream.readFile('package.json'));
	t.is(packageJson.name, 'template');
	t.is(packageJson.description, 'tested by AVA');
	t.is(packageJson.license, 'BSD-2-Clause');
	t.is(packageJson.author, 'AVA');
})

test('generator with invalid license', async t => {
	const answers = {
		name: 'template',
		description: 'tested by AVA',
		license: 'BSD 2 Clause',
		author: 'AVA'
	}
	const stream = await mock({ generator }, answers);
	const packageJson = JSON.parse(await stream.readFile('package.json'));
	t.is(packageJson.name, 'template');
	t.is(packageJson.description, 'tested by AVA');
	t.is(packageJson.license, 'MIT');
	t.is(packageJson.author, 'AVA');
})
