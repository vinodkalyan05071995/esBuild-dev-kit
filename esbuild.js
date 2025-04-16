import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';




(async () => {

  const entryPoints = [
    'src/**/theme.js',
    'src/**/sections.js',
    'src/js/vender.js',
    'src/**/base.scss',
    'src/**/sections/*.scss'];

 let ctx = await esbuild.context({
    entryPoints,
    bundle: true,
    // sourcemap: true,
    treeShaking: true,
    entryNames: '[name]',
    outdir: 'Assets',
    // loader: {
    //   '.js': 'js',
    //   '.scss': 'css'
    // },
    format: 'esm',
    plugins: [sassPlugin()],
  });

  await ctx.watch()
console.log("👀 Watching for changes...")  
console.log('✅ Build completed successfully!');
})();
