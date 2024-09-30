import BannerSection from '../components/home_page/BannerSection';
import InfoSection from '../components/home_page/InfoSection';
import PopularSection from '../components/home_page/PopularSection';
import "../output.css"

function HomePage(){
    return(
        <div>
            <BannerSection />
            <InfoSection />
            <PopularSection />
        </div>
    )
}

export default HomePage;