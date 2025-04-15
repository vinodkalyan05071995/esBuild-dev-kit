import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';




(async () => {

  const entryPoints = [
    { 
        out:"base",
        in:'src/**/*.js'

    },{
        out:"common",
        in:'src/**/common/base.scss'
        
    },'src/**/*.scss' ];

 let ctx = await esbuild.context({
    entryPoints,
    bundle: true,
    sourcemap: true,
    treeShaking: true,
    outdir: 'Assets',
    plugins: [sassPlugin()],
  });

  await ctx.watch()
console.log("👀 Watching for changes...")
  
//   console.log('✅ Build completed successfully!');
})();
