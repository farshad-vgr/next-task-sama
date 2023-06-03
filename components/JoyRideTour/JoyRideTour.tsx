import Joyride from "react-joyride";

const TOUR_STEPS = [
	{
		target: ".signup-input", // Target element class name
		title: "اطلاعات اولیه:",
		content: "برای شروع نوبت دهی ابتدا باید این قسمت را تکمیل کنید!",
		offset: 5, // The distance from the target to the tooltip
		event: "hover", // The event to trigger the beacon(click/hover)
		disableBeacon: true, // This makes the tour to start automatically without click
	},
	{
		target: ".captcha-box",
		title: "راستی آزمایی:",
		content: "برای اثبات اینکه شما ربات نیستید این پازل را حل کنید!",
		offset: 5,
		event: "hover",
	},
	{
		target: ".tour-pagination-list",
		title: "Draggable List:",
		content: "These itmes are draggable!",
		offset: 5,
		event: "hover",
	},
	{
		target: ".tour-pagination-mui",
		title: "Pagination Library:",
		content: "We use Material UI pagination to show more data in list!",
		offset: 5,
		event: "hover",
	},
];

interface TourStyles {
	tooltipContainer: {
		marginRight: number;
		textAlign: "left" | "right" | "center";
		cursor: string;
		fontFamily: string;
	};
	tooltipTitle: {
		padding: number;
	};
	buttonClose: {
		top: string;
		right: string;
		display: string;
		jusctifyContent: string;
		alignItems: string;
		padding: string;
		width: string;
		height: string;
		color: string;
		fontWeight: string;
		outline: string;
		border: string;
		borderRadius: string;
		backgroundColor: string;
	};
	buttonNext: {
		margin: string;
		padding: string;
		backgroundColor: string;
		border: string;
		outline: string;
		fontFamily: string;
	};
	buttonBack: {
		marginRight: number;
		color: string;
		fontFamily: string;
	};
	buttonSkip: {
		color: string;
		fontFamily: string;
	};
	options: {
		backgroundColor: string;
		arrowColor: string;
	};
}

const TOUR_STYLES: TourStyles = {
	tooltipContainer: {
		marginRight: 8,
		textAlign: "right",
		cursor: "default",
		fontFamily: "IranSansMedium",
	},
	tooltipTitle: {
		padding: 2,
	},
	buttonClose: {
		top: "0.25rem",
		right: "0.25rem",
		display: "flex",
		jusctifyContent: "center",
		alignItems: "center",
		padding: "0.25rem",
		width: "0.5rem",
		height: "0.5rem",
		color: "red",
		fontWeight: "bold",
		outline: "none",
		border: "1px dashed red",
		borderRadius: "50%",
		backgroundColor: "pink",
	},
	buttonNext: {
		margin: "0 0 0.5rem 0",
		padding: "0.65rem 0.5rem 0.25rem 0.5rem",
		backgroundColor: "deepskyblue",
		border: "1px dashed black",
		outline: "none",
		fontFamily: "IranSansMedium",
	},
	buttonBack: {
		marginRight: 10,
		color: "deepskyblue",
		fontFamily: "IranSansMedium",
	},
	buttonSkip: {
		color: "gray",
		fontFamily: "IranSansMedium",
	},
	options: {
		backgroundColor: "white",
		arrowColor: "white",
	},
};

const JoyRideTour = () => {
	return (
		<>
			<Joyride
				steps={TOUR_STEPS}
				styles={TOUR_STYLES}
				floaterProps={{ placement: "auto" }}
				locale={{ next: "بعدی", back: "قبلی", last: "پایان", skip: "( رد کردن توضیحات )" }}
				showSkipButton
				continuous
				showProgress
				disableOverlayClose
				scrollToFirstStep
				spotlightClicks
			/>
		</>
	);
};

export default JoyRideTour;
