var tasks = {
  svg: {
    plugins: [
      { removeEmptyAttrs:  true },
      { removeEmptyText:  true },
      { removeEmptyContainers:  true },
      { cleanupAttrs:  false },
      { removeDoctype:  false },
      { removeXMLProcInst:  false },
      { removeComments:  false },
      { removeMetadata:  false },
      { removeTitle :  false },
      { removeDesc:  false },
      { removeUselessDefs:  false },
      { removeXMLNS:  false },
      { removeEditorsNSData :  false },
      { removeHiddenElems:  false },
      { removeViewBox:  false },
      { cleanupEnableBackground:  false },
      { minifyStyles:  false },
      { convertStyleToAttrs:  false },
      { convertColors:  false },
      { convertPathData:  false },
      { convertTransform:  false },
      { removeUnknownsAndDefaults:  false },
      { removeNonInheritableGroupAttrs:  false },
      { removeUselessStrokeAndFill:  false },
      { removeUnusedNS:  false },
      { cleanupIDs:  false },
      { cleanupNumericValues:  false },
      { cleanupListOfValues:  false },
      { moveElemsAttrsToGroup:  false },
      { moveGroupAttrsToElems:  false },
      { collapseGroups:  false },
      { removeRasterImages:  false },
      { mergePaths:  false },
      { convertShapeToPath:  false },
      {                }
    ]
  }
}

module.exports = tasks
