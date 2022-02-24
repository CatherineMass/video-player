"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
require("./App.css");
const MainContainer_1 = tslib_1.__importDefault(require("./components/MainContainer"));
const SideBar_1 = tslib_1.__importDefault(require("./components/SideBar"));
function App() {
    const [videoIds, setVideoIds] = react_1.useState([]);
    const [defaultVideo, setDefaultVideo] = react_1.useState({});
    const getVideos = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://youtube-api-smartcoding-2022.herokuapp.com/videos');
        const data = yield response.json();
        setVideoIds(data.videos);
        setDefaultVideo(data.videos[0]);
    });
    react_1.useEffect(() => {
        getVideos();
    }, []);
    // Previous and Next buttons:
    const [currentIndex, setCurrentIndex] = react_1.useState(0);
    const currentVideo = videoIds[currentIndex];
    // Next Button
    const nextClick = () => {
        currentIndex < videoIds.length - 1
            ? setCurrentIndex(currentIndex + 1)
            : alert('This is the end of the playlist!');
    };
    // Previous Button
    const prevClick = () => {
        currentIndex > 0
            ? setCurrentIndex(currentIndex - 1)
            : alert('No more videos! Try clicking Next instead.');
    };
    // Search bar ==> To filter suggestions based on user input:
    const [filteredList, setFilteredList] = react_1.useState([]);
    let searchWord = '';
    const handleFilter = (e) => {
        searchWord = e.target.value;
        const newFilter = videoIds.filter((video) => {
            var _a, _b;
            return typeof ((_a = video === null || video === void 0 ? void 0 : video.id) === null || _a === void 0 ? void 0 : _a.name) === 'string' && ((_b = video === null || video === void 0 ? void 0 : video.id) === null || _b === void 0 ? void 0 : _b.name.toLowerCase().includes(searchWord.toLowerCase()));
        });
        searchWord === '' ? setFilteredList([]) : setFilteredList(newFilter);
    };
    // Handle search from suggestions
    const handleSearch = (id, video) => {
        const indexVideoSearched = videoIds.findIndex((video) => { var _a; return ((_a = video === null || video === void 0 ? void 0 : video.id) === null || _a === void 0 ? void 0 : _a.videoId) === id; });
        setCurrentIndex(indexVideoSearched);
        sendVideoToSidebar(JSON.stringify(video), video);
    };
    // Sidebar default list:
    const [listDefault, setListDefault] = react_1.useState([]);
    const sendVideoToSidebar = (stringifiedVid, video) => {
        const stringListDef = listDefault.map((vid) => JSON.stringify(vid));
        video &&
            !stringListDef.includes(stringifiedVid) &&
            setListDefault([...listDefault, video]);
    };
    // When link sideBar clicked:
    const handleSidebarClick = (id) => {
        const indexVideoSearched = videoIds.findIndex((video) => { var _a; return ((_a = video === null || video === void 0 ? void 0 : video.id) === null || _a === void 0 ? void 0 : _a.videoId) === id; });
        setCurrentIndex(indexVideoSearched);
    };
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(MainContainer_1.default, { handleFilter: handleFilter, handleSearch: handleSearch, nextClick: nextClick, prevClick: prevClick, sendVideoToSidebar: sendVideoToSidebar, filteredList: filteredList, currentVideo: currentVideo }),
        react_1.default.createElement(SideBar_1.default, { handleSidebarClick: handleSidebarClick, listDefault: listDefault, videoIds: videoIds })));
}
exports.default = App;
