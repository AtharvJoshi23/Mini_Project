import ProfileCard from "./ProfileCard";

const CardSection = () => {

    const classData = [
        {subject: "Software And Engineering", year: "3rd year",faculty: "Prof.Suvarna Thakur"},
        {subject: "Human Computer Interaction", year: "3rd year",faculty: "Prof.Suvarna Thakur"},
        {subject: "Computer Networking and Internet Protocol ", year: "3rd year",faculty: "Prof.Sanjay Sutar"},
        {subject: "Object Oriented Programming", year: "3rd year",faculty: "Prof.Pranita Jadhav"},
        {subject: "Network And Management", year: "3rd year",faculty: "Prof.Ekta Meshram"},
        {subject: "Data Manufacturing And Warehousing", year: "3rd year",faculty:  "Prof.Suvarna Thakur"},
        {subject: "Data Structure and Algorithm", year: "3rd year",faculty: "Prof.Sanjay Sutar"},
        {subject: "Data Analysis And Algorithm", year: "3rd year",faculty:  "Prof.Sanjay Sutar"},
    ];

    return (
        <div className="w-screen grid grid-cols-4 gap-10 pt-10 p-4 max-md:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1 max-xl:grid-cols-3 ">

            {classData.map((data) => (<ProfileCard classroom={data}/>))}
        </div>
    )
}

export default CardSection;