import { useState } from "react";

/* eslint-disable react/prop-types */
export function TwitterFollowCard({
	children,
	userName = "unknown",
	initialIsFollowing,
}) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
	const text = isFollowing ? "Siguiendo" : "Seguir";
	const buttonClassName = isFollowing
		? "tw-followCard-button is-following"
		: "tw-followCard-button";

	const handleFollow = () => {
		setIsFollowing(!isFollowing);
	};
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					alt="El avatar default"
					src={`https://unavatar.io/${userName}`}
				/>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">@{userName}</span>
				</div>
			</header>
			<aside>
				<button onClick={handleFollow} className={buttonClassName}>
					<span className="tw-followCard-text">{text}</span>
					<span className="tw-followCard-stopFollow">Dejar de seguir</span>
				</button>
			</aside>
		</article>
	);
}
