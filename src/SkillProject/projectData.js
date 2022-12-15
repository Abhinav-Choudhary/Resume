import cropPrediction from "../images/cropPrediction.jpg";
import schedulingAlgorithm from "../images/schedulingAlgorithmsOutput.png";
import hydrationMonitoring from "../images/hydrationMonitoring.jpg";
import reflexArc from "../images/reflexarc.png";

const projectData = [
    {
        key: "cropPrediction",
        title: "Crop Prediction Analysis",
        imageSrc: cropPrediction,
        imageAlt: "Top view of Arduino board with soil moisture and other sensors.",
        briefDescription: "Takes input such as temperature, humidity, soil moisture, and light intensity from various sensors and uses decision tree machine learning algorithm to predict the most optimum crop.",
        href: "https://github.com/Abhinav-Choudhary/Crop-prediction-analysis",
        linkTitle: "Github Repository"
    },
    {
        key: "schedulingAlgorithms",
        title: "Scheduling Algorithms",
        imageSrc: schedulingAlgorithm,
        imageAlt: "Screenshot of output screen of the program.",
        briefDescription: "Program that finds the most optimal scheduling algorithm for processes and helps aid the operating systems. It contains both CPU and Disk scheduling algorithms.",
        href: "https://github.com/Abhinav-Choudhary/Scheduling-Algorithms",
        linkTitle: "Github Repository"
    },
    {
        key: "hydrationMonitoring",
        title: "Hydration Monitoring",
        imageSrc: hydrationMonitoring,
        imageAlt: "Close up shot of an Arduino board",
        briefDescription: "IoT based systems that checks water content present inside our body and calls if the water content falls to a threatening level. Uses heartbeat sensors to calculate water level.",
        href: "https://github.com/Abhinav-Choudhary/Hydration-Monitiring",
        linkTitle: "Github Repository"
    },
    {
        key: "reflexArc",
        title: "Reflex Arc",
        imageSrc: reflexArc,
        imageAlt: "Top view of Arduino board attached to a fake arm.",
        briefDescription: "Replicated the action of reflex arc using arduino board and temperature sensors. Arduino board reads temperature from LM35 sensor and accordingly moves a servo motor.",
        href: "https://github.com/Abhinav-Choudhary/Reflex-Arc",
        linkTitle: "Github Repository"
    }
];

export default projectData;