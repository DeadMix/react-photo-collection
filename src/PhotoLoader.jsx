import React from "react"
import ContentLoader from "react-content-loader"
import './index.scss';

export const PhotoLoader = (props) => (
	<ContentLoader
		speed={.5}
		height={419}
		viewBox="0 0 286 419"
		backgroundColor="#333"
		foregroundColor="#444"
		className="image-loader"
		{...props}
	>
		<rect x="97" y="80" rx="0" ry="0" width="1" height="1" />
		<rect x="79" y="101" rx="0" ry="0" width="1" height="0" />
		<rect x="225" y="358" rx="0" ry="0" width="1" height="1" />
		<rect x="0" y="0" rx="20" ry="20" width="288" height="250" />
		<rect x="0" y="270" rx="20" ry="20" width="89" height="80" />
		<rect x="199" y="270" rx="20" ry="20" width="89" height="80" />
		<rect x="100" y="270" rx="20" ry="20" width="89" height="80" />
		<rect x="0" y="374" rx="10" ry="10" width="250" height="20" />
	</ContentLoader>
)

