import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  // Angular Project Source File
  projectRoot: "./src",
  // Angular Project Nae
  projectName: "myblog",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  // scully generated output files
  outDir: './dist/static',
  // contains the route configuration that
  // will be used for accessing blog poses
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  }
};
