
module.exports = function( vs ){

  // validate required params
  if( !vs.isset('boundary:rect:top') ||
      !vs.isset('boundary:rect:right') ||
      !vs.isset('boundary:rect:bottom') ||
      !vs.isset('boundary:rect:left') ||
      !vs.isset('centroid:field') ){
    return null;
  }

  // base view
  var view = {
    geo_bounding_box: {
      // `type` was deprecated in es7.14
      //
      // According to https://github.com/pelias/documentation/blob/master/requirements.md#elasticsearch
      // pelias supports back to es7.5+, so we should dynamically include this param depending on the
      // es version. I'm not sure how to do that yet - can we pass it in through `vs`?
      // type: vs.var('boundary:rect:type')
    }
  };

  // bbox
  view.geo_bounding_box[ vs.var('centroid:field') ] = {
    top: vs.var('boundary:rect:top'),
    right: vs.var('boundary:rect:right'),
    bottom: vs.var('boundary:rect:bottom'),
    left: vs.var('boundary:rect:left')
  };

  return view;
};
