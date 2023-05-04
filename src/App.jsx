import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
	const users = [
		{
			userName: "Darkk3n",
			name: "Gerardo",
			isFollowing: true,
		},
		{
			userName: "Yesszoe",
			name: "Yessica",
			isFollowing: false,
		},
	];
	return (
		<section className="App">
			{users.map(({ userName, name, isFollowing }) => (
				<TwitterFollowCard
					key={userName}
					userName={userName}
					initialIsFollowing={isFollowing}
				>
					{name}
				</TwitterFollowCard>
			))}
		</section>
	);
}
