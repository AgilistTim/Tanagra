export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7487598f.js","imports":["_app/immutable/entry/start.7487598f.js","_app/immutable/chunks/index.2ee51f7d.js","_app/immutable/chunks/singletons.55ba2b59.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3c4fe6dd.js","imports":["_app/immutable/entry/app.3c4fe6dd.js","_app/immutable/chunks/index.2ee51f7d.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
