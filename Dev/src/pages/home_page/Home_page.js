import BannerSection from '../../components/home_page/BannerSection';
import InfoSection from '../../components/home_page/InfoSection';
import PopularSection from '../../components/home_page/PopularSection';

function home_page(){
    return(
        <div>
            <BannerSection />
            <InfoSection />
            <PopularSection />
        </div>
    )
}

export default home_page;