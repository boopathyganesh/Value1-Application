import CoOwnJourney from "@/components/DashboardComponents/CoOwnJourney";
import CoOwnRedeem from "@/components/DashboardComponents/CoOwnRedeem";
import Evaluation from "@/components/DashboardComponents/Evaluvation";
import GoldReward from "@/components/DashboardComponents/GoldReward"
import Membership from "@/components/DashboardComponents/Membership";
import Redeem from "@/components/DashboardComponents/Redeem";
import ValueCoins from "@/components/DashboardComponents/ValueCoins";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center text-black w-full ">
			<div className="flex items-center justify-center w-full p-4 h-58 gap-5">
				<div className="flex items-center justify-center w-full gap-3">
					<GoldReward />
					<ValueCoins />
					<Membership />
				</div>
			</div>
			<div className="flex items-center justify-center w-full p-4 gap-5">
				<Evaluation />
				<CoOwnJourney />
			</div>
		</main>
	);
}
