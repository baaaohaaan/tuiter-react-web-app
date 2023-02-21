import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
return(`
    <div class="row">
        <!--search input-->
        <div class="col-11">
            <div class="position-relative">
                <!--search icon-->
                <span class="position-absolute top-50 start-0 translate-middle-y ps-3">
                    <i class="fas fa-search"></i>
                </span>
                <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
            </div>
        </div>
        <!--settings icon-->
        <div class="col-1">
            <i class="fas fa-cog fa-2x" style="color: #2a9fd6"></i>
        </div>
    </div>
    
    <!--tabs-->
    <ul class="nav nav-tabs mt-1 mb-1">
        <li class="nav-item">
            <a class="nav-link active" href="#">
                For You
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                Trending
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                News
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">
                Sports
            </a>
        </li>
        <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="#" tabindex="-1">
                Entertainment
            </a>
        </li>
    </ul>
    
    <!--content below tabs-->
    <div class="position-relative">
        <img src="../../images/spacex-starship.png" width="100%"/>
        <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
    </div>
    ${PostSummaryList()}
`);
}

export default ExploreComponent;