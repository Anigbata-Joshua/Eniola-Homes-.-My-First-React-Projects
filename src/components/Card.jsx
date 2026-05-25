import team1 from "../assets/images/team.jpg"
import team2 from "../assets/images/team2.jpg"
import team3 from "../assets/images/team3.jpg"

function Card() {
    const team_arr = [
        { id: 1, img: team1, name: "Sarah Mitchell", title: "Senoir partner", sales: "$500M+ in sales", linkA: "Luxury Properties", linkB: "Penthouses" },
        { id: 2, img: team2, name: "Michael Chen ", title: "Senoir Agent", sales: "$250M+ in sales", linkA: "Brooklyn", linkB: "Investment Properties" },
        { id: 3, img: team3, name: "Jennifer Ross ", title: "Agent", sales: "$150M+ in sales", linkA: "Downtown Manhanttan", linkB: "lofts" },
    ]
    return (
        <div className="grid grid-cols-1 gap-8 mx-auto max-w-6xl">
            {team_arr.map((card) => {
                return (
                    <div className="p-6 rounded-2xl text-center shadow-lg bg-[#1F2937]" key={card.id}>
                        <img src={card.img} alt="" className="rounded-full w-40 h-auto mx-auto mb-4" />
                        <h2 className="text-[18px] font-semibold">{card.name}</h2>
                        <p className="text-green-600 text-sm font-medium  leading-5">{card.title}</p>
                        <p className="text-gray-400 mt-1 mb-4">${card.sales}</p>
                        <div className="area flex justify-center gap-3 mt-2 border-b ">
                            <button className="px-3 py-1 text-[12px] rounded-full bg-gray-700 mb-8 cursor-pointer">{card.linkA}</button>
                            <button className="px-3 py-1 text-[12px] rounded-full bg-gray-700 mb-8 cursor-pointer">{card.linkB}</button>
                        </div>
                        <div className="contact flex justify-center text-gray-500 gap-4 mt-10 ">
                            <h3 className="cursor-pointer">📞Call</h3>
                            <h3 className="cursor-pointer">✉️Email</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Card;