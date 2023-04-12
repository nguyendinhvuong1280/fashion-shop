import Header from "../components/header/header";
import NavHeader from "../components/header/nav-header";

function HomePage() {

    return (
        <div className="Home">
            <Header></Header>
            <NavHeader></NavHeader>
            <div style={{
                width: "100%",
                height: "935px",
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url("https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/dream-land/v6-1600x635.jpg")`
            }}>
            </div>
        </div >
    )
}

export default HomePage;