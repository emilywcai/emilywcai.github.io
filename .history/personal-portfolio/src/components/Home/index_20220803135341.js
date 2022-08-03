import LogoName from '../../assets/EmilyCursiveNoBg.png'

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br/> I'm
                <img src={LogoName} alt="name" />
                <br />
                software engineering student
                </h1>
                <h2></h2>
            </div>
        </div>
    )
}

export default Home