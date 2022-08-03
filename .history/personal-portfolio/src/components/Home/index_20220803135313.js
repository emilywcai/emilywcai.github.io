import LogoName from '../../assets/EmilyCursiveNoBg.png'

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoName} alt="name" />
                <br />
                software engineering student
                </h1>
            </div>
        </div>
    )
}

export default Home