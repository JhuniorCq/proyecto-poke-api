import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    scales
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const StatsPokemon = ({ graphConfigurationStats, nameStats, valueStats }) => {
    const { graphicData, options } = graphConfigurationStats;

    const data = useMemo(() => {
        return {
            datasets: [
                graphicData
            ],
            labels: nameStats
        }
    }, [valueStats]);
    
    return (
        <Bar data={data} options={options} />
    );
};