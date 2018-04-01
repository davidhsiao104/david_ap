import React from 'react';

const Picture = (props) => {
  
	const imgUrl = props.fileMap && props.fid ? props.fileMap[props.fid][0] : "";

	//console.log(fileMap);


  return (<img src={imgUrl}/>);
}

export default Picture;