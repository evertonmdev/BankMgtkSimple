import { BusyToday } from "../components/BusyToday"
import { InfoExtract } from "../components/InfoExtract"
import { WelbcomeSaldo } from "../components/WelbcomeSaldo"

export const Dashboard = () => {
    return (
        <div className="flex gap-3 flex-wrap">
            <WelbcomeSaldo /> 
            <BusyToday />
            <InfoExtract />
        </div>
    )
}