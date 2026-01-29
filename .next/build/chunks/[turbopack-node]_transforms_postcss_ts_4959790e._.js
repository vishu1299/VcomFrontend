module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/vcom-fronted/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/cbc19_60fee94a._.js",
  "chunks/[root-of-the-server]__d21c5337._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/vcom-fronted/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];