//  Taken directly from AlexxNB's code
// https://svelte.dev/repl/eefc5b3e2311457693f153dcdf3ece2f?version=3.31.0

const svelte_version = '3.19.2';
const repo = 'https://unpkg.com';

// Download and init Rollup, Svelte compiler and cjs2es
export async function init_bundler() {
	await init_rollup();
	await init_cjs2es();
	await init_svelte_compiler(svelte_version);
}

// Bundler
export async function bundler(component) {
	try {
		if (!rollup) new Error("Rollup didn't initialized yet");

		const bundle = await rollup.rollup({
			input: './App.svelte',
			external: false,
			inlineDynamicImports: true,
			plugins: [
				module_resolver_plugin(),
				component_plugin(component),
				download_plugin(),
				svelte_plugin()
			]
		});

		return (
			await bundle.generate({
				format: 'iife',
				name: 'Component',
				exports: 'named',
				sourcemap: false
			})
		).output[0].code;
	} catch (err) {
		console.error(err);
		return null;
	}
}

// Bundler's plugins

function module_resolver_plugin() {
	return {
		name: 'rollup_plugin_module_resolver',
		async resolveId(id, importer) {
			// Local file
			if (id.startsWith('./') && (!importer || importer.startsWith('./'))) return id;

			// Svelte runtime

			if (id === 'svelte') return `${repo}/svelte/index.mjs`;
			if (id.startsWith('svelte/')) return `${repo}/svelte/${id.slice(7)}/index.mjs`;

			// Local on UNPKG

			if (id.startsWith('./') && /^https?:\/\//.test(importer))
				return new URL(id, addSlash(importer)).href;

			// From UNPKG
			return await getModuleURL(`${repo}/${id}`);
		}
	};
}

function component_plugin(component) {
	return {
		name: 'rollup_plugin_files',

		async load(id) {
			if (id !== './App.svelte') return null;
			console.log('Component:', id);
			return component;
		}
	};
}

function download_plugin() {
	return {
		name: 'rollup_plugin_download',

		async load(id) {
			if (!/^https?:\/\//.test(id)) return null;
			console.log('Download:', id);

			try {
				const result = await cash_or_fetch(id);

				return cjs2es.cjs2es(result.body);
			} catch (err) {
				console.error(err);
			}
		}
	};
}

function svelte_plugin() {
	const options = {
		extensions: ['.html', '.svelte']
	};

	return {
		name: 'rollup_plugin_svelte',

		async transform(code, id) {
			if (!options.extensions.find((ext) => id.endsWith(ext))) return null;

			console.log('Svelte:', id);

			try {
				if (svelte === undefined) new Error("Svelte compilator didn't initialized yet");

				const { js } = await svelte.compile(code, {
					dev: false,
					css: true
				});

				return { code: js.code, map: null };
			} catch (err) {
				console.error(err);
				return null;
			}
		}
	};
}

// Helpers

async function init_svelte_compiler(version) {
	const svelte_url = `${repo}/svelte`;

	try {
		if (version === 'latest') {
			version = JSON.parse((await cash_or_fetch(`${svelte_url}/package.json`)).body).version;
		}

		(await download_module(`${svelte_url}@${version}/compiler.js`))();
	} catch (err) {
		console.error(err);
	}
}

async function init_rollup() {
	const rollup_url = `${repo}/rollup/dist/rollup.browser.js`;

	try {
		(await download_module(rollup_url))();
	} catch (err) {
		console.error(err);
	}
}

async function init_cjs2es() {
	const cjs2es_url = `${repo}/cjs2es`;

	try {
		(await download_module(cjs2es_url))();
	} catch (err) {
		console.error(err);
	}
}
const MCASH = [];
async function download_module(url) {
	try {
		if (MCASH.hasOwnProperty(url)) return new Function(MCASH[url]);

		const result = await fetch(url);
		if (result.status !== 200) new Error("Can't download module: " + url);

		const code = await result.text();

		if (!/^\(function/.test(code)) new Error('Wrong data for module: .' + url);

		MCASH[url] = code;

		return new Function(code);
	} catch (err) {
		console.error(err);
		return null;
	}
}

const FCASH = [];
async function cash_or_fetch(url) {
	try {
		if (FCASH.hasOwnProperty(url)) return FCASH[url];

		const result = await fetch(url);
		const data = { url: result.url, status: result.status, body: await result.text() };

		FCASH[url] = data;

		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}

function addSlash(url) {
	if (url.slice(-1) === '/') return url;
	if (/\.[a-z0-9]+$/.test(url)) return url;
	return url + '/';
}

async function getModuleURL(url) {
	let result;

	// try to find package real URL
	result = await cash_or_fetch(url);
	if (result.status !== 200) return null;
	url = result.url;

	// try to find es module
	const regex = /\.js$/;
	if (regex.test(url)) {
		result = await cash_or_fetch(url.replace(regex, '.mjs'));
		if (result.status === 200) url = result.url;
	}

	return url;
}
