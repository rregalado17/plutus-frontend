const cryptos = [
    {
        id: 1,
        name: "Bitcoin",
        price: "$10",
        active: true,
    },
    {
        id: 2,
        name: "Ethereum",
        price: "$5",
        active: true,
    },
    {
        id: 3,
        name: "Dogecoin",
        price: "$1",
        active: true,
    }
]

const Cryptos = () => {
    return (
        <>
            {cryptos.map((c) => (<h3 key={c.id}>{c.name}</h3>)
            ) 
            }
            
        </>
    )
}

export default Cryptos
