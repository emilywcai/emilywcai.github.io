import LogoName from '../../assets/EmilyCursiveNoBg.png'

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm</h1>
                <img src={LogoName} alt="name" />
            </div>
        </div>
    )
}

export default Home