import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	gap: 5px;
	padding: 5px;
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 1400px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (min-width: 1800px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		& div:nth-child(1) {
			grid-row: 1 / span 2;
		}
		& div:nth-child(2) {
			grid-column: 2 / span 2;
		}
		& div:nth-child(4) {
			grid-column: 2 / span 3;
		}
		& div:nth-child(7) {
			grid-column: span 2;
		}
		& div:nth-child(8) {
			grid-column: span 2;
		}
	}
`;

export const Container = styled.div`
	/* background-image: url("./image/mountain.jpg"); */
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	min-height: 300px;
	border-radius: 3px;
	overflow: hidden;
	cursor: pointer;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);

	position: relative;

	/* styling for child */
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: end;
	color: white;
	& p:nth-child(1) {
		font-size: 18px;
		font-weight: bold;
		z-index: 2;
	}
	& p:nth-child(2) {
		font-size: 12px;
		z-index: 2;
	}

	&::after {
		content: "";
		position: absolute;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 1) 100%);
		left: 0;
		right: 0;
		min-height: 100px;
		bottom: 0;
		z-index: 1;
		opacity: 0.7;
	}
`;
