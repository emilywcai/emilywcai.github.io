import LogoName from '../../assets/EmilyCursiveNoBg.png'

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br/> I'm
                <img src={LogoName} alt="name" />
                </h1>
                <h2>Software Engineering Student / Web Developer</h2>
                <Link to="/contact" className="flat">Con</Link>
            </div>
        </div>
    )
}

export default Home