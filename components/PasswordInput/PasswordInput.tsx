import React, { memo } from "react";

interface Props {
	username: string;
	placeHolder: string;
}

const UsernameInput = ({ username, placeHolder }: Props): JSX.Element => {
	return (
		<>
			<section>
				<div className="content">
					<div className="icon-container">
						<div className="fa fa-pencil-alt"></div>
					</div>

					<input
						autoFocus
						type="text"
						placeholder={placeHolder}
						minLength={3}
						maxLength={15}
						value={username}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log("test")}
					/>
				</div>
			</section>
		</>
	);
};

export default memo(UsernameInput);
