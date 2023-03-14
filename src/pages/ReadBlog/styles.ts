import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100vh;
	background-image: url("/image/bgReadBlog.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const BlogTitle = styled.h1`
	text-align: center;
	padding-top: 100px;
	font-size: 70px;
	text-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.063), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.07),
		12.5px 12.5px 10px rgba(0, 0, 0, 0.07), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.066),
		41.8px 41.8px 33.4px rgba(0, 0, 0, 0.062), 100px 100px 80px rgba(0, 0, 0, 0.07);
`;

export const Article = styled.article`
	max-width: 1200px;
	padding: 10px;
	margin: 20px auto 0;
	display: flex;
	flex-direction: column;
	gap: 20px;
	& p:first-child {
		::first-letter {
			font-size: 40px;
			padding-left: 5px;
			font-weight: bold;
		}
	}
`;
